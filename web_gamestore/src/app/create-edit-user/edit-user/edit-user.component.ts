import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  constructor(private service:SharedService) { }
  User:any = null;
  imageUrl:any;
  checkLogin:any;
  TenNhomChucNang:any;

  NickName:string="";
  UserName_ND:string="";
  Password_ND:string="";
  TenNguoiDung:string="";
  NgaySinh:string="";
  GioiTinh:boolean=true;
  Email:string="";
  SDT:string="";
  DiaChi:string="";
  AnhDaiDien:string="";
  UserName_Tao:string="";
  NgayTao:string="";
  UserName_CapNhat:string="";
  NgayCapNhat="";
  ID_NhomChucNang:string="";
  listNhomChucNang:any=[];

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
      this.service.getIDNameNhomChucNang(this.User[0].ID_NhomChucNang).subscribe(data1=>{
        this.TenNhomChucNang=data1;
      }
      )
      this.loadListNhomNguoiDung();
    })
  }

  loadListNhomNguoiDung(){
    this.service.getAllNameNhomChucNang().subscribe((data:any)=>{
      this.listNhomChucNang=data;

      this.NickName=this.User[0].NickName;
      this.UserName_ND=this.User[0].UserName_ND;
      this.Password_ND=this.User[0].Password_ND;
      this.TenNguoiDung=this.User[0].TenNguoiDung;
      this.NgaySinh=this.User[0].NgaySinh;
      this.GioiTinh=this.User[0].GioiTinh;
      this.Email=this.User[0].Email;
      this.SDT=this.User[0].SDT;
      this.DiaChi=this.User[0].DiaChi;
      this.UserName_CapNhat=this.User[0].UserName_CapNhat;
      this.NgayCapNhat=this.User[0].NgayCapNhat;
      this.UserName_Tao=this.User[0].UserName_Tao;
      this.NgayTao=this.User[0].NgayTao;
      this.ID_NhomChucNang=this.User[0].ID_NhomChucNang;

      this.AnhDaiDien = this.User[0].AnhDaiDien;
      this.imageUrl=this.service.ImagesUrl + "/";
    })
  }

  saveUserClick(){
    var val =  {NickName:this.NickName,UserName_ND:this.UserName_ND,Password_ND:this.Password_ND,
                TenNguoiDung:this.TenNguoiDung,GioiTinh:this.GioiTinh,NgaySinh:this.NgaySinh,
                Email:this.Email, DiaChi:this.DiaChi, SDT:this.SDT,AnhDaiDien:this.AnhDaiDien, 
                UserName_Tao:this.UserName_Tao,NgayTao:this.NgayTao,UserName_CapNhat:this.UserName_CapNhat,
                NgayCapNhat:this.NgayCapNhat,ID_NhomChucNang:this.ID_NhomChucNang};
    alert("Lưu lại những thay đổi ?");
  }
}
