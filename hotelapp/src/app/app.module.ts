import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RoomResourceModule } from './Components/room-resource/room-resource.module';
<<<<<<< HEAD
import { ResourceModule } from './Components/resource/resource.module'
import { AccountModule } from './account/account.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RetryInterceptor } from './shared/interceptors/retry.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

=======
import { ResourceModule } from './Components/resource/resource.module';
import { AccountModule } from './account/account.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
>>>>>>> 06a76fd73600708523c85748971a721a6d5a8b0f
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoomResourceModule,
    AccountModule,
    ResourceModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    MatButtonModule,
    MatIconModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: RetryInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
=======
    ToastrModule.forRoot({
      timeOut: 3000,
      tapToDismiss: true,
      preventDuplicates: true,
      closeButton: true,
      progressBar: true,
      
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
>>>>>>> 06a76fd73600708523c85748971a721a6d5a8b0f
})
export class AppModule {}
