import { Component, OnInit } from '@angular/core';
import { User } from '../../../core/models/user.model';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) {};

  ngOnInit(): void {
    this.userService.getUsers().subscribe(res => this.users = res);
  }
}
