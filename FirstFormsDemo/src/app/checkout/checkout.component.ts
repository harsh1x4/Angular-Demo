import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutForm: FormGroup;
  constructor(private formBuilder:FormBuilder) { 
    // this.checkoutForm = formBuilder.group({
    //   emailAddr: new FormControl(),
    //   quantity: new FormControl(),
    //   terms: new FormControl()
    // });
    this.checkoutForm = formBuilder.group({
      emailAddr: ['',Validators.required],
      quantity: ['',Validators.required],
      terms: ['',Validators.requiredTrue]
    });
  }

  ngOnInit(): void {
  }

  postData(){
    console.log(this.checkoutForm);
  }

}
