import { getDateRange, format } from '../utils';

export const getNews = async (searchCriteria = {}) => {
    const url = buildUrl(searchCriteria);

    const response = await fetch(url, {
        headers: { 'content-type': 'application-json' },
        mode: 'cors',
    });

    if (!response.ok) throw new Error('Failed to fetch articles');

    const { response: data } = await response.json();

    const { total, currentPage, pages, results, pageSize } = data;

    return {
        total,
        currentPage,
        pages,
        results: transformResults(results),
        pageSize,
    };
};

const buildUrl = ({ phrase = '', section = '', currentPage = 1 }) => {
    const AUTH_TOKEN = 'c504241c-0d75-4e3e-8fc1-4e800a733239'; // Only for the task purpouse. Never call a third API directly from the client.
    const BASE_URL = 'https://content.guardianapis.com/search';
    const [fromDate, toDate] = getDateRange();

    let query = `?api-key=${AUTH_TOKEN}&page-size=10`;
    query = `${query}&fromDate=${fromDate}&toDate=${toDate}&page=${currentPage}`;

    if (phrase) query = `${query}&q=${phrase}`;
    if (section) query = `${query}&section=${section}`;

    return `${BASE_URL}${query}`;
};

const transformResults = (results) => {
    return results.map(
        ({ id, sectionName, webTitle, webPublicationDate, webUrl }) => ({
            id,
            sectionName,
            title: webTitle,
            publicationDate: format(webPublicationDate),
            url: webUrl,
        })
    );
};
