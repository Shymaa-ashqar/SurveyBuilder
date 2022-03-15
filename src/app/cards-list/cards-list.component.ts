import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { DataService } from '../services/data.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';


@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.sass']
})
export class CardsListComponent implements OnInit {

  fetchedData!: any[];
  dialogReceivedObject!:any;
  ViewValue:string="grid";
  @ViewChild('radioBtn')btn!: any;

  constructor(private data: DataService,private dialog: MatDialog,private _liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void {
    this.data.sendGetRequest().subscribe((res:any)=>{
      this.fetchedData = res[0];
    }) 
    console.log(this.fetchedData)
  }  
  // posts.component.ts


//   ngDoCheck(){
//     // only run when property "data" changed
    
//     this.data.sendGetRequest().subscribe((res:any)=>{
//       this.fetchedData = res[0];
//     }) 
    
// }


  displayedColumns: string[] = ['radio', 'icon','TemplateName', 'From', 'To', 'Period'];


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

    dialogConfig.data =this.dialogReceivedObject.TemplateName
   

    this.dialog.open(DialogComponent, dialogConfig);
}

changeView(item:string){
this.ViewValue=item;
console.log(this.ViewValue)
}
SelectedSurvey(data:any,item:any){  
  this.btn=item.checked;
}

@ViewChild(MatSort) sort!: MatSort;

ngAfterViewInit() {
  // this.fetchedData.sort = this.sort;
}

/** Announce the change in sort state for assistive technology. */
announceSortChange(sortState: Sort) {
  // This example uses English messages. If your application supports
  // multiple language, you would internationalize these strings.
  // Furthermore, you can customize the message to add additional
  // details about the values being sorted.
  if (sortState.direction) {
    this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
  } else {
    this._liveAnnouncer.announce('Sorting cleared');
  }
}


}