import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {

  startmodel: NgbDateStruct;
  endmodel:NgbDateStruct;

  
  professional: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.professional = new FormGroup({
      'cmpny':new FormControl(null),
      'desgn':new FormControl(null),
      'srtDate':new FormControl(null),
      'endDate':new FormControl(null),
      'skls':new FormControl(null),
    })
  }

  onAdded(){
    console.log(this.professional.value);
    
  }

}
