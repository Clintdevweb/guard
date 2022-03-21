import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  public isLoggedIn$: Observable<boolean> = new Observable<boolean>();
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.auth.isLoggedIn();
  }

  public Logout(): void {
    this.auth.logOutCommon();
  }
}
