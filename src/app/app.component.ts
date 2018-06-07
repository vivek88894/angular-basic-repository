import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  childtitles:string[]=["Vegetables","fruits","spices","stationaries"];
  items:string[][]=[
    ["onion","potato","tomato","brinjal","chilli"],
    ["apple","banana","cherry","grapes","mango"],
    ["cardamon","cinamon","cloves","Pepper"],
    ["pen","paper","book","sharpener"]
  ];
addItem(i:number,item:string)
{
this.items[i].push(item);
}
}
