import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMovie'
})
export class FilterMoviePipe implements PipeTransform {
//value es el array de peliculas y args el argumento de la búsqueda
  transform(value: any, args: any): any {
   return value.filter( (data:any) =>  data.title.toLowerCase().includes(args.toLowerCase()))

  }

}
