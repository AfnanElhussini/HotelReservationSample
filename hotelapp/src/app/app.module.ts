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
import { AvailableSchedulesComponent } from './Components/schedule/available-schedules/available-schedules.component';
import { NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { SchedulesPopupComponent } from './Components/schedule/schedules-popup/schedules-popup.component';
@NgModule({
  declarations: [AppComponent, AvailableSchedulesComponent,SchedulesPopupComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountModule,
    ResourceModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    NgbDatepicker,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
