import { Component, OnInit, trigger, transition, style, animate } from '@angular/core';
import { LayoutService } from '../layout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  host: {
    '(window:scroll)': 'onScroll($event)'
  },
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('hhTrigger', [
      transition(":leave", [
        style({ transform: "translateY(0)", }),
        animate('400ms', style({ transform: "translateY(-100%)" }))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {

  isScrolled = false;
  currPos: Number = 0;
  changePos: Number = 140;

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
  }

  onScroll(evt) {
    this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
    if (this.currPos >= this.changePos) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  scroll(name) {
    this.layoutService.newEvent(name);
  }

}
