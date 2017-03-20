import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';
import { User } from '../user';
import { USERS } from '../added-users';

@Component({
    moduleId:module.id,
    selector: 'github',
    templateUrl: 'github.component.html',
    providers:[GithubService]
})
export class GithubComponent { 
    user:any;
    repos:any;
    username:string;
    usersadded=USERS;

    saveUser(user:any){
      USERS.push(user);
    }

    constructor(private _githubService:GithubService){
        console.log('Github Component Init...');   
    }
    
    search(){
        this._githubService.updateUsername(this.username);
        
        this._githubService.getUser().subscribe(user => {
            //console.log(user);
            this.user = user;
        });
        
        this._githubService.getRepos().subscribe(repos => {
            this.repos = repos;
        });
    }
}