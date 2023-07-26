import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SellerlogEntity } from "./sellerlog.entity";
import { SellerlogController } from "src/sellerlogin/sellerlog.controller";
import { Sellerlogservice } from "src/sellerlogin/sellerlog.service";
import { MailerModule } from '@nestjs-modules/mailer'; // Corrected import

@Module({
  imports: [
    TypeOrmModule.forFeature([SellerlogEntity]),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 465,
        ignoreTLS: true,
        secure: true,
        auth: {
          user: 'sellerbuddycc@gmail.com',
          pass: 'yrirwkvmsfqjkqnc',
        },
      }
    })
  ],
  controllers: [SellerlogController],
  providers: [Sellerlogservice],
})
export class SellerlogModule {}