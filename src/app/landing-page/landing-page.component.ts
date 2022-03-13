import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass']
})
export class LandingPageComponent implements OnInit {

  fetchedData!: any[];
  publishedData!: any[];
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.sendGetRequest().subscribe((res:any)=>{
      this.fetchedData = res[0];
    }) 

  }

}
