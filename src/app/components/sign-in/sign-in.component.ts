import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FBLinkService } from 'src/app/services/fblink.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  @Output() signInSuccess: EventEmitter<any> = new EventEmitter();

  signInForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: FBLinkService, private router: Router) {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.signInForm.valid) {
      const { email, password } = this.signInForm.value;

      this.authService.signIn(email, password).subscribe(
        (response) => {
          console.log('Sign-in successful:', response);
          this.authService.setUserId(response.id);
          this.router.navigate(['/HomePage']);
          
          
        },
        (error) => {
          console.error('Sign-in failed:', error);
        }
      );
    }
  }
}
