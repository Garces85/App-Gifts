import { Component} from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  get historial(){
    return this.gifsService.historial;
  }

  constructor( private gifsService: GifsService) { }

  buscar( termino: string ){
    /*No va añadir nada xq la busuqeda ya esta hecha*/
    this.gifsService.buscarGifs( termino );
  }


}
