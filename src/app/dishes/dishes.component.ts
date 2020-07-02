import { Component, OnInit } from '@angular/core';
import { Dish }  from '../dish'; 
import { DishService } from '../dish.service';
import { MessageService } from '../message.service'
@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {


  selectedDish: Dish;
  
  dishes: Dish[];
  
  constructor(private dishService: DishService, private messageService: MessageService) { }

  ngOnInit() {
    this.getDishes();
  }

  onSelect(dish: Dish): void{
    this.selectedDish = dish;
    this.messageService.add('DishesComponent: Selected dish id=${dish.id}');
  }

  getDishes(): void {
    this.dishService.getDishes()
    .subscribe(dishes => this.dishes = dishes);
     
  }

}
