import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  
  transform(value: string, camelCase?: boolean) {
    
    if (!value) {
      return null;
    }
    if (camelCase) {
    let words = value.split(' ');

    for (var i = 0 ; i <words.length; i++) {
      if (i > 0  &&  this.isInPropositions(words[i])) 
        words[i] = words[i].toLowerCase();
      else
        words[i] = this.toTitleCase(words[i])
      

    }
return words.join(' ');
  }
  return value;

  }

  private toTitleCase(word:string) :string {
    return word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase();
  }

  private isInPropositions(word: string) : boolean {
    let prepositions = ['of', 'the'];
    return prepositions.includes(word.toLowerCase());
  }

}
