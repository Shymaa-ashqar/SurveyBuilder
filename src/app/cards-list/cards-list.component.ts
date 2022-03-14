import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.sass']
})
export class CardsListComponent implements OnInit {

  fetchedData!: any[];
  dialogReceivedObject!:any;
  ViewValue:string="grid";
  constructor(private data: DataService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.data.sendGetRequest().subscribe((res:any)=>{
      this.fetchedData = res[0];
    }) 
    console.log(this.fetchedData)
    // print(received:any){

    // }
  }

  test(): void {
  console.log(this.fetchedData)
      

  }
  print(receivedData:any){
    this.dialogReceivedObject=receivedData
     }
  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
        surveyData:this.dialogReceivedObject
    };

    this.dialog.open(DialogComponent, dialogConfig);
}

changeView(item:string){
this.ViewValue=item;
console.log(this.ViewValue)
}

}