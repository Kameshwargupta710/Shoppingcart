import { Component } from '@angular/core';
import {DashboardComponent} from "./dashboard/dashboard.component"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  private loadComponent = false;
    loadapplistemployees(){
       this.loadComponent = true;
    }


private loadComponents = false;
    loadappcart(){
       this.loadComponents = true;
    }
}