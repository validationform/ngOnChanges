import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() public data: string = '';

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    console.log('Data property is changes by parent=>', this.data);
  }
}
