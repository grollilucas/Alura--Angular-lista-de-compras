import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item!: Item;
  @Output() emitindoItemParaEditar = new EventEmitter();
  @Output() emitindoIdParaDeletar = new EventEmitter();
  @Input() itemQueVaiSerEditado!: Item;

  faPen = faPen;
  faTrash = faTrash;

  constructor() {}

  ngOnInit(): void {
    console.log('OnInit');
  }

  ngOnChanges() {
    console.log('OnChanges');
  }

  editarItem() {
    this.emitindoItemParaEditar.emit(this.item);
  }

  deletarItem() {
    this.emitindoIdParaDeletar.emit(this.item.id);
  }

  ngOnDestroy() {}

  checarItem() {
    if (this.item.comprado == true) {
      this.item.comprado = false;
      console.log("entrou no if")
    } else{
      this.item.comprado = true
      console.log("entrou no else")
    }
  }
}
