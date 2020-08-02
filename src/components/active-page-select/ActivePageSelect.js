import { Element } from '../common';
import { searchCriteriaChangedEvent } from '../../events';

export const ActivePageSelect = (pages, currentPage) => {
    const MAX_PAGES = 100; // TODO: Use a generator fn, to handle huge numbers of pages
    const condtion = pages > MAX_PAGES ? MAX_PAGES : pages;
    const children = [];

    for (let page = 1; page <= condtion; page++) {
        children.push(
            Element('option', {
                options: {
                    value: page,
                    innerText: page,
                    selected: currentPage === page,
                },
            })
        );
    }

    return Element('select', {
        children,
        options: {
            id: 'activePageSelect',
            onchange: (event) => {
                searchCriteriaChangedEvent.detail.currentPage = event.target.value;
                event.target.dispatchEvent(searchCriteriaChangedEvent);
            },
        },
    });
};
