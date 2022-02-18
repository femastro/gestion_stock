import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IformForgotPassword } from '@app/interfaces/login.interface';

@Component({
  selector: 'app-forgot-apssword',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formForgotPassword = new FormGroup({
    email: new FormControl('', Validators.required)
  })

  onForgotPassword(data: IformForgotPassword){
    console.log('Email => ', data)
  }

}
