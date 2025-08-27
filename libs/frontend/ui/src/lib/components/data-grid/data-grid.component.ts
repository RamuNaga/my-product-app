import {
  Component,
  Input,
  AfterViewInit,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'lib-data-grid',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    ScrollingModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss'],
})
export class DataGridComponent implements AfterViewInit {
  @Input() displayedColumns: string[] = [];
  @Input() showApprove = false;

  @Output() editClicked = new EventEmitter<any>();
  @Output() deleteClicked = new EventEmitter<any>();
  @Output() approveClicked = new EventEmitter<any>();

  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort!: MatSort;

  @Input() set dataSourceData(value: any[]) {
    this.dataSource.data = value;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Filter from parent */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEdit(row: any) {
    this.editClicked.emit(row);
  }

  onDelete(row: any) {
    this.deleteClicked.emit(row);
  }

  onApprove(row: any) {
    this.approveClicked.emit(row);
  }
}
