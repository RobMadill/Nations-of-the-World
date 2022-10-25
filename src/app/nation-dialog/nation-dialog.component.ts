import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-nation-dialog',
  templateUrl: './nation-dialog.component.html',
  styleUrls: ['./nation-dialog.component.css']
})
export class NationDialogComponent {
  //properties
  country: any;
  map = "";

  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    this.country = data;
    this.map = "assets/maps/" + this.country.Code.toLowerCase() + ".gif";
  }
}
