import './styles/main.css';

import { getNews } from './services';
import { NewsList } from './components';

window.onload = async () => {
    const result = await getNews();
    document.querySelector('.newsList').replaceWith(NewsList(result.results));
};
