import { Component, OnInit } from '@angular/core';
import {NodeService} from '../node.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-public-health-unit',
  templateUrl: './public-health-unit.page.html',
  styleUrls: ['./public-health-unit.page.scss'],
})
export class PublicHealthUnitPage implements OnInit {

  casesByStatusAndPhu: any = [];

  constructor(private node: NodeService) { }

  ngOnInit() {
    this.displayCasesByStatusAndPhu();
  }

  displayCasesByStatusAndPhu() {
    this.node.getCasesByStatusAndPhu().subscribe(
      data => this.casesByStatusAndPhu = this.node.processData(data),
      (error: HttpErrorResponse) => console.log(error.message)
    );
  }

}
