import moment from "moment";

let format_date = (date: Date) => moment(date).utc().toISOString();

export {
    format_date,
}