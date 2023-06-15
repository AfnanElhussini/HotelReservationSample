import { Injectable } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private stripePromise: Promise<any>;

  constructor() {
    this.stripePromise = loadStripe(
      'pk_test_51NIcBcKmb56wipgeLuxFAY2h2NdKU5lp9KsOJTPu2qaTV1L6fE2DGtdGlk6AOxR2Ac9jcv2mBqRxY9l7xRFiqQAn00L8XnXkcE'
    );
  }

  getStripe(): Promise<any> {
    return this.stripePromise;
  }
}
