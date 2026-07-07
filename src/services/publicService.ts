import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore";

import { db } from "../../firebase";
import { getCountFromServer } from "firebase/firestore";

const documentsRef = collection(db, "documents");

/**
 * Get latest notices for Home page
 */
export const getLatestNotices = async (count = 5) => {
  const q = query(
    documentsRef,
    where("category", "==", "Notice"),
    orderBy("createdAt", "desc"),
    limit(count),
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

/**
 * Get latest downloads
 */
export const getLatestDownloads = async (count = 5) => {
  const q = query(
    documentsRef,
    where("category", "==", "Download"),
    orderBy("createdAt", "desc"),
    limit(count),
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

/**
 * Get latest timetable
 */
export const getLatestTimeTables = async (count = 5) => {
  const q = query(
    documentsRef,
    where("category", "==", "Time Table"),
    orderBy("createdAt", "desc"),
    limit(count),
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

/**
 * Get latest previous papers
 */
export const getLatestPreviousPapers = async (count = 5) => {
  const q = query(
    documentsRef,
    where("category", "==", "Previous Paper"),
    orderBy("createdAt", "desc"),
    limit(count),
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

/**
 * Get all documents by category
 */
export const getDocumentsByCategory = async (category: string) => {
  const q = query(
    documentsRef,
    where("category", "==", category),
    orderBy("createdAt", "desc"),
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

/**
 * Total documents
 */
export const getTotalDocuments = async () => {
  const snapshot = await getCountFromServer(documentsRef);
  return snapshot.data().count;
};

/**
 * Total notices
 */
export const getTotalNotices = async () => {
  const q = query(documentsRef, where("category", "==", "Notice"));

  const snapshot = await getCountFromServer(q);

  return snapshot.data().count;
};

/**
 * Total downloads
 */
export const getTotalDownloads = async () => {
  const q = query(documentsRef, where("category", "==", "Download"));

  const snapshot = await getCountFromServer(q);

  return snapshot.data().count;
};

/**
 * Home page statistics
 */
export const getDepartmentStats = async () => {
  const [totalDocuments, totalNotices, totalDownloads] = await Promise.all([
    getTotalDocuments(),
    getTotalNotices(),
    getTotalDownloads(),
  ]);

  return [
    {
      id: 1,
      label: "Programs",
      value: 2,
      icon: "GraduationCap",
    },
    {
      id: 2,
      label: "Documents",
      value: totalDocuments,
      icon: "FolderOpen",
    },
    {
      id: 3,
      label: "Notices",
      value: totalNotices,
      icon: "Bell",
    },
    {
      id: 4,
      label: "Downloads",
      value: totalDownloads,
      icon: "Download",
    },
  ];
};

/**
 * Get all notices
 */
export const getAllNotices = async () => {
  const q = query(
    documentsRef,
    where("category", "==", "Notice"),
    orderBy("createdAt", "desc"),
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

/**
 * Get all syllabus documents
 */
export const getAllSyllabus = async () => {
  const q = query(
    documentsRef,
    where("category", "==", "Syllabus"),
    orderBy("createdAt", "desc"),
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

/**
 * Get all timetable documents
 */
export const getAllTimeTables = async () => {
  const q = query(
    documentsRef,
    where("category", "==", "Time Table"),
    orderBy("createdAt", "desc"),
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

/**
 * Get all previous papers
 */
export const getAllPreviousPapers = async () => {
  const q = query(
    documentsRef,
    where("category", "==", "Previous Paper"),
    orderBy("createdAt", "desc"),
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

/**
 * Get all download documents
 */
export const getAllDownloads = async () => {
  const q = query(
    documentsRef,
    where("category", "==", "Download"),
    orderBy("createdAt", "desc"),
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
