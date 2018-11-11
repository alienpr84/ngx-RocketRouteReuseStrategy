import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HouseModel } from '../houses/house-model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HousesService {

  constructor(private httpClient: HttpClient) { 
  }

  getHouse(counter: string): Observable<HouseModel> {
    return this.httpClient.get<HouseModel>(`../../assets/json/house.${counter}.json`)
      .pipe(
        map( result => new HouseModel(result.id, result.price, result.owner, result.location, result.tax) )
      );
  }

  getHouses(): Observable<HouseModel[]> {
    return this.httpClient.get<HouseModel[]>('../../assets/json/houses.json')
    .pipe(map(result => { 
      return result.map((item:any) => { 
        return new HouseModel(item.id, item.price, item.owner, item.location, item.tax);
      });
    }));
  }
}
