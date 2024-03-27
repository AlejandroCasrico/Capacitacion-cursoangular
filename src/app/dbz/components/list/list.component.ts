import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
public characterList:Character[]= [{
  name:"trunks",
  power:2000000
    }
  ]

  onDeleteCharacter(index:number):void{
    this.onDelete.emit(index);
  }
  @Output()
  public onDelete:EventEmitter<number>= new EventEmitter()

}
