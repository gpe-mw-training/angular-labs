import { FileFilter } from "./FileFilter";

export class PdfFileFilter implements FileFilter {

  /*
   * Tests whether or not the specified filename should be included in a list.
   * Returns true if and only if the filename should be included
   */
  accept(fileName : string) : boolean {

    var data = fileName.split(".");

    let result = (data.length == 2) && data[1] == "pdf";

    return result;

  }
}
