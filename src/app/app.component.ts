import { Component } from '@angular/core';
import { ColorsService } from './services/colors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colorsData: Array<string>;
  constructor(
    private _colorsService: ColorsService
  ) {}   

  ngOnInit() {
    this.colorsData = this._colorsService.getColors();
  }
}
