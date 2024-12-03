import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-visor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visor.component.html',
  styleUrl: './visor.component.css'
})
export class VisorComponent {
  //Obtener la imagen del padre
  @Input() imagen:any;

  constructor(){
  }

}
