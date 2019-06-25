import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-incrementador",
  templateUrl: "./incrementador.component.html",
  styleUrls: ["./incrementador.component.css"]
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtPorcentaje') txtPorcentaje : ElementRef;

  @Input() leyenda: string = "Leyenda";
  @Input() porcentaje: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  /**
   * Cambia porcentaje
   */
  cambiarPorcentaje = (cantidad: number) => {
    if (this.porcentaje >= 100 && cantidad > 0) {
      this.porcentaje = 100;
      return;
    }
    if (this.porcentaje <= 0 && cantidad < 0) {
      this.porcentaje = 0;
      return;
    }
    this.porcentaje = this.porcentaje + cantidad;

    this.txtPorcentaje.nativeElement.focus();

    this.cambioValor.emit(this.porcentaje);
  };

  onChanged(newValue: number) {
    // let elemHTML:any = document.getElementsByName('porcentaje')[0];
    // console.log(this.txtPorcentaje);

    if (newValue >= 100) {
      this.porcentaje = 100;
    } else if (newValue <= 0) {
      this.porcentaje = 0;
    }else{
      this.porcentaje = newValue
    }

    // elemHTML.value = this.porcentaje;
    this.txtPorcentaje.nativeElement.value = this.porcentaje;

    this.cambioValor.emit(this.porcentaje);
  }
}
