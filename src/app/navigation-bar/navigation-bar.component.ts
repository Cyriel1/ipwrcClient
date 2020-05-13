import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})

export class NavigationBarComponent implements OnInit {
  isLoginMode = true;


  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  showLoginScreen(event: any){
    document.getElementById('login-screen').classList.toggle('show-login-screen');
    event.stopPropagation();
  }

  submitCredentials(form: NgForm){
    if(!form.valid){
      return;
    }
    const username = form.value.username;
    const password = form.value.password;
    this.authService.login(username, password).subscribe(
      postData => {
        this.tokenSuccess(postData);
      },
      error => {
        console.log(error);
      }
    );
    form.reset();
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any){
    this.removeLoginScreen(event);
  }

  removeLoginScreen(event: any){
    if(!document.getElementById('login-screen').contains(event.target)){
      document.getElementById('login-screen').classList.remove('show-login-screen');
    }
  }
  

  tokenSuccess(response: string[]) {
    let encryptedToken = response[0];
    let csrfToken = response[1];
    sessionStorage.setItem('csrf-token', csrfToken);
    document.cookie = "token=" + encryptedToken;
  }

}
