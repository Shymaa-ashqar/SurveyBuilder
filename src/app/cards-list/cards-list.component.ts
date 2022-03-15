import { AfterViewInit, Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { DataService } from '../services/data.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.sass']
})
export class CardsListComponent implements OnInit,AfterViewInit {

  fetchedData!: any[];
  dialogReceivedObject!:any;
  ViewValue:string="grid";
  dataSource:any;
  @ViewChild('radioBtn')btn!: any;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private data: DataService,private dialog: MatDialog,private _liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void {
    this.data.sendGetRequest().subscribe((res:any)=>{
      this.fetchedData = res[0];
      this.dataSource = new MatTableDataSource(this.fetchedData);
    }) 
    console.log(this.fetchedData)
    this.dataSource.paginator = this.paginator;
    // console.log(this.dataSource);
  }  
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['radio', 'icon','TemplateName', 'From', 'To', 'Period'];

// console data
  test(): void {
  console.log(this.dataSource)
  }
// receive selected card and store it in dialogReceivedObject
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
// toggle between list and grid view
changeView(item:string){
this.ViewValue=item;
console.log(this.ViewValue)
}
// select card from list view
SelectedSurvey(data:any,item:any){  
  this.btn=item.checked;
}

// announceSortChange(sortState: Sort) {
//   if (sortState.direction) {
//     this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
//   } else {
//     this._liveAnnouncer.announce('Sorting cleared');
//   }
// }


}