import {Body,Controller,Get,Post,Param,ValidationPipe,ParseIntPipe,UsePipes,Put,Delete,Session,Req,UseGuards} from "@nestjs/common";
import {Sellerlogindto} from "src/sellerlogin/sellerlog.dto";
import {Sellerlogservice} from 'src/sellerlogin/sellerlog.service';
import {SellerlogEntity} from "src/sellerlogin/sellerlog.entity";
import * as session from 'express-session';
import {Request,Response} from 'express';
import { SessionGuard } from 'src/guards/session.guards';
import { MailerService } from '@nestjs-modules/mailer';

@Controller('/seller-log')
export class SellerlogController {
	constructor(private readonly sellerlogservice:Sellerlogservice){}

	@Post('/insertseller')
	@UseGuards(SessionGuard)
	@UsePipes(new ValidationPipe())
	insertseller (@Body() sellerlogdto:Sellerlogindto){
		return this.sellerlogservice.insertseller(sellerlogdto);
	}

	@Get('/getseller/:id')
	@UseGuards(SessionGuard)
	getseller(@Param('id',ParseIntPipe)id:number):any
	{
      return this.sellerlogservice.getseller(id);
	}
	
	@Delete('/deleteseller/:id')
	@UseGuards(SessionGuard)
	deleteseller(@Param('id',ParseIntPipe)id:number):any
	{
      return this.sellerlogservice.deleteseller(id);
	}

	@Put('/updateseller/:id')
	@UseGuards(SessionGuard)
	updateseller(@Param('id',ParseIntPipe)
		id:number,@Body('name') name:string):any
	{
      return this.sellerlogservice.updateseller(id,name);
	}
	
	@Get('/allseller')
	@UseGuards(SessionGuard)
	allseller():any
	{
      return this.sellerlogservice.allseller();
	}



  @Post('/login')
//@UseGuards(SessionGuard)
async login(@Body() user: Sellerlogindto, @Session() session: Record<string, any>): Promise<any>
    {
    	const seller = await this.sellerlogservice.findOneByEmail(user.email);

    	if(seller && seller.password === user.password )
    	{
    		session.sellerid = seller.id;
    		return 'Login Success' ;
    	}

    	return 'Failed! Please Try Again!' ;
    }
 

    @Post('/logout')
    @UseGuards(SessionGuard)
    async logout(@Session() session:Record<string,any>){
    	session.destroy();
    	return 'Logout Success' ;
    }


    @Post('/send-email')
    @UseGuards(SessionGuard)
    async sendEmail(@Body() emailData: { to: string; subject: string; text: string }) {
        try {
            await this.sellerlogservice.sendEmail(emailData.to, emailData.subject, emailData.text);
            return { message: 'Email sent successfully!' };
            } catch (error) {
                 return{ error: 'Failed to send email.'};
                }
               }

               
}
  