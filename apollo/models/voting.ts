import DateOptionModel from "./dateoptions";

export default class VotingModel {
    public deadline?: Date;
    public dateOptions: Array<DateOptionModel>;

    public constructor(dateOptions: Array<DateOptionModel> = [], deadline?: Date) {
        if (deadline) {
            this.deadline = deadline;
        }
        this.dateOptions = dateOptions;
    }

    public addDateOption(dateOption: DateOptionModel) {
        this.dateOptions.push(dateOption);
    }

    public removeDateOption(dateOption: DateOptionModel) {
        this.dateOptions = this.dateOptions.filter(d => d != dateOption);
    }
}