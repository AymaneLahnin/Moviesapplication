import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FBLinkService } from 'src/app/services/fblink.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm!: FormGroup;

  constructor(private fb: FormBuilder, private fbLinkService: FBLinkService,private router:Router) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.signUpForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      const signUpData = this.signUpForm.value;
      // Call your service to send data to the backend
      this.fbLinkService.signUp(signUpData).subscribe(response => {
        // Handle the response from the backend if needed
        console.log('User registration successful:', response);
        this.router.navigate(['/HomePage']);

      }, error => {
        // Handle any errors
        console.error('Error during user registration:', error);
      });
    } else {
      // Form is not valid, handle accordingly
    }
  }
}