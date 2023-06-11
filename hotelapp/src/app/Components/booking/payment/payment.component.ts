import { Component, ElementRef, ViewChild } from '@angular/core';
import { StripeElements, StripeCardElement } from '@stripe/stripe-js';
import { PaymentService } from 'src/app/Services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  @ViewChild('cardElement') cardElement!: ElementRef;
  
  constructor(private paymentService: PaymentService) {}

  ngOnInit() {
    this.paymentService.getStripe().then(stripe => {
      const elements: StripeElements = stripe.elements();
      const card: StripeCardElement = elements.create('card');
      card.mount(this.cardElement.nativeElement);
    });
  }

  submitPaymentForm() {
    this.paymentService.getStripe().then(stripe => {
      stripe.createPaymentMethod({
        type: 'card',
        card: this.cardElement.nativeElement
      }).then((result :any) => {
        alert( result)
      }).catch( (error : any)=> {
        alert(error)
      });
    });
  }
}
