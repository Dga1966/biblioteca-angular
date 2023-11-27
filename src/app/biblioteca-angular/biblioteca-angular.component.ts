import { Component, OnInit } from '@angular/core';
import { LibrosDataService } from '../libros-data.service';

@Component({
  selector: 'biblioteca-angular',
  templateUrl: './biblioteca-angular.component.html',
  styleUrls: ['./biblioteca-angular.component.scss']
})
export class BibliotecaAngularComponent implements OnInit {
libros= [
  {
      "id": 1,
      "titulo": "titluo1",
      "paginas": 12,
      "autor": null
  },
  {
      "id": 2,
      "titulo": "titluoActualizado2",
      "paginas": 88,
      "autor": {
          "id": 1,
          "nombre": "Vargas",
          "mail": "vargas@gmail",
          "activo": true
      }
  },
  {
    "id": 3,
    "titulo": "titluoActualizado3",
    "paginas": 89,
    "autor": {
        "id": 2,
        "nombre": "Varguita",
        "mail": "vargas@",
        "activo": true
    }
}
];
  constructor(private librosService: LibrosDataService) { }

  ngOnInit(): void {
    this.librosService.getLibros().subscribe((libros:any)=>{
      this.libros=libros;
    })
  }

}
