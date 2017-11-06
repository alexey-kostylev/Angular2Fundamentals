import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()
export class AuthService {
    currentUser: IUser;

    loginUser(userName: string, password: string) {
        console.log("AUthService logging in user: name: " + userName + ", password: " + password);
        this.currentUser = <IUser>{
            id: 1,
            userName: userName,
            firstName: "John",
            lastName: "Papa"
        };
        console.log("current user: " + this.currentUser);
    }

    isAuthenticated()
    {
        return !!this.currentUser;
    }

    updateCurrentUser(user: IUser)
    {
        this.currentUser.firstName = user.firstName;
        this.currentUser.lastName = user.lastName;
        this.currentUser.userName = user.userName;
    }
}