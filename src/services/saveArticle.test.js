import { saveArticle } from './saveArticle';

describe('saveArticle', () => {
    afterEach(() => {
        localStorage.clear();
    });

    it('adds to the localStorage values values associated with article', () => {
        saveArticle({ id: 'fakeId', title: 'fakeTitle', url: 'fakeUrl' });

        expect(localStorage.getItem('fakeId@id')).toEqual('fakeId');
        expect(localStorage.getItem('fakeId@title')).toEqual('fakeTitle');
        expect(localStorage.getItem('fakeId@url')).toEqual('fakeUrl');
    });
});
