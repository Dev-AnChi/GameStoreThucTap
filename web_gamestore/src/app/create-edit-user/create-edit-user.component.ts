import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-create-edit-user',
  templateUrl: './create-edit-user.component.html',
  styleUrls: ['./create-edit-user.component.scss']
})
export class CreateEditUserComponent implements OnInit {

  constructor(private service:SharedService) { }

  UserList:any;
  imageUrl:any;

  ngOnInit(): void {
    this.refreshUserList();
    this.imageUrl=this.service.ImagesUrl + "/";
  }

  refreshUserList(){
    this.service.getNguoiDung().subscribe(data=>{
      this.UserList = data;
    })  
  }

  detailNguoiDung(item:any){
    
  }

  counter(i: number) {
    return new Array(i);
  }

  deleteClick(){
    alert("Bạn có chắc chắn muốn xóa không ?");
  }
}
