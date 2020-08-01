import { Element } from '../common';

export const NewsListItemAction = ({ id, url }) => {
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
                },
            }),
        ],
        options: { className: 'newsActions' },
    });
};
