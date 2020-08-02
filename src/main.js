import './styles/main.css';

import { getNews } from './services';
import {
    NewsList,
    ActivePageSelect,
    SectionSelect,
    SearchInput,
} from './components';

window.onload = async () => {
    const result = await getNews();
    document.querySelector('.newsList').replaceWith(NewsList(result.results));
    document
        .querySelector('#activePageSelect')
        .replaceWith(ActivePageSelect(result.pages, result.currentPage));
};

const body = document.body;
body.addEventListener('searchCriteriaChanged', async (event) => {
    const result = await getNews(event.detail);
    document.querySelector('.newsList').replaceWith(NewsList(result.results));
    document
        .querySelector('#activePageSelect')
        .replaceWith(ActivePageSelect(result.pages, result.currentPage));
});

document.querySelector('#sectionSelectColumn').appendChild(SectionSelect());
document.querySelector('#searchColumn').appendChild(SearchInput());
