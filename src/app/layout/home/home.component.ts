import { Component, OnInit, trigger, transition, style, animate } from '@angular/core';
import { LayoutService } from '../layout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  host: {
    '(window:scroll)': 'onScroll($event)'
  },
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slider: number = 0;
  isScrolled = false;
  currPos: number = 0;
  changePos: number = 140;

  upCount : number = 1;

  constructor(private layoutService: LayoutService, private router: Router) { }

  ngOnInit() {
    this.startSlide();
    this.layoutService.events$.forEach(event => this.scroll(event));
  }

  onScroll(evt) {
    this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
    if (this.currPos >= this.changePos) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  startSlide() {
    if(this.slider < 4) {
      this.slider++;
      setTimeout(() => {
        this.startSlide();
      }, 2000);
    } else {
      this.slider = 0;
      setTimeout(() => {
        this.startSlide();
      }, 2000);
    }
  }

  scroll(id) {
    if(this.router.url !== '') {
      this.router.navigate(['']);
    }
    setTimeout(() => {
      let el = document.getElementById(id);
      el.scrollIntoView({behavior:"smooth"});
    }, 200);  
  }

  slideUp() {
    if(this.upCount <= 4) {
      document.getElementById('panel').style.transform = "translateY(-"+100*this.upCount+"px)";
      this.upCount++;
    }
  }

  slideDown() {
    if(this.upCount > 1) {
      document.getElementById('panel').style.transform = "translateY(-"+(100*(this.upCount-1) - 100)+"px)";
      this.upCount--;
    }
  }
}
