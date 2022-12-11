function parseDate(date) {
    if (/\d/.test(date)) {
        date = parseInt(date);
    }
    console.log(date, 'date')
    const parseDate = new Date(date);

    if (isNaN(date) || isNaN(parseDate.getTime() || parseDate.getTime() < 0)) {
        return { error: 'Invalid Date' };
    }

    return parseDate;
}

function formatDate(date) {
    return {
        unix: date.getTime(),
        utc: date.toUTCString()
    }
}

function getDate(date) {

    if (!date) {
        return formatDate(new Date());
    }

    const parsedDate = parseDate(date);

    if (parsedDate.error) {
        return parsedDate;
    }

    return formatDate(parsedDate);
}

module.exports = {
    getDate
};