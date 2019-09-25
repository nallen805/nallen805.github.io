import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit 
{
  message:String = "Start typing to add your item to the list:";
  addStyle:boolean=true;
  formControl:boolean=true;
  listOfToDoItems:any[]=[];
  countItems:number[]=[];
  imgLocation:String='/assets/images/iconPlusCircle.png';
  addFontStyle:boolean=true;
  displayText:String;

  addToList(displayText):void
  { this.listOfToDoItems.push(displayText);  }

  displayNoItemsMsg:String="Nothing to show here...";

  removeItem(item):void
  {
    for(let i=0; i<this.listOfToDoItems.length; i++)
    {
      if(this.listOfToDoItems[i]==item)
      { this.listOfToDoItems.splice(i, 1);  }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
