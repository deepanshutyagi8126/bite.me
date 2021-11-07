import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Ng5SliderModule } from 'ng5-slider';
import { AppRoutingModule } from './app-routing.module';
import { NgxNumberSpinnerModule } from 'ngx-number-spinner';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Header2Component } from './header2/header2.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { Home2Component } from './home2/home2.component';
import { OffersComponent } from './offers/offers.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantsAllComponent } from './restaurants-all/restaurants-all.component';
import { RestaurantsDetailsComponent } from './restaurants-details/restaurants-details.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { EnteryourcodeComponent } from './enteryourcode/enteryourcode.component';
import { SetpasswordComponent } from './setpassword/setpassword.component';
import { MyorderComponent } from './myorder/myorder.component';
import { Header3Component } from './header3/header3.component';
import { Myorder2Component } from './myorder2/myorder2.component';
import { Myorder3Component } from './myorder3/myorder3.component';
import { Header4Component } from './header4/header4.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ReviewComponent } from './review/review.component';
import { EnteremailComponent } from './enteremail/enteremail.component';
import { OtpComponent } from './otp/otp.component';
import { AccountinfoComponent } from './accountinfo/accountinfo.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { SavedaddressComponent } from './savedaddress/savedaddress.component';
import { PaymentcardComponent } from './paymentcard/paymentcard.component';
import { SupportComponent } from './support/support.component';
import { Footer2Component } from './footer2/footer2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Header2Component,
    HomeComponent,
    FooterComponent,
    Home2Component,
    OffersComponent,
    RestaurantsComponent,
    RestaurantsAllComponent,
    RestaurantsDetailsComponent,
    FavouriteComponent,
    CheckoutComponent,
    LoginComponent,
    CreateaccountComponent,
    EnteryourcodeComponent,
    SetpasswordComponent,
    MyorderComponent,
    Header3Component,
    Myorder2Component,
    Myorder3Component,
    Header4Component,
    ForgotComponent,
    ReviewComponent,
    EnteremailComponent,
    OtpComponent,
    AccountinfoComponent,
    FavouritesComponent,
    SavedaddressComponent,
    PaymentcardComponent,
    SupportComponent,
    Footer2Component
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    Ng5SliderModule,
    NgxNumberSpinnerModule,
    NgxIntlTelInputModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
