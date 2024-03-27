import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character';
import {v4 as uuid} from 'uuid'
@Injectable({
  providedIn: 'root'
})
export class DbzService {


public characters:Character[] =[
  {
    id:uuid(),
    name:"Krillin",
    power:4000
  },
  {
    id:uuid(),
    name:"Goku",
    power:50000
  },
  {
    id:uuid(),
    name:"Vegeta",
    power:40000
  }

]
onNewCharacter(character:Character):void{
  const newcharacter:Character = {
    id:uuid(), ...character }
this.characters.push(character);
}
onDeleteCharacter(index:number):void{
this.characters.splice(index,1)
}
}
