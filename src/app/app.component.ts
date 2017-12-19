import {Component} from '@angular/core';
import {FormControl} from "@angular/forms";
import 'rxjs/Rx'
declare let $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  searchInput: FormControl = new FormControl();

  constructor() {
    this.searchInput.valueChanges
      .debounceTime(500)
      .subscribe(stockCode => this.getStockInfo(stockCode));
  }

  test() {
    $('xxx').show();
  }

  getStockInfo(value: string) {
    console.log(value);
  }
}
