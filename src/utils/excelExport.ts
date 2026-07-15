import * as XLSX from "xlsx";
import * as FileSaver from "file-saver";
import { DocumentType } from "../types/document";
import { getDownloadUrl } from "./googleDrive";

export const exportDocumentsToExcel = (documents: DocumentType[]) => {
  const excelData = documents.map((doc, index) => ({
    "S.No": index + 1,
    Title: doc.title,
    Category: doc.category,
    Program: doc.program,
    Semester: doc.semester,
    Year: doc.year,
    "Uploaded Date": doc.createdAt?.toDate
      ? doc.createdAt.toDate().toLocaleDateString("en-GB")
      : "",
    "Google Drive": getDownloadUrl(doc.driveFileId),
  }));

  const worksheet = XLSX.utils.json_to_sheet(excelData);

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "Documents");

  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });

  const data = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
  });

  const today = new Date().toLocaleDateString("en-GB").replace(/\//g, "-");

  FileSaver.saveAs(data, `KMCLU_CSIT_Report_${today}.xlsx`);
};
