import { Component, OnInit, DoCheck } from '@angular/core';
import { ColorsService } from '../../services/colors.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements DoCheck {
  randomColors: Array<string>;

  constructor(
    private _colorsService: ColorsService
  ) { }

  ngDoCheck() {
    this.randomColors = JSON.parse(sessionStorage.getItem('randColorArr'));
  }

}
