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

}
