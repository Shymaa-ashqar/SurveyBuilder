import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.sass']
})
export class CardItemComponent implements OnInit {

  @Input()  data_:any;
   
  

  constructor() {
   }

  ngOnInit(): void {
   this.data_.SurveyPeriods=JSON.parse( this.data_.SurveyPeriods);
  //  console.log(typeof(this.data_.SurveyPeriods))
  }
 
}