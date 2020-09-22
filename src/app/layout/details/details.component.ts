import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  data;
  currentImg: string;
  currentIndex: number = 0;

  constructor() { }

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('products'));
    console.log(this.data);
    this.currentImg = this.data.imgArr[0];
  }

  goBack() {
    window.history.back();
  }

}
