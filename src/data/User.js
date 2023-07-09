/* eslint-disable prettier/prettier */
class User {
    static firstname = null;
    static lastname = null;
    static idNumber = null;
    static login = null;
    static password = null;
    static email = null;
    static address = null;
    static hospital = null;
    static isSpecialiste = null;
    static gender = null;
    static matricule = "werte";

    constructor() {}

    static getUser() {
        return User;
    }
    static setUser(User) {
        this.firstname = User.firstname;
        this.lastname = User.lastname;
        this.idNumber = User.idNumber;
        this.password = User.password;
        this.login = User.login;
        this.email = User.email;
        this.address = User.email;
        this.hospital = User.hospital;
        this.gender = User.gender;
    }
}
export default {
    User,
};