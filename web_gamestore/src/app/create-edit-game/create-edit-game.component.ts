import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-create-edit-game',
  templateUrl: './create-edit-game.component.html',
  styleUrls: ['./create-edit-game.component.scss']
})
export class CreateEditGameComponent implements OnInit {

  constructor() { }
  animation:string="card p-3";
  ngOnInit(): void {
  }
  counter(i: number) {
    return new Array(i);
  }

  deleteClick(){
    alert("Bạn có chắc chắn muốn xóa không ?");
  }
}
