import { Component, OnInit ,Input } from '@angular/core';
import { Lieu } from './lieu';

@Component({
  selector: 'app-lieu-component',
  templateUrl: './lieu-component.component.html',
  styleUrls: ['./lieu-component.component.scss']
})
export class LieuComponentComponent implements OnInit {
  @Input() idLieu : string | undefined ;
  isLike : boolean = false ;
  isHoverOnLieu :boolean =false ;


  constructor() { }

  ngOnInit(): void {
  }

  onClickLieu (): void {
    console.log("user click on : [ "+"this.idLieu"+" ]  ");
  }

  setLikeBtn() : void{
    this.isLike =!this.isLike ;
    console.log("user set Like of : [ "+this.idLieu+" ] to "+this.isLike);
  }
  
  setIsHoverOnLieu(val :boolean):void{
    this.isHoverOnLieu = val;
  }

  onClickClose() :void{
    console.log("user close: [ "+this.idLieu+" ]  ");
  }

  onMouseHover():void {
    //console.log("user hover on : [ "+this.idLieu+" ] ");
    this.setIsHoverOnLieu(true);
  }

  onMouseOut():void {
    //console.log("user onMouseOut on : [ "+this.idLieu+" ] ");
    this.setIsHoverOnLieu(false);
  }

  timeHoverOnLieu(): void{

  }
 

}
