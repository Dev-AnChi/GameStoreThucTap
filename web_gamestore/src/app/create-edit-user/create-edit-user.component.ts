import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-edit-user',
  templateUrl: './create-edit-user.component.html',
  styleUrls: ['./create-edit-user.component.scss']
})
export class CreateEditUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  counter(i: number) {
    return new Array(i);
  }

  deleteClick(){
    alert("Bạn có chắc chắn muốn xóa không ?");
  }
}
