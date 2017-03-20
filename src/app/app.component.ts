import { Component } from '@angular/core';
import { User } from './user';
import { USERS } from './added-users';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: `app.component.html`,
})
export class AppComponent  {
    searchNav=true;
    cardNav=false;
    tmp = USERS;
    users = USERS;
    selectedUser: User;

    removeUser(user:any){
       var i = USERS.indexOf(user);
       if(i != -1) {
	     USERS.splice(i, 1);
      }
    }

    onSelect(user: User): void {
       this.selectedUser = user;
     }

    searchPageRender(){
     this.searchNav=true;
     this.cardNav=false;
    }

    cardPageRender(){
     this.searchNav=false;
     this.cardNav=true;
    }

    filterByName(){
      this.users.sort(function (a, b) {
         var nameA = a.name.toUpperCase(); // ignore upper and lowercase
         var nameB = b.name.toUpperCase(); // ignore upper and lowercase
         if (nameA < nameB) {
          return -1;
         }
         if (nameA > nameB) {
          return 1;
         }
         // names must be equal
        return 0;
      });
    }

    filterByLocation(){
      this.users.sort(function (a, b) {
         var locA = a.location.toUpperCase(); // ignore upper and lowercase
         var locB = b.location.toUpperCase(); // ignore upper and lowercase
         if (locA < locB) {
          return -1;
         }
         if (locA > locB) {
          return 1;
         }
         // names must be equal
        return 0;
      });
    }
    
    filterByFollowers(){
      this.users.sort(function (a, b) {
        return a.followers - b.followers;
      });
    }
}