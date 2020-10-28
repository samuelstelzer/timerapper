import DateModel from "./date";
import VotingModel from "./voting";

export default class EventModel {
    public title: String;
    public description: String;
    public password?: String;
    public subscribers: Array<String>;
    public dates: Array<DateModel>;
    public voting?: VotingModel;
    public admins: Array<String> = [];

    public constructor(
        title: String = "",
        description?: String,
        password?: String,
        subscribers?: Array<String>,
        dates?: Array<DateModel>,
        voting?: VotingModel,
    ) {
        this.title = title;
        this.description = description ? description : '';
        this.password = password ? password : undefined;
        this.subscribers = subscribers ? subscribers : [];
        this.dates = dates ? dates : [];
        this.voting = voting ? voting : undefined;
    }

    public addDate(date: DateModel) {
        this.dates.push(date);
    }

    public removeDate(date: DateModel) {
        this.dates = this.dates.filter(d => d != date);
    }

    public addSubscriber(subscriber: String) {
        this.subscribers.push(subscriber);
    }

    public removeSubscriber(subscriber: String) {
        this.subscribers = this.subscribers.filter(d => d != subscriber);
    }

    public addAdmin(admin: String) {
        this.admins.push(admin);
    }

    public removeAdmin(admin: String) {
        this.admins = this.admins.filter(d => d != admin);
    }
}