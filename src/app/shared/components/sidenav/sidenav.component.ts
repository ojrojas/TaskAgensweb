import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  showMenu = false;
  nameUser: string = "";
  Initials: string = "";

  constructor(private readonly serviceAuth: AuthService,
    private readonly router: Router) {
    this.serviceAuth.getUserInfo().subscribe(user => {
      if (user !== undefined) {
        this.nameUser = `${user?.firstName} ${user?.lastName}`;
        this.Initials = `${user?.firstName.toUpperCase().substring(0, 1)}${user?.lastName.toUpperCase().substring(0, 1)}`
      }
    });
  }

  ngOnInit(): void {
  }

  logOut = () => {
    this.serviceAuth.logOut();
    this.router.navigate(['/login']);
  }
}
