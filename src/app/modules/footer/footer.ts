import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'footer-component',
    templateUrl: './footer.html'
})

export class FooterComponent {

  title: string = 'My first AGM project';
  lat: number = -1.308957;
  lng: number =  36.894381;
  getZoom: number = 15;

}
