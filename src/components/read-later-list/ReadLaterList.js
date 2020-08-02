import { Element } from '../common';
import { ReadLaterListItem } from './ReadLaterListItem';

export const ReadLaterList = (bookmarkedNews) => {
    return Element('ul', {
        children: bookmarkedNews.map((article) => ReadLaterListItem(article)),
        options: { className: 'readLaterList' },
    });
};
