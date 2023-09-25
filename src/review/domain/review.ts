export class Review {
    constructor(
        readonly id: number,
        readonly userId: number,
        readonly bookId: number,
        readonly status: string
    ) { }
}
