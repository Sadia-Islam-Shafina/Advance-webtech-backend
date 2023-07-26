import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm';

@Entity("product")

	export class SellerEntity{
		@Column()
		@PrimaryGeneratedColumn()
		id:number;

		@Column()
		product_name:string;


		@Column()
		code:string;


		


	}