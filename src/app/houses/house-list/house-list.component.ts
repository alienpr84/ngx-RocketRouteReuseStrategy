import { Component, OnInit } from '@angular/core';
import { HousesService } from '../houses.service';
import { HouseModel } from '../house-model';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.scss']
})
export class HouseListComponent implements OnInit {

  houses: HouseModel[];

  constructor(private housesService: HousesService) { }

  ngOnInit() {
    this.housesService.getHouses().subscribe(
      result => {
        this.houses = result;
      }
    );
  }

}
