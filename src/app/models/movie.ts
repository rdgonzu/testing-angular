export class Movie {

    /*
    public title: string;
    public image: string;
    public year: number;

    constructor (title: string, image: string, year: number) {
        this.title = title;
        this.image = image;
        this.year = year;
    }
    */

    //Better TypeScript way to define class properties and set values in the constructor:
    constructor (public title: string, public image: string, public year: number, public date: Date) {}

}