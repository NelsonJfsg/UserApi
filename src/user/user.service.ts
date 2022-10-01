import { User } from 'src/models/User';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    //Array of users.
    private readonly userList : User[] = [];

    create( user : User ) : void {
        
        this.userList.push(user);
    
    }

    getAll() : User[] {

        return this.userList;

    }

    getByEmail(email : string) : User{

        return this.userList.find((user) => user.email === email);
    
    }

    getById(id : number) : User{

        const userIndex = this.userList.findIndex((user) => user.id == id);
        
        const selectedUser = {...this.userList[userIndex]};

        return selectedUser;


    }

    updateUserById(id : number, newUser : User) : User{

        const userIndex = this.userList.findIndex((user) => user.id == id);

        let user = this.getById(id); //user of db

        let editedUser = this.updateUserInfo(user, newUser);

        let {id : identify, name : newName, email : newEmail, cellphone : newCellphone} = editedUser;
        
        //updateList
        this.userList[userIndex] = {
            id : identify,
            name : newName,
            email : newEmail,
            cellphone : newCellphone,
        }

        return editedUser;

    }

    updateUserInfo(user : User, newUser : User) : User{

        let editedUser = {...user}; //Copy user

        newUser.name != "" ? (editedUser.name = newUser.name) : "";
        newUser.email != "" ? (editedUser.email = newUser.email) : "";
        newUser.cellphone != "" ? (editedUser.cellphone = newUser.cellphone) : "";
        
        return editedUser;
    }

}
