import { Component, OnInit } from '@angular/core';
import {NodeService} from '../node.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-ongoing-outbreak',
  templateUrl: './ongoing-outbreak.page.html',
  styleUrls: ['./ongoing-outbreak.page.scss'],
})
export class OngoingOutbreakPage implements OnInit {

  ongoingOutbreaks: any = [];

  constructor(private node: NodeService) { }

  ngOnInit() {
    this.displayOngoingOutbreaks();
  }

  displayOngoingOutbreaks() {
    this.node.getOngoingOutbreaks().subscribe(
      data => this.ongoingOutbreaks = this.node.processData(data),
      (error: HttpErrorResponse) => console.log(error.message)
    );
  }
}
