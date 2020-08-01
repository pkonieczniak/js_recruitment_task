import { getDateRange } from './getDateRange';

describe('getDateRange', () => {
    beforeEach(() => {
        global.Date.now = jest.fn(() =>
            new Date('2020-08-01T09:44:27.451Z').getTime()
        );
    });

    afterEach(() => {
        global.Date.now.mockRestore();
    });

    it('returns tuple with date range', () => {
        const [oneMonthBefore, currentDate] = getDateRange();

        expect(oneMonthBefore).toEqual('2020-07-02');
        expect(currentDate).toEqual('2020-08-01');
    });
});
