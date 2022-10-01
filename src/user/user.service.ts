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

        console.log(`Selected user: ` + selectedUser);

        return selectedUser;


    }

    updateUserById(id : number, newUser : User){

        let user = this.getById(id); //user of db

        let editedUser = this.updateUserInfo(user, newUser);

        
    }

    updateUserInfo(user : User, newUser : User) : User{

        let editedUser = {...user};

        if(newUser.name != ""){
            console.log("asdasdads");
            editedUser.name = newUser.name;
        }
        
        if(newUser.email != ""){
            console.log("asdasdads");
            editedUser.email = newUser.email;
        }
        
        if(newUser.cellphone != ""){
            console.log("asdasdads");
            editedUser.cellphone = newUser.cellphone;
        }
        
        console.log(`Edited user name: ${editedUser.name}`);
        console.log(`Edited user email: ${editedUser.email}`);
        console.log(`Edited user cellphone: ${editedUser.cellphone}`);
        
        return editedUser;
    }

}
