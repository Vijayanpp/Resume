import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidatedashboard',
  templateUrl: './candidatedashboard.component.html',
  styleUrls: ['./candidatedashboard.component.css']
})
export class CandidatedashboardComponent implements OnInit {
  public basicInfo: boolean;
  public contact: boolean;
  public about: boolean;



  constructor() { }

  ngOnInit() {
    this.initializeData();
  }


  initializeData() {
    this.basicInfo = false;
    this.contact = false;
    this.about = false;
  }

  showBasicInfo() {
    this.basicInfo = true;
    this.contact = false;
    this.about = false;
  }
  showContact() {
    this.basicInfo = false;
    this.contact = true;
    this.about = false;

  }
}
