import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { taskRequestModel } from '../modules/tasks-request-models';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http:HttpClient) { }
  getTrips()
  {
    return this.http.get(environment.tasksApiUrl + 'Trips');
  }
  getBuilding()
  {
    return this.http.get(environment.tasksApiUrl + 'Building');
  }
 

  addTrip(body : taskRequestModel)
  {
    return this.http.post(environment.tasksApiUrl +'Trips',body);
  }

  deleteTrip(id)
  {
    return this.http.delete(environment.tasksApiUrl +`Trips/${id}`);

  }
}
