import { Element } from '../common';

export const NewsListItemHeader = (title) => {
    const h3 = Element('h3', { options: { innerText: title } });
    return Element('header', { children: [h3] });
};
