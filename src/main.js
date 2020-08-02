import './styles/main.css';

import { getNews, getBookmarkedNews } from './services';
import {
    NewsList,
    ActivePageSelect,
    SectionSelect,
    SearchInput,
    ReadLaterList,
} from './components';

window.onload = async () => {
    const result = await getNews();
    document.querySelector('#newsListColumn').append(NewsList(result.results));
    document
        .querySelector('#activePageSelectColumn')
        .appendChild(ActivePageSelect(result.pages, result.currentPage));

    const bookmarkedNews = getBookmarkedNews();
    document
        .querySelector('#readLaterListColumn')
        .appendChild(ReadLaterList(bookmarkedNews));
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
