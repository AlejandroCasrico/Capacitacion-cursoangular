import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  public character: Character = {
    name:"",
    power:0
  }
  @Output()
  public onNewCharacter:EventEmitter<Character> = new EventEmitter();

  emitCharacter():void{
    if(this.character.name.length === 0)return;
    console.log(this.character);
    this.onNewCharacter.emit(this.character);
 this.character = {name:"",power:0}
  }
}
