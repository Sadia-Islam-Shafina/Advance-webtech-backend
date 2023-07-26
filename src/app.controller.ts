import { Controller, Get, Post,Req,Res, Body, Param, Delete, UsePipes, ValidationPipe  } from '@nestjs/common';
import { AppService } from './app.service';
import { TaskDto } from './dto/task.dto';
import { ValidationDto } from './dto/validation.dto';
import * as session from 'express-session';
import {Request,Response} from 'express';

let User=[];
@Controller() 
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('user')
  getUsers() {
    return User;
  }

  @Post('add')
  addUser(@Body() ns67dto:TaskDto ){
    User.push(ns67dto);
    return 'User added';
  }

  @Get('user/:id')
  getuser(@Param('id')id:number)
  {
    return User.find((User)=>User.id==id);
  }

  @Delete(':id')
  remove(@Param('id')id){
    User = User.filter((user)=>user.id !== id);
    return 'Delete Success';
  }


  // @Post('valid')
  // @UsePipes(new ValidationPipe)
  // validUser(@Body() newdto:ValidDto ){
  //   User.push(newdto);
  //   return 'User Valid';
  // }

  @Post('login')
  login(@Req() req: Request & { session: any }) {
  req.session.username = 'abd';
  return req.session.username;
  }

  @Get('profile')
  profile(@Req() req: Request & { session: any })  {
    //console.log(req.session.username);
    return req.session.username;
  }
  @Post('logout')
  logout(@Req() req: Request & { session: any }) {
  req.session.destroy();
  return 'The session is RIP';
}


}