import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }
  public heroesArray:string[] = ["IRON MAN","SPIDER MAN", "THOR","HULK","BLACK WIDOW"]
  public deletedHero?:string;
  ngOnInit() {
  }
  removeLastHero():void{
   this.deletedHero = this.heroesArray.pop();
  }
}
