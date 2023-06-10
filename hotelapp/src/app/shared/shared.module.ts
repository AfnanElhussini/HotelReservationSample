import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RetryInterceptor } from './interceptors/retry.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: RetryInterceptor,
    multi: true
  }],
  exports: [ComponentsModule]
})
export class SharedModule { }
