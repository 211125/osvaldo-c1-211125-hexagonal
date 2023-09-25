export class Book {
    constructor(
        readonly id: number,
        readonly title: string,
        readonly author: string,
        readonly code: string,
        readonly url: string,
        readonly status: string
    ) { }
}
