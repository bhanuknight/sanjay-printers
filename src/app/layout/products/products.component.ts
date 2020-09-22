import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private activateRouter: ActivatedRoute, private dataService: LayoutService, private router: Router) { }

  title: string;
  range: string;
  productList = [];
  backupList = [];
  info: string;

  searchValue: string;

  ngOnInit() {
    this.title = this.activateRouter.snapshot.params['type'];
    this.range = this.activateRouter.snapshot.queryParams['range'];
    if(this.title === "diaries") {
      this.dataService.getDiaries(this.range).subscribe(data => {
        console.log(data);
        this.info = data['about'];
        this.productList = data['data'];
        this.backupList = this.productList;
      });
    } else {
      this.dataService.getNotebooks(this.range).subscribe(data => {
        console.log(data);
        this.info = data['about'];
        this.productList = data['data'];
        this.backupList = this.productList;
      });
    }
  }

  goTodetails(element) {
    localStorage.setItem('products', JSON.stringify(element));
    this.router.navigate(['/products/details']);
  }

  applySearch() {
    this.productList = this.backupList;
    console.log('search clicked');
    if(this.searchValue) {
      this.backupList = this.productList;
      this.productList = this.productList.filter(el => el.code.search(this.searchValue) !== -1);
      console.log(this.productList);
    } else {
      return;
    }
  }

}
