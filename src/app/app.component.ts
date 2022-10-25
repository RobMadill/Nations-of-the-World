import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NationDialogComponent } from './nation-dialog/nation-dialog.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //properties
  Countries: any;

  //inject HttpClient into the constructor
  constructor(http: HttpClient, private dialog: MatDialog) {

    const URL = "assets/country.json";

    http.get(URL).subscribe({
      next: (json: any) => {
        this.Countries = json.Country;
        this.Countries.sort((c1: any, c2: any) => {
          return c1.Name.localeCompare(c2.Name);
        });

        console.log("JSON loaded: " + this.Countries.length);
        console.log(this.Countries[0].Name);
      },
      //failed
      error: err => { }
    });
  }
  //generate flag source based on country code
  getFlagName(country: any): string {
    let url = "assets/flags/" + country.Code2.toLowerCase() + ".jpg";
    return url;
  }

  //open dialog when user clicks on a card
  openDialog(country: any) {
    let config = new MatDialogConfig();
    config.width = "80%";
    config.height = "auto";
    config.data = country;

    this.dialog.open(NationDialogComponent, config);
  }


}