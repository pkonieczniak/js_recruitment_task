import { Element } from '../common';
import { searchCriteriaChangedEvent } from '../../events';

export const ActivePageSelect = (pages, currentPage) => {
    const children = [];

    for (let page = 1; page <= pages; page++) {
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
