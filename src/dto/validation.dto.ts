import { IsNotEmpty, Length} from "class-validator"

export class ValidationDto
{
	id:number
	
    @IsNotEmpty({message:'Empty!!!'})
	@Length(5,20)
	name:string

    @IsNotEmpty({message:'Empty!!!'})
    @Length(11,14)
    contact:number 
}