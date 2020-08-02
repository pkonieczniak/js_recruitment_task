export const deleteArticleEvent = new CustomEvent('deleteArticle', {
    bubbles: true,
    detail: { prefixedId: '' },
});

export default deleteArticleEvent;
