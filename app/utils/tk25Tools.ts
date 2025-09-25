import tk25 from "./tk25.json";

// Quadrants

export const quadrantLabelMap: { [key: number]: string } = {
  1: "NW",
  2: "NO",
  3: "SW",
  4: "SO",
};

export function getQuadrantLabels(quadrants: number[]) {
  return quadrants.map((q) => quadrantLabelMap[q]);
}

// Cells

export const tk25Cells = Object.values(tk25)
  .map((area) => ({
    id: parseInt(area.id),
    name: area.name,
    label: area.cell + " - " + area.name,
  }))
  .sort((a, b) => (a.id < b.id ? -1 : 1));

export function getCellNameByID(cellID: number) {
  return tk25Cells.find((area) => area.id === cellID)?.name;
}

// TK25 strings

interface TK25 {
  string: string;
  cellID: number;
  quadrants: number[];
}

export function parseTK25String(tk25String: string): TK25 {
  const split = tk25String.split("/");
  return {
    string: tk25String,
    cellID: parseInt(split[0]),
    quadrants: split[1] ? split[1].split("").map((q) => parseInt(q)) : [],
  };
}

export function getTK25Label(tk25: TK25) {
  const cellName = getCellNameByID(tk25.cellID);
  const quadrantLabelArray = getQuadrantLabels(tk25.quadrants);

  return cellName
    ? cellName +
        (tk25.quadrants.length > 0
          ? " - " + getQuadrantLabels(tk25.quadrants).join("/")
          : "")
    : undefined;
}

const tk25Label = computed(() =>
  usedTK25.value
    ? usedTK25.value + (quadrants.value ? " - " + quadrants.value : "")
    : "Gib einen Wert ein..."
);
