import { Component } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  filter = {
    min: 0,
    max: 0,
    from: "",
    to: "",
    status:true
  }

  categories = [
    {id: 1, name: "Rent", icon: "bi-cart", type: "expense", color: "secondary"},
    {id: 2, name: "Health", icon: "bi-house", type: "expense", color: "primary"},
    {id: 3, name: "Education", icon: "bi-cart", type: "expense", color: "danger"},
    {id: 4, name: "Salary", icon: "bi-cart", type: "expense", color: "info"},
    {id: 5, name: "Transport", icon: "bi-cart", type: "expense", color: "secondary"}
  ];

  list = [
    {
      id: 1, amount: 500, date: "2023/11/07 15:08:34", type: "expense", operations: [
        {id:1, description:"Description", amount:300, type:"expense", category_id:1},
        {id:2, description:"Description", amount:200, type:"expense", category_id:2},
        {id:3, description:"Description", amount:400, type:"expense", category_id:3}
      ]
    },
    {
      id: 2, amount: 300, date: "2023/11/06 15:08:34", type: "income", operations:[
        {id:1, description:"Description", amount:300, type:"expense", category_id:1}
      ]
    }
  ];

  transactions = this.list;
  categories_list:Array<number> = []

  categories_filter(id:number, eve:any){
    this.transactions = [
      {
        id: 1, amount: 500, date: "2023/11/07 15:08:34", type: "expense", operations: [
          {id:1, description:"Description", amount:300, type:"expense", category_id:1},
          {id:2, description:"Description", amount:200, type:"expense", category_id:2},
          {id:3, description:"Description", amount:400, type:"expense", category_id:3}
        ]
      },
      {
        id: 2, amount: 300, date: "2023/11/06 15:08:34", type: "income", operations:[
          {id:1, description:"Description", amount:300, type:"expense", category_id:1}
        ]
      }
    ];
    
    if(eve.target.checked === true){
      this.categories_list.push(id);
    }else{
      let index = this.categories_list.findIndex(d => d === id)
      this.categories_list.splice(index,1);
    }
    
    if(this.categories_list.length > 0){
      this.transactions.forEach((value, key) => {
        this.transactions[key].operations = this.transactions[key].operations.filter(
          e => this.categories_list.includes(e.category_id)
        );
      })
    }
  };
  filter_transactions(){
    this.transactions = [
      {
        id: 1, amount: 500, date: "2023/11/07 15:08:34", type: "expense", operations: [
          {id:1, description:"Description", amount:300, type:"expense", category_id:1},
          {id:2, description:"Description", amount:200, type:"expense", category_id:2},
          {id:3, description:"Description", amount:400, type:"expense", category_id:3}
        ]
      },
      {
        id: 2, amount: 300, date: "2023/11/06 15:08:34", type: "income", operations:[
          {id:1, description:"Description", amount:300, type:"expense", category_id:1}
        ]
      }
    ];

    if(this.filter.from !== "" && this.filter.to !== ""){
      this.transactions = this.transactions.filter((e) => {
        let date = new Date(e.date).getTime();
        let from = new Date(this.filter.from).getTime();
        let to = new Date(this.filter.to).getTime();
        return date >= from && date <= to;
      });
    }

    if(this.filter.min > 0 && this.filter.max > 0){
      for (let i = 0; i < this.transactions.length; i++) {
        this.transactions[i].operations = this.transactions[i].operations.filter((obj) => {
          return (obj.amount >= this.filter.min && obj.amount <= this.filter.max);
        });
      }
    }
  };
  search_icon(id:number){
    return (this.categories.find(item => item.id === id)?.icon)
  };
  search_color(id:number){
    return (this.categories.find(item => item.id === id)?.color)
  };
  search_name(id:number){
    return (this.categories.find(item => item.id === id)?.name)
  };
  create_date(date:string){
    return new Date(date)
  }
  status_filter(){
    this.filter.status = !this.filter.status;
  }
}
