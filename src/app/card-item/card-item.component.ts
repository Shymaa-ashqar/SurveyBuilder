import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.sass']
})
export class CardItemComponent implements OnInit {

  @ViewChild('icon')btn!: ElementRef;
  @Input()  data_:any;
  flag:boolean=false;
  dialogSurvey:any;
   
  

  constructor() {
   }

  ngOnInit(): void {
   this.data_.SurveyPeriods=JSON.parse( this.data_.SurveyPeriods);
  //  console.log(typeof(this.data_.SurveyPeriods))
  }
  SelectedSurvey(data:any,item:any){     
      console.log(item.value);
      console.log(item.checked)
      // console.log(data)
      this.dialogSurvey=data;
      console.log(this.dialogSurvey)
      this.btn.nativeElement.classList.toggle("fa-solid"); 
      this.flag=item.checked;
 
}
}