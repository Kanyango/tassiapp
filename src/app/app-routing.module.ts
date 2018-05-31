import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './modules/home/home';
import { AboutComponent } from './modules/about/about';
import { ContactComponent } from './modules/contact/contact';
import { GalleryComponent } from './modules/gallery/gallery';
import { MngmntComponent } from './modules/mngmnt/mngmnt';
import { AdminComponent } from './modules/admin/admin';
import { NotsComponent} from './modules/notifications/nots';
import { DashComponent } from './modules/dash/dash';
import { StaffComponent } from './modules/staff/staff';
import { DownloadsComponent } from './modules/downloads/downloads';
// import { ServicesComponent } from './modules/services/services';
// import { AboutComponent } from './modules/about/about';
// import { CarsComponent } from './modules/cars/cars';
// import { ContactComponent } from './modules/contact/contact';
// import { CarDetailsComponent } from './modules/cars/car_details';
// import { ConfirmationComponent } from './modules/cars/confirmation';
// import { PaymentsComponent } from './modules/payments/payments';
// import { MpesaComponent } from './modules/mpesa/mpesa';
// import { PaypalComponent } from './modules/paypal/paypal';
// import { RentYourCarComponent } from './modules/rent_car/rent_car';
// import { PaypalBtnComponent } from './modules/pay_btn/pay_btn';

const routes: Routes = [
        { path: '', redirectTo: 'home', pathMatch: 'full'},
        { path: 'home', component: HomeComponent},
        { path: 'about', component: AboutComponent },
        { path: 'contact', component: ContactComponent },
        { path: 'gallery', component: GalleryComponent },
        { path: 'mngmnt', component: MngmntComponent },
        { path: 'admin', component: AdminComponent },
        { path: 'notification', component: NotsComponent },
        { path: 'dash', component: DashComponent },
        { path: 'staff', component: StaffComponent },
        { path: 'downloads', component: DownloadsComponent }
        // { path: 'services', component: ServicesComponent},
        // { path: 'cars', component: CarsComponent},
        // { path: 'contact', component: ContactComponent},
        // { path: 'car_detail/:id', component: CarDetailsComponent},
        // { path: 'thankyou', component: ConfirmationComponent},
        // { path: 'rent_car', component: RentYourCarComponent},
        // { path: 'payments/:id', component: PaymentsComponent},
        // { path: 'mpesa/:id', component: MpesaComponent},
        // { path: 'paypal/:id', component: PaypalComponent},
        // { path: 'confirmation', component: PaypalBtnComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
