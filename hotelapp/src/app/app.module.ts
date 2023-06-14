import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ResourceModule } from './Components/resource/resource.module';
import { AccountModule } from './account/account.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxPayPalModule } from 'ngx-paypal';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountModule,
    ResourceModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      tapToDismiss: true,
      preventDuplicates: true,
      closeButton: true,
      progressBar: true,
      disableTimeOut: true,
    }),
    RouterModule,
    // StripeModule.forRoot('pk_test_51MYW00L4FZm4LCWY9I7ZGZWKErGc3sh3NNOxNxPb69FQ1VtPfCKgRBB7LgVbzLE8jKPAqcUxeVbCEL9FwW14VppJ002IEnoyms'),
    // NgxStripeModule.forRoot('pk_test_51MYW00L4FZm4LCWY9I7ZGZWKErGc3sh3NNOxNxPb69FQ1VtPfCKgRBB7LgVbzLE8jKPAqcUxeVbCEL9FwW14VppJ002IEnoyms'),
    NgxPayPalModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
