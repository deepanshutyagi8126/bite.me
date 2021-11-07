import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
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
import { Myorder2Component } from './myorder2/myorder2.component';
import { Myorder3Component } from './myorder3/myorder3.component';
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

const routes: Routes = [
  { path: '', component: HomeComponent },
  
  { path: 'home2', component: Home2Component },
  { path: 'offers', component: OffersComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'restaurants-all', component: RestaurantsAllComponent },
  { path: 'restaurants-details', component: RestaurantsDetailsComponent },
  { path: 'favourite', component: FavouriteComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'createaccount', component: CreateaccountComponent },
  { path: 'enteryourcode', component: EnteryourcodeComponent },
  { path: 'setpassword', component: SetpasswordComponent },
  { path: 'myorder', component: MyorderComponent },
  { path: 'myorder2', component: Myorder2Component },
  { path: 'myorder3', component: Myorder3Component },
  { path: 'forgot', component: ForgotComponent },
  { path: 'review', component: ReviewComponent },
  { path: 'enteremail', component: EnteremailComponent },
  { path: 'otp', component: OtpComponent },
  { path: 'accountinfo', component: AccountinfoComponent },
  { path: 'favourites', component: FavouritesComponent },
  { path: 'savedaddress', component: SavedaddressComponent },
  { path: 'paymentcard', component: PaymentcardComponent },
  { path: 'support', component: SupportComponent },
  { path: 'footer2', component: Footer2Component },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    useHash: true,
    anchorScrolling: 'enabled',
    })
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }





