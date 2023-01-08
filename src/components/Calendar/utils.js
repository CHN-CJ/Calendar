//拿到1号的星期
export function getFirstWeekDay(year, month) {
    const date = new Date(year, month - 1, 1);
    //星期天为0， 星期一为1
    return date.getDay();
}

//计算出某月的天数
export function getMonthDayCount(year, month) {
    const date = new Date(year, month, 0);
    return date.getDate();
}

export function getLastMonthRestDays(year, month) {
    const days = getFirstWeekDay(year, month);
    let lastDate = getMonthDayCount(year, month - 1);
    let restDays = [];

    while (restDays.length < days) {
        restDays.push(lastDate--);
    }

    return restDays.reverse();
}

export function getNextMonthRestDays(year, month) {
    //getFirstWeekDay ==> 星期5代表前面有5天（0-4）
    const lastMonthRestDayCount = getFirstWeekDay(year, month);
    const currentMonthDayCount = getMonthDayCount(year, month);
    const nextMonthRestDayCount = 42 - (lastMonthRestDayCount + currentMonthDayCount);
    // console.log(lastMonthRestDayCount);
    let restDays = [];

    for (let i = 1; i <= nextMonthRestDayCount; i++) {
        restDays.push(i);
    }

    return restDays;
}

export function getDateInfo(timeStamp) {
    var date = timeStamp ? new Date(timeStamp) : new Date();

    return [
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate
    ]
}

export function getFormatDate(year, month, date) {
    const dateArr = [year, month, date];

    for (let i = 1; i < dateArr.length; i++) {
        dateArr[i] < 10 && (dateArr[i] = '0' + dateArr[i]);
        //typeof(dateArr[i]); '0' + 数字转化成 string
    }

    return dateArr.join('-');
}