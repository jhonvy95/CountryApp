import {Component, input, output} from '@angular/core';

@Component({
  selector: 'country-search-input-component',
  imports: [],
  templateUrl: './search-input-component.html',
})
export class SearchInputComponent {
  value = output<string>()
  placeholder = input<string>('Buscar')
}
