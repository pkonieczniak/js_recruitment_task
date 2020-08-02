import { Element } from '../common';
import { deleteArticleEvent } from '../../events';

export const ReadLaterListItem = ({ id, title, url }) => {
    return Element('li', {
        children: [
            Element('h4', {
                options: {
                    className: 'readLaterItem-title',
                    innerText: title,
                },
            }),
            Element('section', {
                children: [
                    Element('a', {
                        options: {
                            href: url,
                            className: 'button button-clear',
                            innerText: 'Read',
                            target: '_blank',
                        },
                    }),
                    Element('button', {
                        options: {
                            className: 'button button-clear',
                            innerText: 'Remove',
                            onclick: (event) => {
                                deleteArticleEvent.detail.prefixedId = id;
                                event.target.dispatchEvent(deleteArticleEvent);
                            },
                        },
                    }),
                ],
            }),
        ],
    });
};
