import { BrowserModule } from '@angular/platform-browser';;
import { AppComponent } from './app.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarComponent } from './modules/navbar/navbar';
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule }   from './app-routing.module';
import { HomeComponent } from './modules/home/home'
import { FooterComponent} from './modules/footer/footer';
import { NotsComponent} from './modules/notifications/nots';
import { ContactComponent } from './modules/contact/contact';
import { AboutComponent } from './modules/about/about';
import { GalleryComponent } from './modules/gallery/gallery';
import { MngmntComponent } from './modules/mngmnt/mngmnt';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule,FormGroup,FormControl } from '@angular/forms'
import { AdminComponent } from './modules/admin/admin';
import { HttpModule }    from '@angular/http';
import { EscapeHtmlPipe } from './modules/notifications/pipy';
import { AuthComponent } from './modules/auth/auth';
import { DashComponent } from './modules/dash/dash';
import { StaffComponent } from './modules/staff/staff';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    MngmntComponent,
    AdminComponent,
    EscapeHtmlPipe,
    NotsComponent,
    AuthComponent,
    DashComponent,
    StaffComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MDBBootstrapModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCsuGIJdVor_CBVRJ7Qffm7iEFJecVAHHk'
    }),
    NgxEditorModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
