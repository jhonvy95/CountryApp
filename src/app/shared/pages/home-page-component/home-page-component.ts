import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {FooterComponent} from '../../components/footer-component/footer-component';

@Component({
  selector: 'app-home-page-component',
  imports: [
    RouterLink,
  ],
  templateUrl: './home-page-component.html',
  styles: ``,
})
export class HomePageComponent {

}
