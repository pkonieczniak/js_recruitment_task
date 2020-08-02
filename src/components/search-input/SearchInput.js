import { Element } from '../common';
import { debounce } from '../../utils';
import { searchCriteriaChangedEvent } from '../../events';

export const SearchInput = () => {
    const onKeyDown = debounce((event) => {
        searchCriteriaChangedEvent.detail.phrase = event.target.value;
        event.target.dispatchEvent(searchCriteriaChangedEvent);
    }, 650);

    return Element('input', {
        options: {
            type: 'search',
            placeholder: 'News content search',
            id: 'newsContentSearch',
            onkeydown: (event) => onKeyDown(event),
        },
    });
};
