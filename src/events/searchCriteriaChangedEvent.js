const searchCriteriaChangedEvent = new CustomEvent(
    'searchCriteriaChanged',
    {
        bubbles: true,
        detail: {
            currentPage: null,
            phrase: null,
            section: null,
        },
    },
    false
);

export default searchCriteriaChangedEvent;
