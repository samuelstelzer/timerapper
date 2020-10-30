import DateModel from "./date";
import VotingModel from "./voting";

export default class EventModel {
    public title: String;
    public description: String;
    public password?: String;
    public subscribers?: Array<String>;
    public dates: Array<DateModel>;
    public voting?: VotingModel;
    public admins?: Array<String>;

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
        this.subscribers = subscribers ? subscribers : undefined;
        this.voting = voting ? voting : undefined;
        this.dates = dates ? dates : [];
    }

    public addDate(date: DateModel) {
        this.dates.push(date);
    }

    public removeDate(date: DateModel) {
        this.dates = this.dates.filter(d => d != date);
    }

    public addSubscriber(subscriber: String) {
        if (this.subscribers) {
            this.subscribers.push(subscriber);
        } else {
            this.subscribers = [subscriber];
        }
    }

    public removeSubscriber(subscriber: String) {
        if (this.subscribers) {
            this.subscribers = this.subscribers.filter(d => d != subscriber);
        }
    }

    public addAdmin(admin: String) {
        if (this.admins) {
            this.admins.push(admin);
        } else {
            this.admins = [admin];
        }
    }

    public removeAdmin(admin: String) {
        if (this.admins) {
            this.admins = this.admins.filter(d => d != admin);
        }
    }
}