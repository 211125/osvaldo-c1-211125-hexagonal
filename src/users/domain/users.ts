export class Users {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly last_name: string,
        readonly email: string,
        readonly password: string,
        readonly phone: string,
        readonly status: boolean
    ) { }
}
