import LocationModel from "./location";

export default class DateModel {
    start: Date;
    end: Date;
    location: LocationModel;

    constructor(
        start: Date,
        end: Date,
        location: LocationModel
    ) {
        this.start = start;
        this.end = end;
        this.location = location;
    }
}