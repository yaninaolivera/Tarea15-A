import { Component } from '@angular/core';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '{expensable}';
   categories = [
      {id:1, name:"Rent", amount:500, type:"expense", color:"secondary", icon:"bi-bank"},
      {id:2, name:"Groceries", amount:100, type:"expense", color:"info", icon:"bi-cart"},
      {id:3, name:"Transport", amount:150, type:"expense", color:"warning", icon:"bi-car-front-fill"},
      {id:4, name:"Health", amount:200, type:"expense", color:"danger", icon:"bi-dpad-fill"},
      {id:5, name: "Gifts", amount: 50, type:"expense", color: "success", icon: "bi-gift-fill"},
      {id:6, name: "Education", amount: 250, type:"expense", color: "primary", icon: "bi-journals"}
    ];

    newcategory(category:string){
      this.categories.push(JSON.parse(category));
    }
}
