import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { Event } from '../shared/models';
import { FirebaseService } from '../shared/firebase.service';
import { AuthService } from '../shared/auth.service';

@Component({
    selector: 'event-view',
    templateUrl: 'event-view.component.html',
})
export class EventViewComponent {
    event: Event;

    constructor(private route: ActivatedRoute, private eventService: FirebaseService<Event>, title: Title, public auth: AuthService) {
        eventService.setup('/events/');

        // This calls .subscribe so we don't rely on the template for unrolling
        // the observable (which requires 2 components)
        route.params.subscribe(params =>
            eventService.get(params['id']).subscribe((event) => {
                this.event = event;
                title.setTitle(this.event.name);
            })
        );
    }
}
