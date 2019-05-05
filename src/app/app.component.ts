import { Component } from '@angular/core';
import { ColorsService } from './services/colors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private _colorService: ColorsService
  ) {}   

  ngOnInit() {   
      
  }

  pickRandColor() {
    let randColorArr = this._colorService.pickRandomColor();
    sessionStorage.setItem('randColorArr', JSON.stringify(randColorArr));
  }

  debugger
  saveColor(index) {
    let randColorArr = this._colorService.getRandColorArr()[index];
    sessionStorage.setItem('randColorArr', JSON.stringify(randColorArr));
  }
}
