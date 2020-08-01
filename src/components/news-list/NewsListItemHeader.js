import { Element } from '../common';

export const NewsListItemHeader = (title) => {
    return Element('header', {
        children: [Element('h3', { options: { innerText: title } })],
    });
};
