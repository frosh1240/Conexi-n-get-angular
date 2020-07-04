import { Component, OnInit, ViewChild } from '@angular/core';
import {ServiceService} from '../service/service.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  displayedColumns: string[] = ['id', 'userId', 'title', 'completed'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(protected Service:ServiceService) { }
 
  dataSource = new MatTableDataSource();
  data: any[] = [];

  ngOnInit() {
    this.Service.ObtenerDatos().subscribe((data) =>{
      this.dataSource.data = data;  
    },
    (error) => {
      console.log(error);
    });
    this.dataSource.paginator = this.paginator;
  }

  Filter(filterValue:string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
