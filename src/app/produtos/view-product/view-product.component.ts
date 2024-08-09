import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartManagerService } from 'src/app/cart-manager.service';
import { NotifyService } from 'src/app/notify.service';
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  produto: IProduto | undefined
  quantidade = 0;

  constructor(private produtosService: ProdutosService, private route: ActivatedRoute, private notify: NotifyService, private cart: CartManagerService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoID = Number(routeParams.get("id"))

    this.produto = this.produtosService.getOneProduct(produtoID)
  }

  adicionarAoCarrinho(){
    this.notify.notificar("Você adicionou ao carrinho", "OK")
    const produto: IProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade
    }
    this.cart.adicionarAoCarrinho(produto)
  }

}
