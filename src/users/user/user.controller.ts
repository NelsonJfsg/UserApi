import {User} from '../../Models/User';
import {Body, Param, Post, Controller } from '@nestjs/common';

@Controller('user')
export class UserController {

    //Init
    constructor(){

    }

    @Post()
    Create (@Body() params: User):void{
        console.log(
            "name: " + params.name + 
            "email: " + params.email + 
            "cell phone: " + params.cellphone
        );
    }

}
