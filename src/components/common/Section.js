export const Section = (className, children) => {
    const section = document.createElement('section');
    section.className = className;

    children.forEach((child) => {
        section.appendChild(child);
    });

    return section;
};
