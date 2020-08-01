export const Button = ({ className, text }) => {
    const button = document.createElement('button');
    button.className = 'button button-outline';
    button.innerText = text;

    return button;
};
