import { Component, OnInit,Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './chid.component.html',
  styleUrls: ['./chid.component.css']
})
export class ChidComponent implements OnInit {
  @Input('title')
childtitle:string="Default data";
@Input('items')
things:string[];
style:string="style1";
@Output('send')
emitter:EventEmitter<string>=new EventEmitter<string>();
item:string;
  constructor() { }

  ngOnInit() {
  }
  changeColor()
  {
    if(this.style=="style1")
    {
      this.style="style2";
    }
    else{
    this.style="style1"
    }
  }
  sendToParent()
  {
this.emitter.emit(this.item);
  }

}
