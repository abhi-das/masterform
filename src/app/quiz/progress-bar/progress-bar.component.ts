import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  inputs: ['count', 'totalCount']
})
export class ProgressBarComponent implements OnInit {

  @Input() count;
  @Input() totalCount;

  constructor() { }

  ngOnInit() {
  }

}
