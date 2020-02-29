import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { IgxNavigationDrawerComponent } from 'igniteui-angular';
import { AuthService } from '../services/auth.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.sass']
})
export class NavDrawerComponent {

  constructor(public auth: AuthService) {}
  public navItems = [
    { name: 'account_circle', text: 'Profile' },
    { name: 'all_out', text: 'Import' },
    { name: 'web', text: 'Inventory' },
    { name: 'payment', text: 'Stripe' },
  ];
  public selected = 'Profile';

  @ViewChild(IgxNavigationDrawerComponent, { static: true })
  public drawer: IgxNavigationDrawerComponent;

  public drawerState = {
    miniTemplate: false,
    open: true,
    pin: true
  };

  /** Select item and close drawer if not pinned */
  public navigate(item) {
    this.selected = item.text;
    if (!this.drawer.pin) {
      this.drawer.close();
    }
  }
}
