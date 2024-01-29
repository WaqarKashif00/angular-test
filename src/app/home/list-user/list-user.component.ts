import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent{
  
  userData: any[] = [];
  
  constructor(private dataService: DataService){
    this.dataService.sharedData$.subscribe((data)=> {
      if(data){
        this.userData.push(data);
      }
    })
  }
  

}
