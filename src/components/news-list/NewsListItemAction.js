import { Button, Link, Section } from '../common';

export const NewsListItemAction = ({ id, url }) => {
    return Section('newsActions', [
        Link({ className: 'button', href: url, text: 'Full article' }),
        Button({ className: 'button button-outline', text: 'Read Later ' }),
    ]);
};
