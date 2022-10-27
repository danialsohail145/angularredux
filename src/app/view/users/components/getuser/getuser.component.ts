import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AdduserComponent } from '../adduser/adduser.component';

export interface PeriodicElement {
  name: string;
  age: number;
  contact: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Jhon', age: 25, contact: '+925888888888' },
  { name: 'Mickey', age: 26, contact: '+9215888444' },
  { name: 'Lina', age: 24, contact: '+915588488888' },
];

@Component({
  selector: 'app-getuser',
  templateUrl: './getuser.component.html',
  styleUrls: ['./getuser.component.scss'],
})
export class GetuserComponent implements OnInit {
  displayedColumns: string[] = ['name', 'age', 'contact'];
  dataSource = [...ELEMENT_DATA];
  @ViewChild(MatTable) table?: MatTable<PeriodicElement>;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  addData() {
    const dialogRef = this.dialog.open(AdduserComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  removeData() {
    this.dataSource.pop();
    this.table?.renderRows();
  }
}
