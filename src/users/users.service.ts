import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private usersRepository:Repository<User>){}

    create(email:string,password:string){
        const user=this.usersRepository.create({email,password})
        return this.usersRepository.save(user)
    }

    findOne(id:number){
        return this.usersRepository.findOne(id)
    }

    find(email:string){
        return this.usersRepository.find({email:email})
    }

    async update(id:number,attrs:Partial<User>){
        const user=await this.usersRepository.findOne(id)
        if(!user){
            throw new Error('user not found')
        }
        Object.assign(user,attrs)
        console.log(user)
        return this.usersRepository.save(user)
    }

    async remove(id: number) {
        const user = await this.findOne(id);
        if (!user) {
          throw new NotFoundException('user not found');
        }
        return this.usersRepository.remove(user);
      }
}
