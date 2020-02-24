import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
export interface PeriodicElement {
  To: string;
  From: string;
  Pickup_point: string;
  Date : string;

}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {To:'Home', From: 'smart', Pickup_point:'Ain shams', Date: '11/02/2020  6:30pm'},
//   {To:'Work', From: 'Home', Pickup_point:'Ain shams', Date: '12/02/2020  8:30am'},
//   {To:'Home', From: 'smart', Pickup_point:'Ain shams', Date: '12/02/2020  6:30pm'},
//   {To:'Work', From: 'Home', Pickup_point:'Ain shams', Date: '13/02/2020  8:30am'},
   
// ]; 


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {



  trips:any=[];
  displayedColumns: string[] = ['To', 'From', 'Pickup_point', 'Date','Action'];
  // datasource=this.tasks;  
  constructor(private tasksservices:TasksService) { }

  onGetAllTrips()
  {
    this.tasksservices.getTrips().subscribe(alltrips=>{

      
      this.trips=alltrips;
      console.log(this.trips);
    }
    );
  }
  onDeleteTrip(tripID)
  {
    let confirmDelete =confirm('Do you want to delete this trip?');
    if (confirmDelete)
    {
      this.tasksservices.deleteTrip(tripID).subscribe(delt=>{
        this.onGetAllTrips();
      },error=> console.log(error));
      
    }
    else
    {
      console.log(confirmDelete);
    }
  }
  
  ngOnInit(): void {
    this.onGetAllTrips();
  }

}
