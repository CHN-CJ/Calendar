import { WEEK_DAYS } from "./config";
import { getLastMonthRestDays } from "./utils";

export function createWeekDaysNode() {
    const oTr = document.createElement('tr');
    oTr.className = 'week-day';

    //注意map里面是括号
    oTr.innerHTML = WEEK_DAYS.map(item =>
    (
        `<th>${item}</th>`
    )
    ).join('');

    return oTr;
}

export function createDateNode(year, month) {
    const lastMonthRestDays = getLastMonthRestDays
}