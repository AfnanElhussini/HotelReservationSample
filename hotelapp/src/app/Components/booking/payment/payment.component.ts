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

  // ngOnInit() {
  //   this.paymentService.getStripe().then(stripe => {
  //     const elements: StripeElements = stripe.elements();
  //     const card: StripeCardElement = elements.create('card');
  //     card.mount(this.cardElement.nativeElement);
  //   });
  // }

  ngOnInit() {
    this.paymentService.getStripe().then(stripe => {
      const elements: StripeElements = stripe.elements();

      // Customize the card element appearance
      const cardStyle = {
        base: {
          padding: '10px 12px',
          boxShadow: '0px 0px 5px 0px rgba(50, 50, 50, 0.75)',
          border : '1px solid red',
          color: '#32325d',
          fontFamily: 'Arial, sans-serif',
          fontSize: '16px',
          '::placeholder': {
            color: '#aab7c4'
          }
        },
        invalid: {
          color: '#fa755a',
          iconColor: '#fa755a'
        }
      };

      const card: StripeCardElement = elements.create('card', { style: cardStyle });
      card.mount(this.cardElement.nativeElement);
    });
  }

  submitPaymentForm() {
    this.paymentService.getStripe().then(stripe => {
      stripe.createPaymentMethod({
        type: 'card',
        card: this.cardElement.nativeElement
      }).then((result :any) => {
        alert('DONE')
        alert( result)
      }).catch( (error : any)=> {
        alert(error)
      });
    });
  }
}