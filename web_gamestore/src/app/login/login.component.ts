import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private service:SharedService) { }

  username:string="";
  password:string="";

  ngOnInit(): void {
    this.service.username=this.username;
    this.service.password=this.password; 
  }

  clickLogin(){
    this.service.username=this.username;
    this.service.password=this.password;
    if(this.username==""){
      this.service.username="error";
    }
    if(this.password==""){
      this.service.password="error";
    }
    this.service.checkLogin = true;
  }
}
