import {
  Component, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
  OnDestroy, OnChanges, DoCheck, SimpleChanges, Input
} from '@angular/core';

let logIndex: number = 1;
@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,
  AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  @Input()
  name: string;

  @Input()
  greeting: string;
  @Input()
  user: {name: string};
  message: string = "初始化消息";

  constructor() {
    this.logIt("name属性在constructor里的值是:" + name);
  }

  logIt(msg: string) {
    console.log(`#${logIndex++} ${msg}`)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes,null,2));
    let name = changes['name'].currentValue;
    this.logIt("name属性在ngOnChanges里的值是:" + name);
  }

  ngOnInit() {
    this.logIt("ngOnInit");
  }

  ngDoCheck(): void {
    this.logIt("ngDoCheck");
  }

  ngAfterContentInit(): void {
    this.logIt("ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    this.logIt("ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    this.logIt("ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    this.logIt("ngAfterViewChecked");
  }

  ngOnDestroy(): void {
    this.logIt("ngOnDestroy");
  }

}
