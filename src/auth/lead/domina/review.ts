export class reviews {
    constructor(
        readonly id:number,
        readonly reviews:String,
        readonly book_id:number,
        readonly user_id:number,
        readonly status:boolean,
    ) {

    }
}