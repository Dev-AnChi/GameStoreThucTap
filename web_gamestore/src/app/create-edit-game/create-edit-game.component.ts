import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-create-edit-game',
  templateUrl: './create-edit-game.component.html',
  styleUrls: ['./create-edit-game.component.scss']
})
export class CreateEditGameComponent implements OnInit {

  constructor(private service:SharedService) { }
  animation:string="card p-3";
  Gamelist:any=[];
  imageUrl:any;

  ngOnInit(): void {
    this.refreshGameList();
    this.imageUrl=this.service.ImagesUrl + "/";
  }
  refreshGameList(){
    this.service.getGamelist().subscribe(data=>{
      this.Gamelist=data;
    })

  }

  detailClick(item:any){
    this.service.setDataGame(item);
    this.service.setIDGameDetails(item.ID_Game);
  }
  
  counter(i: number) {
    return new Array(i);
  }

  deleteClick(){
    alert("Bạn có chắc chắn muốn xóa không ?");
  }
}
