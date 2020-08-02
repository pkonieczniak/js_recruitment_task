import { format } from './format';

export const getDateRange = () => {
    const timestamp = Date.now();
    return [oneMonthBeforeCurrentDate(timestamp), currentDate(timestamp)];
};

const currentDate = (timestamp) => format(timestamp);

const oneMonthBeforeCurrentDate = (timestamp) => {
    const currentDate = new Date(timestamp);
    const oneMonthBefore = new Date(
        currentDate.setDate(currentDate.getDate() - 30)
    );

    return format(oneMonthBefore);
};
