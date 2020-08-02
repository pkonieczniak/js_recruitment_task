import './styles/main.css';

import {
    getNews,
    getBookmarkedNews,
    saveArticle,
    deleteArticle,
} from './services';

import {
    NewsList,
    ActivePageSelect,
    SectionSelect,
    SearchInput,
    ReadLaterList,
} from './components';

(() => {
    const onSearchCriteriaChanged = async (event) => {
        const result = await getNews(event.detail);
        document.querySelector('.newsList').replaceWith(NewsList(result.results));
        document
            .querySelector('#activePageSelect')
            .replaceWith(ActivePageSelect(result.pages, result.currentPage));
    };

    const onSaveArticle = (event) => {
        saveArticle(event.detail);
        const bookmarkedNews = getBookmarkedNews();
        document
            .querySelector('.readLaterList')
            .replaceWith(ReadLaterList(bookmarkedNews));
    };

    const onDeleteArticle = (event) => {
        deleteArticle(event.detail);
        const bookmarkedNews = getBookmarkedNews();
        document
            .querySelector('.readLaterList')
            .replaceWith(ReadLaterList(bookmarkedNews));
    };

    document.body.addEventListener(
        'searchCriteriaChanged',
        onSearchCriteriaChanged
    );
    document.body.addEventListener('saveArticle', onSaveArticle);
    document.body.addEventListener('deleteArticle', onDeleteArticle);

    document.querySelector('#sectionSelectColumn').appendChild(SectionSelect());
    document.querySelector('#searchColumn').appendChild(SearchInput());
})();

window.onload = async () => {
    const { results, pages, currentPage } = await getNews();
    document.querySelector('#newsListColumn').append(NewsList(results));
    document
        .querySelector('#activePageSelectColumn')
        .appendChild(ActivePageSelect(pages, currentPage));

    const bookmarkedNews = getBookmarkedNews();
    document
        .querySelector('#readLaterListColumn')
        .appendChild(ReadLaterList(bookmarkedNews));
};
