import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ResourceModule } from './Components/resource/resource.module';
import { AccountModule } from './account/account.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RetryInterceptor } from './shared/interceptors/retry.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

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
    }),
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
