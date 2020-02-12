import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { HttpErrorResponse } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

  specialEvents = [];
  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit() {
    this.getSpecialEvents();
  }

  getSpecialEvents() {
    this.eventService.getSpecialEvents().subscribe(
      res => {
        console.log(res);
        this.specialEvents = res;
      },
      error => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            this.router.navigate(['/login']);
          }
        }
      }
      );
  }

}
