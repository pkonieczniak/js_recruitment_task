export const getBookmarkedNews = () => {
    const ids = [];

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.endsWith('@id')) ids.push(key);
    }

    return ids.map((prefixedId) => {
        const id = prefixedId.replace('@id', '');

        return {
            id: prefixedId,
            title: localStorage.getItem(`${id}@title`),
            url: localStorage.getItem(`${id}@url`),
        };
    });
};
