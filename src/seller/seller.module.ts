import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SellerEntity } from "./seller.entity";
import { SellerController } from "src/seller/seller.controller";
import { SellerService } from "src/seller/seller.service";

@Module({
  imports: [TypeOrmModule.forFeature([SellerEntity])],
  controllers: [SellerController],
  providers: [SellerService],
})
export class  SellerModule {}