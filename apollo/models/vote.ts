import LocationModel from "./location";

enum VoteType {
    YES = 'yes',
    NO = 'no',
    MAYBE = 'maybe',
}

export default class VoteModel {
    public voteType: VoteType;

    public constructor(
        voteType: VoteType,
    ) {
        this.voteType = voteType;
    }
}