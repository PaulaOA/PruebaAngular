import { Component } from '@angular/core';
import imagenes from './data/imagenes.json';
import { VisorComponent } from "./visor/visor.component";
import { InfoComponent } from './info/info.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VisorComponent, InfoComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-imagenes';
  listaImagenes = imagenes;
  imagenSeleccionada=null;

  ngOnInit(){
    console.log(this.listaImagenes);
  }

  onSelectImage(imagen:any) {
    this.imagenSeleccionada=imagen;
  }
}


