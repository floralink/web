import hash from "object-hash";
import { werbeo } from "@floralink/databases";
const taxonReferencePluginID = "germansl";

function isUniqueQuery(query: any) {
  const reports = useReportStore();

  const { ["creationDate"]: creationDate, ...newQueryWithoutDate } = query;

  return Object.values(reports.reports).every((otherReport) => {
    const { ["creationDate"]: creationDate, ...otherQueryWithoutDate } =
      otherReport.occurrenceDataQuery;

    // TODO: this is really not great for comparing objects
    return !(
      JSON.stringify(otherQueryWithoutDate) ===
      JSON.stringify(newQueryWithoutDate)
    );
  });
}

export default async function performQuery(query: any) {
  const plugins = usePluginStore();
  const reports = useReportStore();
  const taxa = useTaxonStore();
  const occurrences = useOccurrenceStore();

  // skip query if already done earlier
  // TODO: notify user that it was already queried
  if (!isUniqueQuery(query)) return;

  // generate reportID from query object with the object-hash library
  const reportID = hash(query);

  // initialize report object
  reports.reports[reportID] = {
    id: reportID,
    occurrenceDataQuery: query,
    taxonOccurrenceData: {},
    occurrenceStatistics: {},
    taxonOccurrenceStatistics: {},
    taxonSpecificStatistics: {},
  };

  // get occurrence data from WerBeo through floralink server
  const resOccurrenceData = await floralink.getOccurrenceData(werbeo, query);

  const occurrenceData = resOccurrenceData.occurrences;
  occurrences.occurrences["werbeo"] = Object.assign(
    occurrences.occurrences["werbeo"] || {},
    occurrenceData
  );

  // convert occurrenceData to taxonOccurrenceData for later analysis
  const taxonOccurrenceData =
    floralink.convertToTaxonOccurrenceData(occurrenceData);
  reports.reports[reportID].taxonOccurrenceData = taxonOccurrenceData;

  // calculate statistics with floralink
  reports.reports[reportID].occurrenceStatistics =
    floralink.getOccurrenceStatistics(occurrenceData);
  reports.reports[reportID].taxonOccurrenceStatistics =
    floralink.getTaxonOccurrenceStatistics(taxonOccurrenceData, occurrenceData);

  const taxonIDs = Object.keys(resOccurrenceData.taxa);

  // request taxon reference data for occurring taxa
  const resTaxonReference = floralink.getTaxonDataByIDs(
    taxonIDs,
    taxonReferencePluginID
  );
  taxa.taxonReference[taxonReferencePluginID] = Object.assign(
    taxa.taxonReference[taxonReferencePluginID] || {},
    resTaxonReference.taxa
  );

  // initialize / reset taxonSpecificStatistics
  reports.reports[reportID].taxonSpecificStatistics = {};

  // request taxon specific data for occurring taxa
  Object.values(plugins.taxonSpecificPlugins).forEach((taxonSpecificPlugin) => {
    const taxonSpecificQuery = {
      taxonIDs, // this is the standard
      // taxonIDs: Object.keys(germanslDB.data), // for testing: calculate statistics for all taxa
      taxonSpecificPluginID: taxonSpecificPlugin.name,
      taxonReferencePluginID,
    };

    const resTaxonSpecific = floralink.getTaxonDataByIDs(
      taxonSpecificQuery.taxonIDs,
      taxonSpecificQuery.taxonSpecificPluginID
    );
    taxa.taxonSpecific[taxonSpecificPlugin.name] = Object.assign(
      taxa.taxonSpecific[taxonSpecificPlugin.name] || {},
      resTaxonSpecific.taxa
    );

    // calculate statistics for taxon specific data
    reports.reports[reportID].taxonSpecificStatistics[
      taxonSpecificPlugin.name
    ] = floralink.getTaxonSpecificStatistics(
      taxonSpecificPlugin,
      resTaxonSpecific
    );
  });

  reports.activeID = reportID;
  return "OK";
}
