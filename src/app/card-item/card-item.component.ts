import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.sass']
})
export class CardItemComponent implements OnInit {

  @ViewChild('icon')btn!: ElementRef;
  @Input()  data_:any;
  @Output() dialogDataOutput = new EventEmitter();
  flag:boolean=false;
  dialogSurvey:any=null;
   

  constructor() {
   }

  ngOnInit(): void {
   this.data_.SurveyPeriods=JSON.parse( this.data_.SurveyPeriods);
  //  console.log(typeof(this.data_.SurveyPeriods))
  }
  SelectedSurvey(data:any,item:any){     
      this.dialogSurvey=data;
      console.log(this.dialogSurvey)
      this.flag=item.checked;
      this.dialogDataOutput.emit(this.dialogSurvey);
 
}
}