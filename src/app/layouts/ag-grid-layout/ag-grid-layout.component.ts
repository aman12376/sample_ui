import { Component, OnInit } from '@angular/core';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

@Component({
  selector: 'app-ag-grid-layout',
  templateUrl: "./ag-grid-layout.component.html",
  styleUrls: ['./ag-grid-layout.component.css']
})
export class AgGridLayoutComponent implements OnInit {

  constructor() {

  }

  columnDefs = [{ field: "make" }, { field: "model" }, { field: "price" }];
  rowSelection = 'single';
  rowData = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 }
  ];
  ngOnInit(): void {
  }

}
