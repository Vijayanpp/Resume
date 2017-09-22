import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/';
@Component({
  selector: 'app-socialmedialogin',
  templateUrl: './socialmedialogin.component.html',
  styleUrls: ['./socialmedialogin.component.css']
})
export class SocialmedialoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  googleAuthentication()
  {
    this.auth.loginWithGoogle();
  }

}
