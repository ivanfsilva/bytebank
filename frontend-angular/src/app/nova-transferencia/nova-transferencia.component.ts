import { Component, EventEmitter, Output } from "@angular/core";
import { TransferenciaService } from "../services/transferencia.service";
import {Transferencia} from "../models/transferencia.model";

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 0;
  destino: number = 0;

  constructor(private service: TransferenciaService) {
  }

  transferir(){
    console.log('Solicitada nova transferência');
    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };

    this.service.adicionar(valorEmitir).subscribe(resultado => {
      // this.aoTransferir.emit(valorEmitir);
        this.limparCampos();
    },
     error => console.error());
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }

}
