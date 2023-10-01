import { IsString, IsUUID, Length, IsBoolean, IsNotEmpty, ValidateIf, IsIn, IsOptional,IsEmail} from 'class-validator';


export class ValidatorCreateUser {
    @IsNotEmpty()
    @IsUUID()
    public id: string;

    @IsNotEmpty()
    @IsString()
    @Length(1, 100)
    public name: string;

    @IsNotEmpty()
    @IsString()
    @Length(1, 100)
    public last_name: string;

    @IsNotEmpty()
    @IsString()
    @Length(10) 
    public phone_number: string;

    @IsNotEmpty()
    @IsEmail()
    public email: string;

    @IsNotEmpty()
    @IsString()
    public password: string;

    @IsNotEmpty()
    @IsBoolean()
    public loan_status: boolean;

    @IsNotEmpty()
    @IsBoolean()
    public status: boolean;

    constructor(
        id: string,
        name: string,
        last_name: string,
        phone_number: string,
        email: string,
        password: string,
        loan_status: boolean,
        status: boolean
    ) {
        this.id = id;
        this.name = name;
        this.last_name = last_name;
        this.phone_number = phone_number;
        this.email = email;
        this.password = password;
        this.loan_status = loan_status;
        this.status = status;
    }


}
export class ValidateLogin {
    @IsNotEmpty()
    @IsEmail()
    public email: string;

    @IsNotEmpty()
    @IsString()
    public password: string;

    constructor(
        email:string,
        password:string,
    ){
        this.email = email,
        this.password = password
    }
}

export class ValidatorupdatePassword {

    @IsNotEmpty()
    @IsUUID()
    public uuid: string;

    @IsNotEmpty()
    @IsString()
    public password: string;

    constructor(
        uuid: string,
        password: string
    ) {
        this.uuid = uuid;
        this.password = password;
    }
}


export class ValidatorFilter {
    @IsNotEmpty()
    @IsString()
    @IsIn(['email', 'name', 'phone_number'])
    public filter: string;

    @ValidateIf(o => o.filter === 'email')
    @IsNotEmpty()
    @IsEmail()
    public email?: string;

    @ValidateIf(o => o.filter === 'name')
    @IsNotEmpty()
    @IsString()
    public name?: string;

    @ValidateIf(o => o.filter === 'phone_number')
    @IsNotEmpty()
    
    public phone_number?: string;

    constructor(
        filter: string,
        email?: string,
        name?: string,
        phone_number?: string
    ) {
        this.filter = filter;
        this.email = email;
        this.name = name;
        this.phone_number = phone_number;
    }
}

export class ValidatorId {
    @IsNotEmpty()
    @IsUUID()
    public uuid: string;
    constructor(uuid:string) {
        this.uuid = uuid
    }
}

export class ValidatorUpdate {
    @IsNotEmpty()
    @IsUUID()
    public id: string;

    @IsOptional()
    @IsString()
    @Length(1, 100)
    public name?: string;

    @IsOptional()
    @IsString()
    @Length(1, 100)
    public last_name?: string;

    @IsOptional()
    @IsString()
    @Length(10)  
    public phone_number?: string;

    @IsOptional()
    @IsString()
    @Length(1, 100)
    public email?: string;
    constructor( 
        id: string,
        name?: string,
        last_name?: string,
        phone_number?: string,
        email?: string,) {
        this.id = id;
        this.name = name;
        this.last_name = last_name;
        this.phone_number = phone_number
        this.email = email;
    }
}