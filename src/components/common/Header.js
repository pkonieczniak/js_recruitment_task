export const Header = (children) => {
    const header = document.createElement('header');

    children.forEach((child) => {
        header.appendChild(child);
    });

    return header;
};
