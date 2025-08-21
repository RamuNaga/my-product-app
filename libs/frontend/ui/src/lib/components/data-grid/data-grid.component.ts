import { Component, Input, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'lib-data-grid',
  imports: [CommonModule, MatTableModule, MatSortModule, ScrollingModule],
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss'],
})
export class DataGridComponent implements AfterViewInit {
  @Input() displayedColumns: string[] = [];
  @Input() set dataSourceData(value: any[]) {
    this.dataSource.data = value;
  }

  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Apply filter from parent */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
