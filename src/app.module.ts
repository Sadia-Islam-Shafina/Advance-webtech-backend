import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SellerController } from './seller/seller.controller';
import { SellerModule } from './seller/seller.module';
import { SellerlogController } from './sellerlogin/sellerlog.controller';
import { SellerlogModule } from './sellerlogin/sellerlog.module';

@Module({
  imports: [SellerModule,SellerlogModule, TypeOrmModule.forRoot({
      type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'ns67',
        database: 'seller_buddy',
        autoLoadEntities:true,
        synchronize: true,
}),
],
  controllers:[],
  providers: [],
})
export class AppModule {}
