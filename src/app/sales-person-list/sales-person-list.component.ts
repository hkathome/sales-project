import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {
  //create an array of objects
  salesPersonList:SalesPerson[]=[
    new SalesPerson("Anup","Kumar","anup.kumar@gmail.com",50000),
    new SalesPerson("John","Doe","john.does@gmail.com",2000),
    new SalesPerson("Sanup","Kumar","sanup.kumar@gmail.com",200000),
    new SalesPerson("Devesh","Mandwa","devesh.mandwa@gmail.com",30000),
    new SalesPerson("Gaurav","Kumar","gaurav.kumar@gmail.com",72902)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
