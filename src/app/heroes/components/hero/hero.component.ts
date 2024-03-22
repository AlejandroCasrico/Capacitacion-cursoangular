import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor() { }
  public name:string = "Spiderman";
  public age:number = 45;
  ngOnInit() {
  }
  get CapitalizeName():string{
    return this.name.toUpperCase();
  }
getHeroDescription():string{
  return `${this.name} - ${this.age}`
}
changeHeroName():void{
this.name = "batman";
}
changeHeroAge():void{
  this.age = 33;
}
resetHero():void{
  this.name = "Spiderman"
  this.age =45;
}

}
