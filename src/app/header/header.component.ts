import { Component, OnInit } from '@angular/core';
import { CartManagerService } from '../cart-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public cart: CartManagerService, private router: Router) { }

  ngOnInit(): void {
  }

  moverPagina(pagina: string){
    this.router.navigate([pagina])
  }


}
