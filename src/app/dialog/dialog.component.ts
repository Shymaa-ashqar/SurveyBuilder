import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CardsListComponent } from '../cards-list/cards-list.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.sass']
})
export class DialogComponent implements OnInit {
  form!: FormGroup;

  constructor(    private dialogRef: MatDialogRef<DialogComponent>,@Inject(MAT_DIALOG_DATA) public data: CardsListComponent) { }

  ngOnInit(): void {
  }
  save() {
    this.dialogRef.close(this.form.value);
}

close() {
    this.dialogRef.close();
}

}
