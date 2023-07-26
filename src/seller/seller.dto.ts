import{IsNotEmpty,Length,IsEmail} from "class-validator";

export class SellerDto{
	@IsNotEmpty({message:'Product_Name can not be empty!'})
	@Length(5,50)
	product_name:string;



	@IsNotEmpty({message:'Code can not be empty!'})
	@Length(4,10)
    code:string;

	

	

	

}