import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/models/User';

@Controller('user')
export class UserController {

    //Init
    constructor(private userService : UserService){
    
    }

    @Post()
    Create(@Body() user : User ) : void{
        this.userService.create(user);
    }

    @Get('/all')
    getUser() : User[] {
        return this.userService.getAll(); 
    }

    @Get('/:email')
    getUserByEmail(@Param('email') userEmail) : User | string {

        const user = this.userService.getByEmail(userEmail);

        return user ?? "User doesnt exists.";

    }

    @Put('/updateUser/:id')
    updateUserById(@Param('id') userId, @Body() user : User) : boolean {
        
        this.userService.updateUserById(userId, user);
        
        return true;
    }


}
