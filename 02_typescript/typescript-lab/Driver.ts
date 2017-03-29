import { PdfFileFilter } from "./PdfFileFilter";

var  pdfFileFilter = new PdfFileFilter();

var theFileNames : string[] = ["alpha.doc", "beta.ppt", "charlie.pdf", "delta.exe", "echo.class"];

var i : number;

for (i=0; i < theFileNames.length; i++) {

  var tempFileName = theFileNames[i];

  if (pdfFileFilter.accept(tempFileName)) {
    console.log(tempFileName);
  }

}
