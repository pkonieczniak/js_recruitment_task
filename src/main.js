import './styles/main.css';

import { getNews } from './services';
import { NewsList, ActivePageSelect } from './components';

const body = document.body;
body.addEventListener('searchCriteriaChanged', async (event) => {
    const result = await getNews(event.detail);
    document.querySelector('.newsList').replaceWith(NewsList(result.results));
    document
        .querySelector('#activePageSelect')
        .replaceWith(ActivePageSelect(result.pages, result.currentPage));
});

window.onload = async () => {
    const result = await getNews();
    document.querySelector('.newsList').replaceWith(NewsList(result.results));
    document
        .querySelector('#activePageSelect')
        .replaceWith(ActivePageSelect(result.pages, result.currentPage));
};
