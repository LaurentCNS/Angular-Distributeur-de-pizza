import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userPhone !: number; 
  userPassword = '';
  badLogin = false

  constructor(private router: Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
  }

    login(){
      if(this.userPhone == 1234 && this.userPassword == 'admin'){
        this.toastr.success('Bonjour Admin, content de vous revoir!')
        this.router.navigate(["/admin"]);
      }else{
        this.toastr.error('Mot de passe incorrect. Recommencer!')
        this.badLogin = true;
      }      
    }
}
