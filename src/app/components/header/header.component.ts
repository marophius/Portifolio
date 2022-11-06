import { animate, state, style, transition, trigger } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('hoverstate', [
      state('default', style({
        color: '#180F4A'
      })),
      state('hover', style({
        color: '#FF2978'
      })),
      transition('default <=> hover', animate('1s 500ms ease-in'))
    ])
  ]
})
export class HeaderComponent implements OnInit {
  public titleEvent: string = 'default';

  constructor(
    @Inject(DOCUMENT) private dom: Document
  ) { }

  ngOnInit(): void {
  }

  onMouseOver() {
    this.titleEvent = 'hover';
    setTimeout((changeTitle) => {
      this.titleEvent = 'default';
    }, 3000)
  }

  toggle() {
    const theme = this.dom.body.classList.toggle('dark-theme');
  }

}
