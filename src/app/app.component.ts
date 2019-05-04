import { Component } from '@angular/core';
import { ColorsService } from './services/colors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colorsData: Array<object>;
  displayArr: Array<object>;
  totalPageNumbers: number;
  pageArr = [];

  constructor(
    private _colorsService: ColorsService
  ) {}   

  ngOnInit() {
   
    this.colorsData = this._colorsService.getColors();
    this.totalPageNumbers = Math.ceil(this.colorsData.length / 12);
    for (let i = 1; i < this.totalPageNumbers + 1; i++) {

      this.pageArr.push(i);
    }
    debugger
    this.changePage(1);

    
  }

  changePage(number) {
    this.displayArr = [];
    let end = number * 12;
    let start = end - 12;
    for(let i = start; i < end; i++) {
      if(!this.colorsData[i]) break;
      this.displayArr.push(this.colorsData[i]);
    }
  }
}
