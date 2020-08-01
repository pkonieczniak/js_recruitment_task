import { NewsListItem } from './NewsListItem';

export const NewsList = (news) => {
    const newsList = document.querySelector('.newsList');
    newsList.innerHTML = '';

    const newsListItems = news.map((item) => NewsListItem(item));

    newsListItems.forEach((item) => {
        newsList.appendChild(item);
    });
};
