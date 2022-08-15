import { Component, OnInit, Input} from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-detail-game',
  templateUrl: './detail-game.component.html',
  styleUrls: ['./detail-game.component.scss']
})
export class DetailGameComponent implements OnInit {

  constructor(private service:SharedService) { } 

  idGameDetails:any;
  dataGame:any;
  dataImg:any;
  dataTheLoai:any;

  img1:string="";
  img2:string="";
  img3:string="";

  ngOnInit(): void {
    this.dataGame=this.service.getDataGame();
    this.idGameDetails=this.service.getIDGameDetails();

    this.service.getNameTheLoaiChiTietGame(this.idGameDetails).subscribe(data=>{
      this.dataTheLoai = data;
    })

    this.service.getHinhAnhIDGame(this.idGameDetails).subscribe(data=>{
      this.dataImg = data;
      this.img1=this.service.ImagesUrl + "/" + this.dataImg[0].AnhMH;
      this.img2=this.service.ImagesUrl + "/" + this.dataImg[1].AnhMH;
      this.img3=this.service.ImagesUrl + "/" + this.dataImg[2].AnhMH;
    })
    
  }

  counter(i: number) {
    return new Array(i);
  }

}
