import { Component, OnInit, HostListener } from '@angular/core';
import { environment } from '../../../environments/environment';
import { StripeService } from 'app/main/apps/services/stripe/stripe.service';

declare var StripeCheckout:any;
@Component({
  selector: 'app-stripe-pay',
  templateUrl: './stripe-pay.component.html',
  styleUrls: ['./stripe-pay.component.sass']
})
export class StripePayComponent implements OnInit {
  handler: any;
  amount: number = 500; // == $5.00

  constructor (private stripeService: StripeService) {
  }

  ngOnInit() {
    this.handler = StripeCheckout.configure({
      key: environment.stripeKey,
      image: '',
      locale: 'auto',
      token: token => {
        this.stripeService.processPayment(token, this.amount)
      }
    })
  }

  handlePayment() {
    this.handler.open({
      name: 'FireStarter',
      description: 'Deposit Funds to Account',
      amount: this.amount
    });
  }

  @HostListener('window:popstate')
    onPopstate() {
      this.handler.close();
    }
}
