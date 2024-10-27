export default function (pluginID: string) {
  let match = [
    ["ellenberg", "i-heroicons-cursor-arrow-rays"],
    ["rotelistemv", "i-heroicons-chart-bar"],
    ["fukarekhenker", "i-heroicons-globe-europe-africa"],
  ].find((pair) => pair[0] === pluginID);
  return match ? match[1] : "i-heroicons-document";
}
