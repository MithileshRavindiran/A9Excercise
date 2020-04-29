import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor() { }

  getAuthors() {
    return ["Mtihilesh", "Pavithra" ,"Mithra Shri", "Paithamizhan", "Ravindran",  "Revathy", "Nivethitha", "Rajesh", "Brammitha",
   "Murugesan", "Jeyanthi", "Srinivasan", "Padamashree", "Prasanna", "Pranau", "Rekha"];
  }
}
