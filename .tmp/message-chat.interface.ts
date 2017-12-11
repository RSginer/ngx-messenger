export interface MessageChat {
    text: string;
    date: Date;
    user: {
        id: string | number;
        imageUrl: string;
        name: string;
    }
}
