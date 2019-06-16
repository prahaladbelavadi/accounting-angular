import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';


export interface PeriodicElement {
  name: string;
  position: number;
  hours: number;
  gender: string;
  pay: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', hours: 1.0079, gender: 'H', pay: 3231 },
  { position: 2, name: 'Helium', hours: 4.0026, gender: 'He', pay: 3231 },
  { position: 3, name: 'Lithium', hours: 6.941, gender: 'Li', pay: 3231 },
  { position: 4, name: 'Beryllium', hours: 9.0122, gender: 'Be', pay: 3231 },
  { position: 5, name: 'Boron', hours: 10.811, gender: 'B', pay: 3231 },
  { position: 6, name: 'Carbon', hours: 12.0107, gender: 'C', pay: 3231 },
  { position: 7, name: 'Nitrogen', hours: 14.0067, gender: 'N', pay: 3231 },
  { position: 8, name: 'Oxygen', hours: 15.9994, gender: 'O', pay: 3231 },
  { position: 9, name: 'Fluorine', hours: 18.9984, gender: 'F', pay: 3231 },
  { position: 10, name: 'Neon', hours: 20.1797, gender: 'Ne', pay: 3231 },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  // displayedColumns: string[] = ['position', 'name', 'hours', 'gender'];
  displayedColumns: string[] = ['position', 'name', 'hours', 'pay'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  getTotalPay(){
    return ELEMENT_DATA.map(t => t.pay).reduce((acc, value) => acc + value, 0);
  }
}

