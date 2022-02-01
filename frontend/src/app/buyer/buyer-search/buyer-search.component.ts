import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { User } from '../../models/user';
import { BuyerSearchDataSource, BuyerSearchItem } from './buyer-search-datasource';

@Component({
  selector: 'app-buyer-search',
  templateUrl: './buyer-search.component.html',
  styleUrls: ['./buyer-search.component.css']
})
export class BuyerSearchComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<BuyerSearchItem>;
  dataSource: BuyerSearchDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor() {
    this.dataSource = new BuyerSearchDataSource();
  }

  user = JSON.parse(sessionStorage.getItem('user'));
  firstname = this.user.firstname;
  imagePath = this.user.image;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
