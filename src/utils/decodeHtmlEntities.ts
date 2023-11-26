export const decodeHtmlEntities = (question: string) => {
  var doc = new DOMParser().parseFromString(question, 'text/html');
  return doc.documentElement.textContent;
};
