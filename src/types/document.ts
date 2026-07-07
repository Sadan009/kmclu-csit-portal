import { Timestamp } from "firebase/firestore";

/**
 Firestore Document
 */
export interface DocumentType {
  id: string;
  title: string;
  category: string;
  program: string;
  semester: string;
  year: string;
  driveFileId: string;
  createdAt: Timestamp;
}

/**
 Form Data - Add/Edit
 */
export interface DocumentFormData {
  title: string;
  category: string;
  program: string;
  semester: string;
  year: string;
  driveFileId: string;
}
