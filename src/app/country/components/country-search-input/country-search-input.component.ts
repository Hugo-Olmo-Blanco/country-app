import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { ByCapitalPageComponent } from '../../pages/by-capital-page/by-capital-page.component';

@Component({
  selector: 'app-country-search-input',
  imports: [],
  templateUrl: './country-search-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountrySearchInputComponent { 
  placeholder= input('Buscar');
 value = output<string>()
 
 
  }

  

