import { format } from './format';

describe('format', () => {
    it('returns date in YYYY-MM-DD format', () => {
        expect(format('2020-08-01T13:00:44Z')).toEqual('2020-08-01');
    });

    it('returns date in YYYY.MM.DD format', () => {
        expect(format('2020-08-01T13:00:44Z', '.')).toEqual('2020.08.01');
    });
});
