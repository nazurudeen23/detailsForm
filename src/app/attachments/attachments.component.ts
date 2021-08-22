import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.css']
})
export class AttachmentsComponent implements OnInit {

  attachments:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.attachments = new FormGroup({
      'attach': new FormControl(null)
    }) 
  }

  onAdded(){
   console.log(this.attachments.value);

  }

}
