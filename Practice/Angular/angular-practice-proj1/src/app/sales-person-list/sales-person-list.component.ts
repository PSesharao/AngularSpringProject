import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // creating array of sales persons 
  salesPersonList : SalesPerson[] = [
    new SalesPerson("Sesh" , "Rao" , "seshrao@gmail.com" , 50000) ,
    new SalesPerson("Mike" , "Raj" , "mike_raj@gmail.com" , 40000) , 
    new SalesPerson("Mohan" , "Kumar" , "mohan_kumar@gmail.com" , 70000) , 
    new SalesPerson("Roshan" , "Sekhar" , "roshan_sekhar@gmail.com" , 40000) , 
    new SalesPerson("Ravi" , "Varma" , "ravi_varma@gmail.com" , 60000)
  ] 
  constructor() { }

  ngOnInit(): void {
  }

}
