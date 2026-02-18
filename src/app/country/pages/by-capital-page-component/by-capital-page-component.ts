import { Component } from '@angular/core';
import {SearchInputComponent} from '../../components/search-input-component/search-input-component';
import {CountryListComponent} from '../../components/country-list-component/country-list-component';

@Component({
  selector: 'app-by-capital-page-component',
  imports: [
    SearchInputComponent,
    CountryListComponent
  ],
  templateUrl: './by-capital-page-component.html',
  styles: ``,
})
export class ByCapitalPageComponent {
   onSearch(searchTerm: string) {
      console.log('Searching for:', searchTerm);
   }
}
