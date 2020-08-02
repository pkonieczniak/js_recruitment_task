import { deleteArticle } from './deleteArticle';

describe('deleteArticle', () => {
    beforeEach(() => {
        localStorage.setItem('fake-article-id@id', 'fake-article-id');
        localStorage.setItem('fake-article-id@title', 'fake-article-title');
        localStorage.setItem('fake-article-id@url', 'fake-article-url');
    });

    afterEach(() => {
        localStorage.clear();
    });

    it('removes from localStorage keys related to the article', () => {
        expect(localStorage.length).toEqual(3);

        deleteArticle({ prefixedId: 'fake-article-id@id' });

        expect(localStorage.length).toEqual(0);
    });
});
