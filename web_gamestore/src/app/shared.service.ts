import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GameComponent } from './game/game.component';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl="https://localhost:44325/api";
  readonly ImagesUrl = "https://localhost:44325/Images";

  constructor(private http:HttpClient) { }

  //game
  getGamelist():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Game');
  }
  addGame(val:any){
    return this.http.post(this.APIUrl+'/Game',val);
  }
  deleteGame(val:any){
    return this.http.delete(this.APIUrl+'/Game/'+val);
  }
  editGame(val:any){
    return this.http.put(this.APIUrl + '/Game',val);
  }
  detailGame(val:any){
    return this.http.get(this.APIUrl + '/Game/'+val);
  }
  UploadImagesGame(val:any){
    return this.http.post(this.APIUrl+'api/Game/SaveFile', val);
  }

  
//the loai  
  getTheLoailist():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/TheLoai');
  }
  addTheLoai(val:any){
    return this.http.post(this.APIUrl+'/TheLoai',val);
  }
  deleteTheLoai(val:any){
    return this.http.delete(this.APIUrl+'/TheLoai/'+val);
  }
  editTheLoai(val:any){
    return this.http.put(this.APIUrl + '/TheLoai',val);
  }


  //Hinh Anh
  getHinhAnhlist():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/HinhAnh');
  }
  getHinhAnhIDGame(val:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/HinhAnh/'+val);
  }
  addHinhAnh(val:any){
    return this.http.post(this.APIUrl+'/HinhAnh',val);
  }
  deleteHinhAnh(val:any){
    return this.http.delete(this.APIUrl+'/HinhAnh/'+val);
  }
  editHinhAnh(val:any){
    return this.http.put(this.APIUrl + '/HinhAnh',val);
  }
  UploadImages(val:any){
    return this.http.post(this.APIUrl+'/HinhAnh/SaveFile', val);
  }





  //lấy dữ liệu xem chi tiết game
  dataGame:any;
  setDataGame(item:any){
    this.dataGame=item;
  }
  getDataGame(){
    return this.dataGame;
  }
  //lấy dữ liệu ảnh xem chi tiết
  idGameDetails:any;
  setIDGameDetails(item:any){
    this.idGameDetails=item;
  }
  getIDGameDetails(){
    return this.idGameDetails;
  }  

  //Chi tiết game
  getChiTietGamelist():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/ChiTietGame');
  }
  addChiTietGame(val:any){
    return this.http.post(this.APIUrl+'/ChiTietGame',val);
  }
  deleteChiTietGame(val:any){
    return this.http.delete(this.APIUrl+'/ChiTietGame/'+val);
  }
  editChiTietGame(val:any){
    return this.http.put(this.APIUrl + '/ChiTietGame',val);
  }
  //Lấy tên thể loại theo ID game
  getNameTheLoaiChiTietGame(val:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/ChiTietGame/'+val);
  }
  

  //Người dùng
  checkLogin:boolean=false;
  username:any;
  password:any; 
  getNguoiDung():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/NguoiDung');
  }
  addNguoiDung(val:any){
    return this.http.post(this.APIUrl+'/NguoiDung',val);
  }
  deleteNguoiDung(val:any){
    return this.http.delete(this.APIUrl+'/NguoiDung/'+val);
  }
  editNguoiDung(val:any){
    return this.http.put(this.APIUrl + '/NguoiDung',val);
  }
  detailNguoiDung(username:any, password:any){
    return this.http.get(this.APIUrl + '/NguoiDung/Login/' + username + '/' + password);
  }
  //Lấy tên thể loại theo ID game
  getIDNameNhomChucNang(val:any){
    return this.http.get(this.APIUrl+'/NguoiDung/GetIDNameNhomChucNang/'+val);
  }
  getAllNameNhomChucNang():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/NguoiDung/GetAllNameNhomChucNang/');
  }
  UploadImagesNguoiDung(val:any){
    return this.http.post(this.APIUrl+'/NguoiDung/SaveFile', val);
  }
}
