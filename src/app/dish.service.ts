import { Injectable } from '@angular/core';
import { Dish } from './dish';
import { DISHES } from './mock-dishes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  
  constructor(private messageService: MessageService) { }

  getDishes(): Observable<Dish[]> {
    //TODO: send the message after fecthing the dishes
    this.messageService.add('DishService: fetched dishes');
    return of(DISHES);
  }
}
