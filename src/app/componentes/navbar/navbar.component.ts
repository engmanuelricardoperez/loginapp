import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service';
import { auth } from 'firebase/app';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isLogin: boolean;
  public nombreUsuario : string;
  public emailUsuario : string;
  public fotoUsuario: string;
  isCollapsed = true;
  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth =>{
      if(auth){
        this.isLogin = true;
        this.nombreUsuario = auth.displayName;
        this.emailUsuario = auth.email;
        this.fotoUsuario = auth.photoURL;
      }else{
        this.isLogin = false;
      }
    })
  }

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

  onClickLogout(){
    this.authService.logout();
  }
}
