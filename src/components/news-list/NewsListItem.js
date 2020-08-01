import { Article } from '../common';

import { NewsListItemHeader } from './NewsListItemHeader';
import { NewsListItemDetails } from './NewsListItemDetails';
import { NewsListItemAction } from './NewsListItemAction';

export const NewsListItem = ({
    id,
    url,
    title,
    sectionName,
    publicationDate,
}) => {
    const newsItem = document.createElement('li');

    newsItem.appendChild(
        Article([
            NewsListItemHeader(title),
            NewsListItemDetails({ sectionName, publicationDate }),
            NewsListItemAction({ id, url }),
        ])
    );

    return newsItem;
};
