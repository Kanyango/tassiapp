import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Headers, Http } from '@angular/http';
import { DashComponent } from '../dash/dash';

@Component({
    selector: 'auth-component',
    templateUrl: './auth.html'
})

export class AuthComponent {

    public loginForm: FormGroup;
    constructor(
            private http: Http,
            private router: Router,
            private route: ActivatedRoute,
            private _fb: FormBuilder)
            {
                this.createForm();
            }
    public loginUrl = 'https://kizusiadmin.herokuapp.com/login/';

        createForm()
        {
            this.loginForm = this._fb.group(
                {
                    username : ['', Validators.required],
                    password : ['', Validators.required]
                })
        }
        onSubmit()
        {
            return this.http.post(this.loginUrl, this.loginForm.value)
                          .toPromise()
                           .then(res =>
                               {
                                  //console.log(res.json());
                                  //let token_data = res.json();
                                  //let token = token_data.token;
                                 // console.log(token);
                                  //localStorage.setItem('tassia-app', token);
                                   //$window.localStorage['kizusi-app-token'] = token;
                                   this.router.navigate(['/dash']);
                              })
                           .catch(this.handleError)
          }
          private handleError(error: any): Promise<any>
           {
          console.error('An error occurred', error); // for demo purposes only
          return Promise.reject(error.message || error);
          }
}
