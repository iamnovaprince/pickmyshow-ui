export interface MovieDetail {
    [x: string]: string | any;
    name: string;
    posterUrl:string;
    theatredetail: TheatreDetail;
    description: string;
    showtime: Date;
} 

export interface TheatreDetail {
    theatreId: number;
    theatreName: string;
    seatMapping: number[][];
    audiNumber: number;
    adddress: string;
}

