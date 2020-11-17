import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  /**
   * Modelado de un articulo
   */
  art={
    codigo:null,
    descripcion:null,
    precio:null
  }

  /**
   * Array de articulos
   */
  articulos = [{codigo:1, descripcion:'papas', precio:10.55},
               {codigo:2, descripcion:'manzanas', precio:12.10},
               {codigo:3, descripcion:'melon', precio:52.30},
               {codigo:4, descripcion:'cebollas', precio:17},
               {codigo:5, descripcion:'calabaza', precio:20},
              ];

  /** 
   * Si no hay articulos en el array sera false 
   */
  hayRegistros() {
    return this.articulos.length > 0;              
  }

  /**
   * Borra un articulo de la lista de articulos
   * @param art El articulo a borrar
   */
  borrar(art) {
    for(let x=0;x<this.articulos.length;x++)
      if (this.articulos[x].codigo==art.codigo)
      {
        this.articulos.splice(x,1);
        return;
      }
  }

  /**
   * Agrega un articulo a la lista de articulos si no existen
   * - Recibe los datos desde los text area mapeados en
   *    this.art.codigo
   *    this.art.descripcion
   *    this.art.precio
   */
  agregar() {

    for(let x=0;x<this.articulos.length;x++)
      // Se comprueba si el articulo ya existe mirando el codigo
      if (this.articulos[x].codigo==this.art.codigo)
      {
        alert('ya existe un articulo con dicho codigo');
        return;
      }     
      
      //Si no existe se crea uno nuevo
      this.articulos.push({codigo: this.art.codigo,
                          descripcion: this.art.descripcion,
                          precio: this.art.precio });

      //Se borran los parametros del text area                    
      this.art.codigo=null;
      this.art.descripcion=null;
      this.art.precio=null;    
  }

  /**
   * Recibe un articulo seleccionado y lo muestra en los text area
   * @param art 
   */
  seleccionar(art) {
    this.art.codigo=art.codigo;
    this.art.descripcion=art.descripcion;
    this.art.precio=art.precio;
  }

  /**
   * Modifica un articulo,
   *  - Tiene que comprobar si el articulo existe mediante su codigo
   */
  modificar() {
    for(let x=0;x<this.articulos.length;x++)

      //Comprueba si existe el codigo
      if (this.articulos[x].codigo==this.art.codigo)
      {
        this.articulos[x].descripcion=this.art.descripcion;
        this.articulos[x].precio=this.art.precio;
        return;
      }        
    alert('No existe el código de articulo ingresado');
  }

}

