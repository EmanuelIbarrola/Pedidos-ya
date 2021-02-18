import { Component, OnInit } from '@angular/core';
import { AutentificaciónService } from '../shared/Services/autentificación.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor(private autentificaciónService: AutentificaciónService) { }

  ngOnInit(): void {
  }

  public  onLogout() : void {
    this.autentificaciónService.Logout();
  }
}
