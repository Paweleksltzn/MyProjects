import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortowanie',
  pure:true
})
export class SortowaniePipe implements PipeTransform {

  transform(value: any, warunek,czySort): any {
    if(czySort){
    return value.sort((a,b)=>{
      if(a[warunek]<b[warunek]){
        return -1;
      }
      if(a[warunek]>b[warunek]){
        return 1;
      }
    });
  }else return value;
  }

}
