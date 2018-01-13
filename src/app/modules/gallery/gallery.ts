import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'gallery-component',
    templateUrl: './gallery.html'
})

export class GalleryComponent implements OnInit
{
  images: Array<any>;

  ngOnInit()
  {

    this.images =
                  [
                  {img: "/../../../assets/gal_28.JPG"},
                  {img: "/../../../assets/gal_4.JPG"},
                  {img: "/../../../assets/gal_16.JPG"},
                  {img: "/../../../assets/gal_18.JPG"},
                  {img: "/../../../assets/gal_1.JPG"},
                  {img: "/../../../assets/gal_2.JPG"},
                  {img: "/../../../assets/gal_5.JPG"},
                  {img: "/../../../assets/gal_6.JPG"},
                  {img: "/../../../assets/gal_7.JPG"},
                  {img: "/../../../assets/gal_8.JPG"},
                  {img: "/../../../assets/gal_9.JPG"},
                  {img: "/../../../assets/gal_10.JPG"},
                  {img: "/../../../assets/gal_11.JPG"},
                  {img: "/../../../assets/gal_13.JPG"},
                  {img: "/../../../assets/gal_14.JPG"},
                  {img: "/../../../assets/gal_15.JPG"},

                  {img: "/../../../assets/gal_17.JPG"},

                  {img: "/../../../assets/gal_19.JPG"},
                  {img: "/../../../assets/gal_20.JPG"},
                  {img: "/../../../assets/gal_21.JPG"},
                  {img: "/../../../assets/gal_22.JPG"},
                  {img: "/../../../assets/gal_23.JPG"},
                  {img: "/../../../assets/gal_24.JPG"},
                  {img: "/../../../assets/gal_25.JPG"},
                  {img: "/../../../assets/gal_26.JPG"},
                  {img: "/../../../assets/gal_27.JPG"},
                  {img: "/../../../assets/gal_28.JPG"},
                  {img: "/../../../assets/gal_29.JPG"},
                  {img: "/../../../assets/gal_30.JPG"},
                  {img: "/../../../assets/gal_31.JPG"}
      ]

  }


}
