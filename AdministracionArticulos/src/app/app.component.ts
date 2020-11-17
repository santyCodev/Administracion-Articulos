import { Component } from '@angular/core';
import { Articulo } from './Model/Articulo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  /**
   * Modelado de un articulo
   */  
    codigoInput: number = null;
    descripcionInput: string = null;
    precioInput: number = null;  

  /**
   * Array de articulos
   */
  articulos = [ new Articulo(1, 'papas', 10.55),
                new Articulo(2, 'manzanas', 12.10),
                new Articulo(3, 'melon', 52.30),
                new Articulo(4, 'cebollas', 17),
                new Articulo(5, 'calabaza', 20)];

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
  borrar(articulo) {
    for(let x=0; x<this.articulos.length; x++)
      if (this.articulos[x].codigo==articulo.codigo)
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

    for(let x=0; x<this.articulos.length; x++)
      // Se comprueba si el articulo ya existe mirando el codigo
      if (this.articulos[x].codigo==this.codigoInput)
      {
        alert('ya existe un articulo con dicho codigo');
        return;
      }     
      
      //Si no existe se crea uno nuevo
      this.articulos.push(new Articulo(this.codigoInput, this.descripcionInput, this.precioInput));

      //Se borran los parametros del text area                    
      this.codigoInput = null;
      this.descripcionInput = null;
      this.precioInput = null;    
  }

  /**
   * Recibe un articulo seleccionado y lo muestra en los text area
   * @param art 
   */
  seleccionar(art) {
    this.codigoInput = art.codigo;
    this.descripcionInput = art.descripcion;
    this.precioInput = art.precio; 
  }

  /**
   * Modifica un articulo,
   *  - Tiene que comprobar si el articulo existe mediante su codigo
   */
  modificar() {
    for(let x=0;x<this.articulos.length;x++)

      //Comprueba si existe el codigo
      if (this.articulos[x].codigo==this.codigoInput)
      {
        this.articulos[x].descripcion=this.descripcionInput;
        this.articulos[x].precio=this.precioInput;
        return;
      }        
    alert('No existe el código de articulo ingresado');
  }

}

