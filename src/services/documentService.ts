import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../../firebase";

import { DocumentFormData, DocumentType } from "../types/document";

const documentsRef = collection(db, "documents");

// ======================
// READ ALL DOCUMENTS
// ======================

export const getDocuments = async () => {
  const q = query(documentsRef, orderBy("createdAt", "desc"));

  const snapshot = await getDocs(q);

  return snapshot.docs.map((d) => ({
    id: d.id,
    ...d.data(),
  }));
};

// ======================
// GET SINGLE DOCUMENT
// ======================

export const getDocument = async (
  id: string,
): Promise<DocumentFormData | null> => {
  const ref = doc(db, "documents", id);

  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) return null;

  return snapshot.data() as DocumentFormData;
};

// ======================
// ADD DOCUMENT
// ======================

export const addDocument = async (data: DocumentFormData) => {
  return await addDoc(documentsRef, {
    ...data,
    createdAt: serverTimestamp(),
  });
};

// ======================
// UPDATE DOCUMENT
// ======================

export const updateDocument = async (id: string, data: DocumentFormData) => {
  const ref = doc(db, "documents", id);

  return await updateDoc(ref, { ...data });
};

// ======================
// DELETE DOCUMENT
// ======================

export const deleteDocument = async (id: string) => {
  const ref = doc(db, "documents", id);

  return await deleteDoc(ref);
};

// ======================
// DASHBOARD
// ======================

export const getLatestDocuments = async (count = 5) => {
  const q = query(documentsRef, orderBy("createdAt", "desc"), limit(count));

  const snapshot = await getDocs(q);

  return snapshot.docs.map((d) => ({
    id: d.id,
    ...d.data(),
  }));
};

export const getCategoryCount = async (category: string) => {
  const q = query(documentsRef, where("category", "==", category));

  const snapshot = await getDocs(q);

  return snapshot.size;
};

export const getTotalDocuments = async () => {
  const snapshot = await getDocs(documentsRef);

  return snapshot.size;
};
