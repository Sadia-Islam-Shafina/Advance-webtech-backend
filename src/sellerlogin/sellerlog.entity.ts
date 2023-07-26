import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm';
import {IsEmail} from 'class-validator';

@Entity("seller_log")

	export class SellerlogEntity{
		@Column()
		@PrimaryGeneratedColumn()
		id:number;

		@Column()
		name:string;

		@Column()
		@IsEmail()
		email:string;

		@Column()
		password:string;

		@Column()
		contact:number;


	}