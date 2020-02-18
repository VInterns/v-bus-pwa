import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  To: string;
  From: string;
  Pickup_point: string;
  Date : string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {To:'Home', From: 'smart', Pickup_point:'Ain shams', Date: '11/02/2020  6:30pm'},
  
]; 


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  displayedColumns: string[] = ['To', 'From', 'Pickup_point', 'Date','Action'];
  dataSource = ELEMENT_DATA;
  
  constructor() { }

  ngOnInit(): void {
  }

}
