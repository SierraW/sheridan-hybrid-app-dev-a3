import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {NodeService} from '../node.service';

@Component({
  selector: 'app-school-covid19-data',
  templateUrl: './school-covid19-data.page.html',
  styleUrls: ['./school-covid19-data.page.scss'],
})
export class SchoolCovid19DataPage implements OnInit {

  schoolCovidSummary: any = [];
  schoolCovidTesting: any = [];
  schoolPartnersActiveCovid: any = [];

  constructor(private node: NodeService) { }

  ngOnInit() {
  }

  displaySchoolCovidSummary() {
    if (this.schoolCovidSummary.length > 0) {
      this.schoolCovidSummary = [];
      return;
    }
    this.node.getSchoolCovidSummary().subscribe(
      data => this.schoolCovidSummary = data,
      (error: HttpErrorResponse) => console.log(error.message)
    );
  }

  displaySchoolCovidTesting() {
    if (this.schoolCovidTesting.length > 0) {
      this.schoolCovidTesting = [];
      return;
    }
    this.node.getSchoolCovidTesting().subscribe(
      data => this.schoolCovidTesting = this.node.processData(data),
      (error: HttpErrorResponse) => console.log(error.message)
    );
  }

  displaySchoolPartnersActiveCovid() {
    if (this.schoolPartnersActiveCovid.length > 0) {
      this.schoolPartnersActiveCovid = [];
      return;
    }
    this.node.getSchoolPartnersActiveCovid().subscribe(
      data => this.schoolPartnersActiveCovid = this.node.processData(data),
      (error: HttpErrorResponse) => console.log(error.message)
    );
  }
}
