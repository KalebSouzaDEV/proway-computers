import { Component, OnInit } from '@angular/core';
import { CartManagerService } from '../cart-manager.service';
import { IProdutoCarrinho } from '../produtos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: IProdutoCarrinho[] = [];
  cartValueTotal = 0;
  constructor(public cart: CartManagerService, private router: Router) { }

  ngOnInit(): void {
    this.itensCarrinho = this.cart.retornarCarrinho();
    this.getAllValue()
  }

  removerItemCarrinho(produtoID: number){
    this.cart.removerItemCarrinho(produtoID);
    this.itensCarrinho = this.cart.retornarCarrinho();
    this.getAllValue()
  }

  getAllValue(){
      this.cartValueTotal = 0
      for (let index = 0; index < this.itensCarrinho.length; index++) {
          const element = this.itensCarrinho[index];
          this.cartValueTotal += (element['preco'] * element['quantidade']);
      }
  }

  comprarCarrinho(){
    alert("Parabéns, você realizou sua compra");
    this.cart.limparCarrinho();
    this.router.navigate(['produtos'])
  }


}
