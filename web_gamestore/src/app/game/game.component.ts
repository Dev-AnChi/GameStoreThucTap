import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(private service:SharedService) { }

  Gamelist:any=[];
  animation:string="card p-3";
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
}
