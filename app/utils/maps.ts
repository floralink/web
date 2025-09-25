type Map = [string, string][];

function map(search: string, map: Map) {
  let matchingPair = map.find((pair) => pair[0] === search);
  return matchingPair ? matchingPair[1] : undefined;
}

export const mapGroup = (group: string) => map(group, groupMap);
export const mapRank = (rank: string) => map(rank, rankMap);

const groupMap: Map = [
  ["F", "Farne"],
  ["S", "Samenpflanzen"],
  ["P", "Gefäßsporenpflanzen"],
  ["M", "Moose"],
  ["A", "Algen"],
];

export const rankMap: Map = [
  ["ABT", "Abteilung"],
  ["UAB", "Unterabteilung"],
  ["KLA", "Klasse"],
  ["ORD", "Ordnung"],
  ["FAM", "Familie"],
  ["GAT", "Gattung"],
  ["SGE", "Untergattung"],
  ["SEC", "Sektion"],
  ["AGG", "Artengruppe"],
  ["SER", "Serie"],
  ["SSE", "Subsektion"],
  ["SPE", "Art"],
  ["SSP", "Unterart"],
  ["FOR", "Form"],
  ["VAR", "Varietät"],

  // Weitere Werte aus GermanSL (README.html, ReflistHierarchy.png und germansl.sqlite):

  // ["ORA", "Ranglose Taxa"],
  // ["ROOT", ""], // gibt's tatsächlich zweimal (0: Planta + 94419: Gefaesspflanze)
  // ["CL1", ""],
  // ["AG3", "Aggregat_SEC-GAT"],
  // ["CL3", ""],
  // ["CL4", ""],
  // ["CL5", ""],
  // ["AG2", "Aggregat_höher"],
  // ["SFA", ""],
  // ["AG1", ""],
  // ["SGR", ""],
  // ["TaxonRank", ""], // leave out as it seems to be a mistake?
  // UKL für Unterklasse angegeben, aber nicht existent?
  // ZUS für Segregat angegeben, aber nicht existent?
];
