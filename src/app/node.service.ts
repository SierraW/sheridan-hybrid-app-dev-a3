import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  constructor(private http: HttpClient) { }

  getSchoolCovidSummary() {
    return this.http.get('http://127.0.0.1:8888/getSchoolCovidSummary/', {});
  }

  getSchoolPartnersActiveCovid() {
    return this.http.get('http://127.0.0.1:8888/getSchoolPartnersActiveCovid/', {});
  }

  getSchoolCovidTesting() {
    return this.http.get('http://127.0.0.1:8888/getSchoolCovidTesting/', {});
  }

  getOngoingOutbreaks() {
    return this.http.get('http://127.0.0.1:8888/getOngoingOutbreaks/', {});
  }

  getCasesByStatusAndPhu() {
    return this.http.get('http://127.0.0.1:8888/getCasesByStatusAndPhu/', {});
  }

  processData(data: any) {
    const proceedData = [];
    for (const item of data) {
      const block = {
        value: [],
        date: undefined
      };
      for (const [key, value] of Object.entries(item)) {
        if (key === 'date' || key === 'reported_date') {
          block.date = value;
          continue;
        }
        const parts = key.split('_');
        let completeName = '';
        for (const part of parts) {
          completeName += part.charAt(0).toUpperCase() + part.slice(1) + ' ';
        }
        block.value.push({name: completeName, value});
      }
      proceedData.push(block);
    }
    return proceedData;
  }
}
