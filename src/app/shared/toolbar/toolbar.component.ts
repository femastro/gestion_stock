import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/auth/service/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  public isLogged = false;

  constructor(
    private authSvc: AuthService,
  ) { }

  ngOnInit(): void {
  }

  onLogout(){
    this.authSvc.logout();
  }

}
