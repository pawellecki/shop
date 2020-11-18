export const sumObjectsValues = (object, objectKey) =>
  object?.reduce((sum, item) => sum + item[objectKey], 0);
