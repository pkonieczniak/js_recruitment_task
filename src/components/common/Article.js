export const Article = (children) => {
    const article = document.createElement('article');
    article.className = 'news';

    children.forEach((child) => {
        article.appendChild(child);
    });

    return article;
};
