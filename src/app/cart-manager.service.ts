import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CartManagerService {
  itens: IProdutoCarrinho[] = [];
  
  constructor() { }


  retornarCarrinho(){
    const carrinho = JSON.parse(localStorage.getItem("carrinho") || "[]");
    this.itens = carrinho;
    return carrinho
  }

  adicionarAoCarrinho(produto: IProdutoCarrinho){
    this.itens.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.itens))
  }

  removerItemCarrinho(produtoID: number) {
    this.itens = this.itens.filter(item => item.id !== produtoID);
    localStorage.setItem("carrinho", JSON.stringify(this.itens))

  }

  limparCarrinho(){
    this.itens = [];
    localStorage.clear();
  }
}
