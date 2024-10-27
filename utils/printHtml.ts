export function printHTML(printHtml: string) {
  let printStyles = "";
  for (const node of [
    ...document.querySelectorAll('link[rel="stylesheet"], style'),
  ]) {
    printStyles += node.outerHTML;
  }

  var printer = window.open("", "", "height=600, width=800");

  if (!printer) return;

  printer.document.write(
    `<!DOCTYPE html>
      <html>
        <head>
          ${printStyles}
        </head>
        <body>
          ${printHtml}
        </body>
      </html>`
  );

  printer.document.close();
  printer.print();
  printer.close();
}
