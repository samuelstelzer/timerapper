import DateModel from "./date";
import VoteModel from "./vote";

export default class DateOptionModel {
    public dates: Array<DateModel>;
    public votes: Array<VoteModel>;

    public constructor(
        dates: Array<DateModel> = [],
        votes: Array<VoteModel> = [],
    ) {
        this.dates = dates;
        this.votes = votes;
    }

    public addDate(date: DateModel) {
        this.dates.push(date);
    }

    public addVote(vote: VoteModel) {
        this.votes.push(vote);
    }

    public removeDate(date: DateModel) {
        this.dates = this.dates.filter(d => d != date);
    }

    public removeVote(vote: VoteModel) {
        this.votes = this.votes.filter(d => d != vote);
    }
}