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
    status: false
  }

  categories = [
    { id: 1, name: "Rent", icon: "bi-bank", type: "expense", color: "secondary" },
    { id: 2, name: "Health", icon: "bi-dpad-fill", type: "expense", color: "danger" },
    { id: 3, name: "Education", icon: "bi-cart", type: "expense", color: "primary" },
    { id: 4, name: "Salary", icon: "bi-cart", type: "expense", color: "warning" },
    { id: 5, name: "Transport", icon: "bi-cart", type: "expense", color: "success" }
  ];

  transactions_list = [
    {
      id: 1, amount: 500, date: "2023/11/07 15:08:34", type: "expense", operations: [
        { id: 1, description: "Description", amount: 300, type: "expense", category_id: 1 },
        { id: 2, description: "Description", amount: 200, type: "expense", category_id: 2 },
        { id: 3, description: "Description", amount: 400, type: "expense", category_id: 3 }
      ]
    },
    {
      id: 2, amount: 300, date: "2023/11/06 15:08:34", type: "income", operations: [
        { id: 1, description: "Description", amount: 300, type: "expense", category_id: 1 }
      ]
    }
  ];
  transactions = this.transactions_list;

  categories_filter(id: number) {
    if (this.filter.from !== "" && this.filter.to !== "") {
      this.transactions = this.transactions_list.filter(
        e => new Date(e.date) > new Date(this.filter.from) && new Date(e.date) < new Date(this.filter.to)
      );
    } else {
      this.transactions = this.transactions_list;
    }

    this.transactions.forEach((value, key) => {
      if (id > 0) {
        this.transactions[key].operations = this.transactions[key].operations.filter(
          e => e.category_id === id
        );
      }
    })
  };
  filter_transactions() {
    if (this.filter.from !== "" && this.filter.to !== "") {
      this.transactions = this.transactions_list.filter(
        e => new Date(e.date) > new Date(this.filter.from) && new Date(e.date) < new Date(this.filter.to)
      );
    } else {
      this.transactions = this.transactions_list;
    }

    this.transactions.forEach((value, key) => {
      if (this.filter.min > 0 && this.filter.max > 0) {
        this.transactions[key].operations = this.transactions_list[key].operations.filter(
          e => e.amount > this.filter.min && e.amount < this.filter.max
        );
      }
    })
  };
  search_icon(id: number) {
    return (this.categories.find(item => item.id === id)?.icon)
  };
  search_color(id: number) {
    return (this.categories.find(item => item.id === id)?.color)
  };
  search_name(id: number) {
    return (this.categories.find(item => item.id === id)?.name)
  };
  create_date(date: string) {
    return new Date(date)
  }
  status_filter() {
    this.filter.status = !this.filter.status;
  }
}
