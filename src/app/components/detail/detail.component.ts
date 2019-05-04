import { Component, OnInit, DoCheck } from '@angular/core';
import { ColorsService } from '../../services/colors.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  randomColors: Array<string>;
  pickedColor: string;

  constructor(
    private _colorsService: ColorsService
  ) { }

  ngOnInit() {
    this.randomColors = JSON.parse(sessionStorage.getItem('randColorArr'));
    this.pickedColor = this.randomColors[0];
  }

  switchColor(color) {
    this.pickedColor = color;
  }

  // ngDoCheck() {
  //   this.randomColors = JSON.parse(sessionStorage.getItem('randColorArr'));
  //   this.pickedColor = this.randomColors[0];
  // } 

}
