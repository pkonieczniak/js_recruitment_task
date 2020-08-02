export const saveArticle = ({ id, title, url }) => {
    localStorage.setItem(`${id}@id`, id);
    localStorage.setItem(`${id}@title`, title);
    localStorage.setItem(`${id}@url`, url);
};
