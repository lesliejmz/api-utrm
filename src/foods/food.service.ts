import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Food } from './food.entity';
import { Repository } from 'typeorm';
import { CreateFoodDto } from './dto/create-food.dto';

@Injectable()
export class FoodService {
    constructor(@InjectRepository(Food) private readonly foodrepository:Repository<Food>){}

    create(createFoodDto:CreateFoodDto): Promise<Food> {
    //Crea un objeto
    const food = new Food();
    if (CreateFoodDto.id) {
        food.id = createFoodDto.id;
    }
    food.name = createFoodDto.name;
    food.description = createFoodDto.description;
    food.category = createFoodDto.category;
    food.image = createFoodDto.image;
    food.price = createFoodDto.price;
    //Metodo que crea una tabla con TypeOn
    return this.foodrepository.save(food);
    }
    async findAll():Promise<Food[]> {
        return this.foodrepository.find();

    }
    findOne(id:number):Promise<Food>{
        return this.foodrepository.findOneBy ({ id:id});

    }
    async delete(id: string): Promise<void>{
        await this.foodrepository.delete(id);
    }
}

