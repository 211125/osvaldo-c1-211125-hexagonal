export class Book {
    constructor(
        readonly id:number,
        readonly title:string,
        readonly description:string,
        readonly img_url:string,
        readonly status:boolean,
        readonly folio:string
    ) {

    }
}