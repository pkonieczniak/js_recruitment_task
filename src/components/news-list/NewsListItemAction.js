import { Element } from '../common';
import { saveArticleEvent } from '../../events';

export const NewsListItemAction = ({ id, title, url }) => {
    return Element('section', {
        children: [
            Element('a', {
                options: {
                    href: url,
                    innerText: 'Full article',
                    className: 'button',
                    target: '_blank',
                },
            }),
            Element('button', {
                options: {
                    id,
                    className: 'button button-outline',
                    innerText: 'Read Later ',
                    onclick: (event) => {
                        saveArticleEvent.detail.id = id;
                        saveArticleEvent.detail.title = title;
                        saveArticleEvent.detail.url = url;
                        event.target.dispatchEvent(saveArticleEvent);
                    },
                },
            }),
        ],
        options: { className: 'newsActions' },
    });
};
