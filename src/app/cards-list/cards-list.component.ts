import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.sass']
})
export class CardsListComponent implements OnInit {

  fetchedData!: any[];
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.sendGetRequest().subscribe((res:any)=>{
      this.fetchedData = res[0];
    }) 
    console.log(this.fetchedData)
  }

  test(): void {
  console.log(this.fetchedData)
      

  }

}
