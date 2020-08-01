import { Element } from '../common';

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
    return Element('li', {
        children: [
            Element('article', {
                children: [
                    NewsListItemHeader(title),
                    NewsListItemDetails({ sectionName, publicationDate }),
                    NewsListItemAction({ id, url }),
                ],
                options: { className: 'news' },
            }),
        ],
    });
};
