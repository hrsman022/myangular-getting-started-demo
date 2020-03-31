import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MouseEvent } from '@agm/core';
import { clients } from '../clients';

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}

@Component({
  selector: 'app-house-mapper',
  templateUrl: './house-mapper.component.html',
  styleUrls: ['./house-mapper.component.css']
})
export class HouseMapperComponent implements OnInit {
  @Input() data: any;
  // google maps zoom level
  zoom: number = 15;
  markers: marker[] = [];
  location: Object;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    console.log(this.data);
    if (this.data) {
      for (let item of this.data) {
        this.markers.push(
          {
            lat: item.lat,
            lng: item.lng,
            label: item.address.addressLine1,
            draggable: false,
          }
        );
      }
    }
  }
}