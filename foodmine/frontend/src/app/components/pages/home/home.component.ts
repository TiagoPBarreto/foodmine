import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  food:Food[] = []

  constructor(private foodServices:FoodService, activateRoute:ActivatedRoute) {
    activateRoute.params.subscribe((params)=>{
      if(params.searchTerm)
      this.food = this.foodServices.getAllFoodsBySearchTerm(params.searchTerm)
      else if(params.tag)
      this.food = this.foodServices.getAllFoodByTag(params.tag)
      else
      this.food = foodServices.getAll()
    })

   }

  ngOnInit(): void {
  }

}
