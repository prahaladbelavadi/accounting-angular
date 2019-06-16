import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-workforce-attendance',
  templateUrl: './workforce-attendance.component.html',
  styleUrls: ['./workforce-attendance.component.css']
})

export class WorkforceAttendanceComponent implements OnInit {
  date = Date.now()

  displayedColumns: string[] = ['select', 'name', 'role'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  constructor() { }

  ngOnInit() {
  }

}

export interface PeriodicElement {
  name: string;
  role: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Hydrogen', role: 'H' },
  { name: 'Helium', role: 'He' },
  { name: 'Lithium', role: 'Li' },
  { name: 'Beryllium', role: 'Be' },
  { name: 'Boron', role: 'B' },
  { name: 'Carbon', role: 'C' },
  { name: 'Nitrogen', role: 'N' },
  { name: 'Oxygen', role: 'O' },
  { name: 'Fluorine', role: 'F' },
  { name: 'Neon', role: 'Ne' },
  { name: 'Hydrogen', role: 'H' },
  { name: 'Helium', role: 'He' },
  { name: 'Lithium', role: 'Li' },
  { name: 'Beryllium', role: 'Be' },
  { name: 'Boron', role: 'B' },
  { name: 'Carbon', role: 'C' },
  { name: 'Nitrogen', role: 'N' },
  { name: 'Oxygen', role: 'O' },
  { name: 'Fluorine', role: 'F' },
  { name: 'Neon', role: 'Ne' },
  { name: 'Hydrogen', role: 'H' },
  { name: 'Helium', role: 'He' },
  { name: 'Lithium', role: 'Li' },
  { name: 'Beryllium', role: 'Be' },
  { name: 'Boron', role: 'B' },
  { name: 'Carbon', role: 'C' },
  { name: 'Nitrogen', role: 'N' },
  { name: 'Oxygen', role: 'O' },
  { name: 'Fluorine', role: 'F' },
  { name: 'Neon', role: 'Ne' },
];
