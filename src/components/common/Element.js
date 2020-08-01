export const Element = (tagName, { options = {}, children = [] }) => {
    const element = document.createElement(tagName);

    for (let key in options) {
        element[key] = options[key];
    }

    children.forEach((child) => {
        element.appendChild(child);
    });

    return element;
};
