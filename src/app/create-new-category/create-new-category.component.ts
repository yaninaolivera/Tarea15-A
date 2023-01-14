import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-create-new-category',
  templateUrl: './create-new-category.component.html',
  styleUrls: ['./create-new-category.component.css']
})
export class CreateNewCategoryComponent {
  colors = ["danger", "warning", "success", "info", "primary", "secondary"];
  icons = ["bi-house", "bi-cart", "bi-car-front-fill", "bi-dpad-fill", "bi-journals", "bi-bank", "bi-controller", "bi-mortarboard-fill"];

  category: Category = {
    id: 0,
    name: "",
    amount: 0,
    type: "",
    color: "",
    icon: ""
  }

  @Output() newcategoryevent = new EventEmitter<string>();

  onSubmit(form: NgForm): void {
    this.newcategoryevent.emit(String(JSON.stringify(this.category)));
  }
  select_color(item: string) {
    this.category.color = item
  }
  select_icon(item: string) {
    this.category.icon = item
  }
}

