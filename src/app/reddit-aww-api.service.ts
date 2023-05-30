import { Injectable } from '@angular/core';
import { ChildData, RedditAww } from './reddit';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedditAwwAPIService {

  url:string ="";

  constructor(private http:HttpClient) { }

  
}
