export const saveArticleEvent = new CustomEvent('saveArticle', {
    bubbles: true,
    detail: {
        id: '',
        title: '',
        url: '',
    },
});

export default saveArticleEvent;
