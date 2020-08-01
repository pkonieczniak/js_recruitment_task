import { Element } from '../common';

export const ActivePageSelect = (pages) => {
    const MAX_PAGES = 10; // TODO: Use a generator fn, to handle huge numbers of pages
    const condtion = pages > MAX_PAGES ? MAX_PAGES : pages;
    const children = [];

    for (let i = 1; i <= condtion; i++) {
        children.push(Element('option', { options: { value: i, innerText: i } }));
    }

    return Element('select', {
        children,
        options: { id: 'activePageSelect' },
    });
};
