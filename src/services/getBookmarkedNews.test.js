import { getBookmarkedNews } from './getBookmarkedNews';

describe('getBookmarkedNews', () => {
    beforeEach(() => {
        localStorage.setItem('fake-article-id@id', 'fake-article-id');
        localStorage.setItem('fake-article-id@title', 'fake-article-title');
        localStorage.setItem('fake-article-id@url', 'fake-article-url');
    });

    afterEach(() => {
        localStorage.clear();
    });

    it('returns bookmarked articles', () => {
        expect(getBookmarkedNews()).toMatchInlineSnapshot(`
      Array [
        Object {
          "id": "fake-article-id@id",
          "title": "fake-article-title",
          "url": "fake-article-url",
        },
      ]
    `);
    });
});
