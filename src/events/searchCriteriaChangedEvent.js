const searchCriteriaChangedEvent = new CustomEvent('searchCriteriaChanged', {
    bubbles: true,
    detail: {
        currentPage: 1,
        phrase: '',
        section: '',
    },
});

export default searchCriteriaChangedEvent;
