export const getPreviewUrl = (id: string) =>
  `https://drive.google.com/file/d/${id}/preview`;

export const getDownloadUrl = (id: string) =>
  `https://drive.google.com/uc?export=download&id=${id}`;

export const extractDriveFileId = (url: string) => {
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);

  return match ? match[1] : url;
};
