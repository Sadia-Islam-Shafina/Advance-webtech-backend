import {Body,Controller,Get,Post,Param,ValidationPipe,ParseIntPipe,UsePipes,Put,Delete,Session,Req,UseGuards} from "@nestjs/common";
import {SellerDto} from "src/seller/seller.dto";
import {SellerService} from 'src/seller/seller.service';
import {SellerEntity} from "src/seller/seller.entity";
//import { sellerlogindto } from "src/seller/sellerlogin.dto";
import * as session from 'express-session';
import {Request,Response} from 'express';
import { SessionGuard } from 'src/guards/session.guards';

@Controller('/seller')
export class SellerController {
	constructor(private sellerService:SellerService){}

	@Post('/insertSeller')
	@UseGuards(SessionGuard)
	@UsePipes(new ValidationPipe())
	insertSeller (@Body() sellerdto:SellerDto){
		return this.sellerService.insertSeller(sellerdto);
	}

@Get('/getSeller/:id')//for search
@UseGuards(SessionGuard)
	getSeller(@Param('id',ParseIntPipe)id:number):any
	{
      return this.sellerService.getSeller(id);
	}

@Delete('/deleteSeller/:id')
@UseGuards(SessionGuard)
	deleteSeller(@Param('id',ParseIntPipe)id:number):any
	{
      return this.sellerService.deleteSeller(id);
	}

	@Put('/updateSeller/:id')
	@UseGuards(SessionGuard)
	updateSeller(@Param('id',ParseIntPipe)
		id:number,@Body('product_name') product_name:string):any
	{
      return this.sellerService.updateSeller(id,product_name);
	}


	@Get('/allSeller')
	@UseGuards(SessionGuard)
	allSeller():any
	{
		return this.sellerService.allSeller();
	}


	// @Post('/login')
    // login(@Req() req: Request & { session: any }) {
    // req.session.username = 'abd';
    // return req.session.username;
    // }

 


    // @Post('/logout')
    // @UseGuards(SessionGuard)
    // logout(@Req() req: Request & { session: any }) {
    // req.session.destroy();
    // return 'The session is RIP';
    // }



}