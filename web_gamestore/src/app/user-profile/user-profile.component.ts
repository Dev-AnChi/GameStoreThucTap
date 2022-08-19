import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private service:SharedService) { }
  User:any = null;
  imageUrl:any;
  checkLogin:any;
  TenNhomChucNang:any;

  ngOnInit(): void {
    this.checkLogin=this.service.checkLogin;
    if(this.checkLogin){
      this.refreshUser();
      this.imageUrl=this.service.ImagesUrl + "/";
    }
  }

  refreshUser(){
    this.service.detailNguoiDung(this.service.username,this.service.password).subscribe(data=>{
      this.User=data;
      if(this.User[0].ID_NguoiDung == 'error'){
        this.service.checkLogin = false;
        this.checkLogin = this.service.checkLogin;
      }
      this.service.getNameIDNhomChucNang(this.User[0].ID_NhomChucNang).subscribe(data1=>{
        this.TenNhomChucNang=data1;
      }
      )
    })
  }
}
