import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SellerlogEntity } from "src/sellerlogin/sellerlog.entity";
import { Sellerlogindto } from "src/sellerlogin/sellerlog.dto";
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class Sellerlogservice {
  constructor(
    @InjectRepository(SellerlogEntity)
    private sellerlogRepo: Repository<SellerlogEntity>,
    private mailerService: MailerService, 
  ) {}

  async sendEmail(to: string, subject: string, text: string) {
    try {
      await this.mailerService.sendMail({
        to,
        subject,
        text,
      });
    } catch (error) {
      throw new Error('Failed to send email.');
    }
  }

  insertseller(mydto:Sellerlogindto):any{
    return this.sellerlogRepo.save(mydto);
  }


  getseller(id):any{
    return this.sellerlogRepo.find({where:{id:id}},)
  }

  deleteseller(id): any {
    return this.sellerlogRepo.delete(id);
  }

  async updateseller(id: number, name: string): Promise<string> {
    const result = await this.sellerlogRepo.update(id, { name});

    if (result.affected > 0) {
      return 'Seller updated successfully done';
    } else {
      return 'Seller not found';
    }
  }

  allseller(): any {
    return this.sellerlogRepo.find();
  }




  async findOneByEmail(email:string):Promise<SellerlogEntity | undefined> {
    return this.sellerlogRepo.findOne({where: {email }});
  }
}