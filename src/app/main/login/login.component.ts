import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: any;
  formValue: any;
  loginData: any;
  userName!: string;
  password!: string;
  user: string = '';
  currentUrl: string = '';
  showHeaderFooter = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      userName: new FormControl(''),
      password: new FormControl('')
    });
  }

  onLogin() {
    this.loginData = this.loginForm.value;
    this.userName = this.loginData.userName;
    sessionStorage.setItem('userName', this.userName);
    this.password = this.loginData.password;
    console.log(this.loginData);
    if (this.userName == 'admin' && this.password == 'admin') {
      this.router.navigate(['/home']);
      this.user = 'admin';
    }
    else {
      alert('Incorrect Username or Password');
      this.loginForm.reset();
    }
  }

}
