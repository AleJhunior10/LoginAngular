export class Users {
    public Id: number;
    public name: string;
    public email: string;
    public pwd: string;

    constructor(Id: number, name: string, email: string, pwd: string) {
        this.Id = Id;
        this.name = name;
        this.email = email;
        this.pwd = pwd;
    }
}