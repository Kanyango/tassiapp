import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Headers, Http } from '@angular/http';
import { Nots } from '../admin/nots';

@Component({
    selector: 'dash-component',
    templateUrl: './dash.html'
})

export class DashComponent implements OnInit {

  constructor(private http: Http){}
  public carsUrl = 'https://kizusi.herokuapp.com/notifications/';

  model: any;
  notification = '';
  info: Array<Nots> = [];

  ngOnInit()
  {
    return this.http.get(this.carsUrl)
                  .toPromise()
                   .then(res => {
                          this.info = res.json();
                           this.model = this.info[0];
                           this.notification = this.model.notification;
                           console.log(res.json());

                      })
                   .catch(this.handleError)
  }

  create()
  {
    let data_S = {notification: ''};
    data_S.notification = this.notification;

    return this.http.post(this.carsUrl, data_S)
                  .toPromise()
                   .then(res => {
                           this.info = res.json();
                           this.model = this.info[0];
                           console.log(res.json());

                      })
                   .catch(this.handleError)
  }
  update()
  {
    console.log(this.model);
    let data_S = {notification: ''};
    data_S.notification = this.notification;
    const URL = `${this.carsUrl}${this.model._id}`;

    return this.http.put(URL, data_S)
                  .toPromise()
                   .then(res => {
                       this.info = res.json();
                       this.model = this.info[0];
                           console.log(res.json());

                      })
                   .catch(this.handleError)
  }
  private handleError(error: any): Promise<any>
   {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
  }
}
