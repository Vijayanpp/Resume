import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public user: any;
  constructor(private auth: AuthService) { }

  ngOnInit() {

    this.auth.getAuthState().subscribe(
      (user) => this.user = user);
      console.log(this.user);
  }


}
