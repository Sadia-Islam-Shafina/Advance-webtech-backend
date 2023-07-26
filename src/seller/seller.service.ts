import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SellerEntity } from "src/seller/seller.entity";
import { SellerDto } from "src/seller/seller.dto";

@Injectable()
export class SellerService {
  constructor(
    @InjectRepository(SellerEntity)
    private sellerRepo:
    Repository<SellerEntity>,){}

  insertSeller(mydto:SellerDto):any{
    return this.sellerRepo.save(mydto);
  }


  getSeller(id):any{
    return this.sellerRepo.find({where:{id:id}},)
  }

  deleteSeller(id): any {
    return this.sellerRepo.delete(id);
  }

  async updateSeller(id: number, product_name: string): Promise<string> {
    const result = await this.sellerRepo.update(id, {product_name});

    if (result.affected > 0) {
      return 'Seller updated successfully done';
    } else {
      return 'Seller not found';
    }
  }

  allSeller(): any {
    return this.sellerRepo.find();
  }




}