import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',  
})

export class SidebarComponent  
{

  get historial()
  {
    return this.gifsservice.historial;
  }

  constructor(private gifsservice: GifsService) { }

  buscar(valor: string) 
	{	
		if(valor.trim().length === 0 ){
			return;
		}

    this.gifsservice.buscarGifs(valor)
	}

}
