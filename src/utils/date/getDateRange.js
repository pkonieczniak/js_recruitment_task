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

const format = (timestamp) => {
    const date = new Date(timestamp);

    const year = String(date.getFullYear());
    let month = String(date.getMonth() + 1);
    let day = String(date.getDate());

    if (month.length === 1) month = `0${month}`;
    if (day.length === 1) day = `0${day}`;

    return [year, month, day].join('-');
};
