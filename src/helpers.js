// converts VagueDate data type to human-readable string
//
// Values for VagueDateType (from WerBeo API documentation)
//
// DAY 	          A precise day
// DAYS 	        An interval between tow days
// MONTH_IN_YEAR 	A month in a year
// YEAR 	        A year
// TO_YEAR 	      It's only known that the date is before a certain year
// FROM_YEAR 	    Don't use, you always can use today as an end date
// YEARS 	        An interval between tow years

export function dateToString(date) {
  switch (date.type) {
    case "DAY":
      return new Date(date.from).toLocaleDateString();
    case "DAYS":
      return `zwischen ${new Date(
        date.from
      ).toLocaleDateString()} und ${new Date(date.to).toLocaleDateString()}`;
    case "MONTH_IN_YEAR":
      return new Date(date.from).toLocaleString("default", {
        year: "numeric",
        month: "long",
      });
    case "YEAR":
      return new Date(date.from).getFullYear();
    case "TO_YEAR":
      return `bis ${new Date(date.to).getFullYear()}`;
    case "FROM_YEAR":
      return `seit ${new Date(date.from).getFullYear()}`;
    case "YEARS":
      return `zwischen ${new Date(date.from).getFullYear()} und ${new Date(
        date.to
      ).getFullYear()}`;
    default:
      // return "Datum konnte nicht aufgelöst werden";
      return `zwischen ${new Date(date.from).getFullYear()} und ${new Date(
        date.to
      ).getFullYear()}`;
  }
}

export function printHTML(printContent) {
  let printStyles = "";
  for (const node of [
    ...document.querySelectorAll('link[rel="stylesheet"], style'),
  ]) {
    printStyles += node.outerHTML;
  }

  var printer = window.open("", "", "height=600, width=800");

  printer.document.write(
    `<!DOCTYPE html>
      <html>
        <head>
          ${printStyles}
        </head>
        <body>
          ${printContent}
        </body>
      </html>`
  );
  // printer.focus();
  printer.document.close();
  printer.print();
  // printer.close();
}
