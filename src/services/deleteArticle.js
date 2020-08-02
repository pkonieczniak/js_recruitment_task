export const deleteArticle = ({ prefixedId }) => {
    const id = prefixedId.replace('@id', '');

    localStorage.removeItem(prefixedId);
    localStorage.removeItem(`${id}@title`);
    localStorage.removeItem(`${id}@url`);
};
