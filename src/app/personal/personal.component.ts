import { DetailsService } from './../details.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  countries: {id: number, name:string}[] =[];
  states: string[]=[];

  i: number=0;
   
  personal: FormGroup;

  get detail()
  {
    return this.personal.controls;
  }

  constructor(private personaldetail: DetailsService) { }

  ngOnInit(): void {
    this.countries = this.personaldetail.onGetCountries();
    this.personal = new FormGroup({
      'fname': new FormControl(null),
      'lname': new FormControl(null),
      'pnumber': new FormControl(null),
      'address': new FormControl (null),
      'country': new FormControl (null),
      'state': new FormControl (null)
    })
  }

  onSelect(country: any)
  {
    let con = country.target.value; 
    this.states=this.personaldetail.onGetStates(con);
  }

  onAdded()
  {
    console.log(this.personal.value)
  }
}
