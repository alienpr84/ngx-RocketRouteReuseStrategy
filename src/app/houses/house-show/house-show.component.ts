import { Component, OnInit } from '@angular/core';
import { HousesService } from '../houses.service';
import { ActivatedRoute } from '@angular/router';
import { HouseModel } from '../house-model';

@Component({
  selector: 'app-house-show',
  templateUrl: './house-show.component.html',
  styleUrls: ['./house-show.component.scss']
})
export class HouseShowComponent implements OnInit {

  house: HouseModel;
  constructor(private houseService: HousesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.houseService
      .getHouse(this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe(
        result => this.house = result
      )
  }

}
