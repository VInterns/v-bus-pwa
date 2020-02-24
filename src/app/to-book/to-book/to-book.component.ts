import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-to-book',
  templateUrl: './to-book.component.html',
  styleUrls: ['./to-book.component.css']
})
export class ToBookComponent implements OnInit {
  officeform: boolean = false;  
  homeform: boolean = false;
  trips:any=[];
  bulding:any=[];
  subbilding:any=[];
  smart:boolean=false;
  constructor(private tasksservices:TasksService) { }

  ngOnInit(): void {
  }
  officeFormDisplay()
  {
    this.officeform=true;
    this.homeform=false;
  }
  homeFormDisplay()
  {
    this.homeform=true;
    this.officeform=false;
  }
  onGetAllTrips()
  {
    this.tasksservices.getTrips().subscribe(alltrips=>{

      
      this.trips=alltrips;
      console.log(this.trips);
    },
    );
  }
   
  onsmartselect()
  {
    this.smart=true;
  }
  onHQselect()
  {
    this.smart=false;
  }
    
  
  

}
