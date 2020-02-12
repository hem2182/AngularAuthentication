import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

  specialEvents = [];
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.getSpecialEvents();
  }

  getSpecialEvents() {
    this.eventService.getSpecialEvents().subscribe(
      res => {
        console.log(res);
        this.specialEvents = res;
      },
      error => console.log(error)
      );
  }

}
