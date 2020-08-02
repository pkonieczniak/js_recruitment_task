import { Element } from '../common';
import { searchCriteriaChangedEvent } from '../../events';

export const SectionSelect = () => {
    const options = ['all', 'books', 'business', 'culture', 'sport'];

    return Element('select', {
        children: options.map((option) =>
            Element('option', {
                options: {
                    value: option,
                    innerText: option,
                },
            })
        ),
        options: {
            id: 'sectionSelect',
            onchange: (event) => {
                const value = event.target.value === 'all' ? '' : event.target.value;
                searchCriteriaChangedEvent.detail.section = value;
                event.target.dispatchEvent(searchCriteriaChangedEvent);
            },
        },
    });
};
