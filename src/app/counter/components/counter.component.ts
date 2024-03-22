import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  public counter:number = 10;
  public resetValue:number = 0;
  ngOnInit() {
  }
  increaseBy(value:number):void{
    this.counter +=value;

  }
  reset():void{
    this.counter = this.resetValue
  }


}
