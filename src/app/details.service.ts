import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  countries: {id: number, name:string}[] = [{id:1,name:'India'},{id:2,name:'America'}];
  statesIndia: string[] = ['Andhra Pradesh', 'Assam', 'Arunachal Pradesh', 'Bihar', 'Goa', 'Gujarat', 'Jammu and Kashmir', 'Jharkhand', 'West Bengal', 'Karnataka', 'Kerala', 'Tamil Nadu', 'Maharashtra']
  statesAmerica: string[] = ['Alabama', 'Alaska', 'California', 'Delaware','Georgia','Idaho', 'Indiana','Louisiana', 'Maryland']

  constructor() { }

  onGetStates(country: any)
  {
    if (country === 'India')
    {
      return this.statesIndia;
    }
    else 
    {
      return this.statesAmerica;
    }

  }

  onGetCountries()
  {
    return this.countries
  }

}
