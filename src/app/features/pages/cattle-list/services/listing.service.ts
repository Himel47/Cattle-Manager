import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CattleInfo } from '../../../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  constructor(private http: HttpClient) { }

  getCattleList(): Observable<CattleInfo[]> {
    const url = 'localhost:3000/cattle'
    return this.http.get<CattleInfo[]>(url);
  }
}
