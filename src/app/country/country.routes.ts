import { Routes } from '@angular/router';
import {ByCapitalPageComponent} from './pages/by-capital-page-component/by-capital-page-component';
import {CountryLayoutComponent} from './layouts/country-layout-component/country-layout-component';

export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayoutComponent,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPageComponent
      },
      {
        path: '**',
        redirectTo: 'by-capital'
      }
    ]
  },
];

export default countryRoutes;
