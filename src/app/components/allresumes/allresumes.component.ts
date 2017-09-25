import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-allresumes',
  templateUrl: './allresumes.component.html',
  styleUrls: ['./allresumes.component.css']
})
export class AllresumesComponent implements OnInit {

  public candidates: FirebaseListObservable<any>;
  public user: Object;


  constructor(private auth: AuthService, public db: AngularFireDatabase) { }

  ngOnInit() {
    this.auth.getAuthState().subscribe((user) => {
      console.log(user);
    });
  this.candidates = this.db.list('/candidates');
  console.log(this.auth);
  }
  ngAfterViewInit() {
    this.auth.getAuthState().subscribe((user) => {
      console.log(user);
    });
  this.candidates = this.db.list('/candidates');
  console.log(this.auth);
  }

}
