import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';


export interface PeriodicElement {
  name: string;
  position: number;
  hours: number;
  role: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', hours: 1.0079, role: 'H' },
  { position: 2, name: 'Helium', hours: 4.0026, role: 'He' },
  { position: 3, name: 'Lithium', hours: 6.941, role: 'Li' },
  { position: 4, name: 'Beryllium', hours: 9.0122, role: 'Be' },
  { position: 5, name: 'Boron', hours: 10.811, role: 'B' },
  { position: 6, name: 'Carbon', hours: 12.0107, role: 'C' },
  { position: 7, name: 'Nitrogen', hours: 14.0067, role: 'N' },
  { position: 8, name: 'Oxygen', hours: 15.9994, role: 'O' },
  { position: 9, name: 'Fluorine', hours: 18.9984, role: 'F' },
  { position: 10, name: 'Neon', hours: 20.1797, role: 'Ne' },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'hours', 'role'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}

