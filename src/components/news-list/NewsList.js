import { Element } from '../common';
import { NewsListItem } from './NewsListItem';

export const NewsList = (news) => {
    return Element('ul', {
        children: news.map((article) => NewsListItem(article)),
        options: { className: 'newsList' },
    });
};
