import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Headers, Http } from '@angular/http';

@Component({
    selector: 'nots-component',
    templateUrl: './nots.html'
})

export class NotsComponent implements OnInit {

  constructor(private http: Http){}
  info: any;
  model: any;
  notification: any;
  public carsUrl = 'https://kizusi.herokuapp.com/notifications/';
  
  ngOnInit()
  {
    return this.http.get(this.carsUrl)
                  .toPromise()
                   .then(res => {
                          this.info = res.json();
                           this.model = this.info[0];
                           this.notification = this.model.notification;
                           console.log('Iam info',this.info);

                      })
                   .catch(this.handleError)
  }
  private handleError(error: any): Promise<any>
   {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
  }

}
