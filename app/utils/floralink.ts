// import Floralink and its plugins
import * as floralink from "@floralink/core";
import {
  werbeo,
  germanslDB,
  ellenbergDB,
  rotelistemvDB,
  fukarekhenkerDB,
} from "@floralink/databases";

// initialize taxon specific databases
floralink.initializeDatabase(germanslDB);
floralink.initializeDatabase(ellenbergDB);
floralink.initializeDatabase(rotelistemvDB);
floralink.initializeDatabase(fukarekhenkerDB);
floralink.initializeDatabase(werbeo);

export default floralink;

export function getScalesOfMeasure(plugin: any) {
  let scales: string[] = [];
  Object.values(plugin.properties).forEach((property) => {
    if (!scales.includes(property.scaleOfMeasure))
      scales.push(property.scaleOfMeasure);
  });
  return scales;
}
