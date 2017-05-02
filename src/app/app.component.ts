import { Component, OnInit } from '@angular/core';
import { NewserviceService } from './newservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NewserviceService]
})
export class AppComponent implements OnInit {
  title = 'app works!';
    public customerDetail:any;
    public dataSources= [];

    constructor(private myService: NewserviceService) { }
    ngOnInit(){
      this.myService.getData()
              .subscribe(resDeatil => {
              this.customerDetail= resDeatil;
              this.dataSources = this.customerDetail.dashboardDataSourceResultObj.map(cust => cust.dataSource);
              console.log("Result Array :", this.dataSources);
            });
    }
}
