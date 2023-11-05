import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.scss']
})
export class SideNavBarComponent {
  isToggled = true;

  toggleMenu() {
    this.isToggled = !this.isToggled;
  }
}
