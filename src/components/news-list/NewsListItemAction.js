import { Element } from '../common';
import { saveArticle } from '../../services';

export const NewsListItemAction = ({ id, title, url }) => {
    return Element('section', {
        children: [
            Element('a', {
                options: { href: url, innerText: 'Full article', className: 'button' },
            }),
            Element('button', {
                options: {
                    id,
                    className: 'button button-outline',
                    innerText: 'Read Later ',
                    onclick: () => saveArticle({ id, title, url }),
                },
            }),
        ],
        options: { className: 'newsActions' },
    });
};
