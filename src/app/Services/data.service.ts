import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  GetStudentData(): Observable<any>{
    return this.http.get('https://jsonblob.com/api/jsonblob/f8bbd62d-5e22-11ea-a136-8574a4ef204d')
  }

  GetWeatherData():Observable<any>{
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=f18567045ea31bf0b674d81705b4101d')
  }
}
