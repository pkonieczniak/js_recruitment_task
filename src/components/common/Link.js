export const Link = ({ className, href, text, target = '_blank' }) => {
    const a = document.createElement('a');
    a.className = className;
    a.href = href;
    a.innerText = text;
    a.target = target;

    return a;
};
