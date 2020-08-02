import { getNews } from './getNews';
import { GET_NEWS_SUCCESS_RESPONSE } from './mocks';

describe('getNews', () => {
    beforeEach(() => {
        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(GET_NEWS_SUCCESS_RESPONSE),
        });

        global.Date.now = jest.fn(() =>
            new Date('2020-07-25T09:44:27.451Z').getTime()
        );
    });

    afterEach(() => {
        global.Date.now.mockRestore();
        global.fetch.mockRestore();
    });

    it('calls the API with the api-key and basic search criteria', async () => {
        await getNews();

        const url = global.fetch.mock.calls[0][0];
        const [endpoint, query] = url.split('?');

        const [apiKey, ...searchParameters] = query.split('&');

        expect(endpoint).toEqual('https://content.guardianapis.com/search');
        expect(apiKey.startsWith('api-key=')).toBeTruthy();

        expect(searchParameters).toMatchInlineSnapshot(`
      Array [
        "page-size=10",
        "from-date=2020-06-25",
        "to-date=2020-07-25",
        "page=1",
        "order-by=newest",
      ]
    `);
    });

    it('calls the API with optional search criteria', async () => {
        await getNews({ phrase: 'football', section: 'books', currentPage: '3' });
        const url = global.fetch.mock.calls[0][0];
        const [endpoint, query] = url.split('?');

        const [apiKey, ...searchParameters] = query.split('&');

        expect(searchParameters).toMatchInlineSnapshot(`
      Array [
        "page-size=10",
        "from-date=2020-06-25",
        "to-date=2020-07-25",
        "page=3",
        "order-by=newest",
        "q=football",
        "section=books",
      ]
    `);
    });

    it('returns articles for the current page and additional metadata', async () => {
        const { total, currentPage, pageSize, pages, results } = await getNews();

        expect(total).toEqual(GET_NEWS_SUCCESS_RESPONSE.response.total);
        expect(currentPage).toEqual(GET_NEWS_SUCCESS_RESPONSE.response.currentPage);
        expect(pageSize).toEqual(GET_NEWS_SUCCESS_RESPONSE.response.pageSize);
        expect(pages).toEqual(GET_NEWS_SUCCESS_RESPONSE.response.pages);
        expect(results).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(String),
                    sectionName: expect.any(String),
                    title: expect.any(String),
                    publicationDate: expect.any(String),
                    url: expect.any(String),
                }),
            ])
        );
    });
});
