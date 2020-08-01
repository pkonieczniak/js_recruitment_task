import { Element } from '../common';

export const NewsListItemDetails = ({ sectionName, publicationDate }) => {
    return Element('section', {
        options: { className: 'newsDetails' },
        children: [
            Element('ul', {
                children: [
                    Element('li', {
                        children: [
                            Element('strong', { options: { innerText: 'Section Name: ' } }),
                            document.createTextNode(sectionName),
                        ],
                    }),
                    Element('li', {
                        children: [
                            Element('strong', {
                                options: { innerText: 'Publication Date: ' },
                            }),
                            document.createTextNode(publicationDate),
                        ],
                    }),
                ],
            }),
        ],
    });
};
