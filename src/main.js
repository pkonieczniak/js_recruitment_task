import './styles/main.css';

import { getNews } from './services';
import { NewsList, ActivePageSelect } from './components';

window.onload = async () => {
    const result = await getNews();
    document.querySelector('.newsList').replaceWith(NewsList(result.results));

    document
        .querySelector('#activePageSelect')
        .replaceWith(ActivePageSelect(result.pages));
};
