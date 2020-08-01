import { Section, Strong } from '../common';

export const NewsListItemDetails = ({ sectionName, publicationDate }) => {
    const ul = document.createElement('ul');

    const sectionNameItem = document.createElement('li');
    sectionNameItem
        .appendChild(Strong('Section Name: '))
        .appendChild(document.createTextNode(sectionName));

    const sectionPublicationDateItem = document.createElement('li');
    sectionPublicationDateItem
        .appendChild(Strong('Publication Date: '))
        .appendChild(document.createTextNode(publicationDate));

    ul.appendChild(sectionNameItem);
    ul.appendChild(sectionPublicationDateItem);

    return Section('newsDetails', [ul]);
};
