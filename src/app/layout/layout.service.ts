import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LayoutService {

  constructor(private http: Http) { }

  private _subject = new Subject<any>();

  newEvent(event) {
    this._subject.next(event);
  }

  get events$ () {
    return this._subject.asObservable();
  }

  public getDiaries(type: string): Observable<any> {
    console.log(type);
    if(type === 'personal') {
      return this.http.get('assets/jsons/diaries/personal.json')
      .map(response => response.json());
    } else if(type === 'a-5') {
      return this.http.get('assets/jsons/diaries/a-5.json')
      .map(response => response.json());
    } else if(type === 'chief') {
      return this.http.get('assets/jsons/diaries/chief.json')
      .map(response => response.json());
    } else if(type === 'executive') {
      return this.http.get('assets/jsons/diaries/executive.json')
      .map(response => response.json());
    } else if(type === 'super executive') {
      return this.http.get('assets/jsons/diaries/super executive.json')
      .map(response => response.json());
    } else if(type === 'economy regular series') {
      return this.http.get('assets/jsons/diaries/economy regular series.json')
      .map(response => response.json());
    }
  };

  public getNotebooks(type: string): Observable<any> {
    console.log(type);
    if(type === 'journal') {
      return this.http.get('assets/jsons/notebooks/journal.json')
      .map(response => response.json());
    } else if(type === 'corporate') {
      return this.http.get('assets/jsons/notebooks/corporate.json')
      .map(response => response.json());
    } else if(type === 'wiro') {
      return this.http.get('assets/jsons/notebooks/wiro.json')
      .map(response => response.json());
    } else if(type === 'craft') {
      return this.http.get('assets/jsons/notebooks/craft.json')
      .map(response => response.json());
    } else if(type === 'telephone') {
      return this.http.get('assets/jsons/notebooks/tele.json')
      .map(response => response.json());
    } else if(type === 'religious') {
      return this.http.get('assets/jsons/notebooks/religious.json')
      .map(response => response.json());
    }
  };
}
