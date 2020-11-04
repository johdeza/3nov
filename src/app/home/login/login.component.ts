import { AuthService } from './../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }


  login() {
    this.authService.login(this.loginForm.value).subscribe(res => {
      alert(JSON.stringify(res));
      localStorage.setItem('token', res['token']);
      localStorage.setItem('id', res['user']['id']);
      localStorage.setItem('email', res['user']['email']);
      this.router.navigateByUrl('/panelnutriologo');
    }, (error) => {
      alert(JSON.stringify(error.error));
    })
  }
}