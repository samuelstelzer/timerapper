import LocationModel from "./location";
import { format_date } from "~/utils/date_utils";

export default class DateModel {
    start: string;
    end: string;
    location: LocationModel;

    constructor(
        start: Date,
        end: Date,
        location: LocationModel
    ) {
        this.start = format_date(start);
        this.end = format_date(end);
        this.location = location;
    }
}