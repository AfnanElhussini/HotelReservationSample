import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StylingService {

  BlueSubject: Subject<boolean> = new Subject<boolean>();
  BlurStatusChange(status: boolean) {
    this.BlueSubject.next(status);
  }
}
