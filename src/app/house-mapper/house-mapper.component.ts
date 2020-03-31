import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MouseEvent } from '@agm/core';
import { clients } from '../clients';

@Component({
  selector: 'app-house-mapper',
  templateUrl: './house-mapper.component.html',
  styleUrls: ['./house-mapper.component.css']
})
export class HouseMapperComponent implements OnInit {
  // google maps zoom level
  zoom: number = 15;
  client;
  
  // initial center position for the map
  lat: number = 43.4313021;
  lng: number = -84.0251066;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  markers: marker[] = [
	  {
		  lat: 43.4313021,
		  lng: -84.0251066,
		  label: 'A',
		  draggable: true
	  }
	  // {
		//   lat: 43.6245813,
		//   lng: -84.3062422,
		//   label: 'B',
		//   draggable: false
	  // },
	  // {
		//   lat: 43.4248999,
		//   lng: -83.9837438,
		//   label: 'C',
		//   draggable: true
	  // }
  ]
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.client = clients[+params.get('clientId')];
  });
}
}
// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}