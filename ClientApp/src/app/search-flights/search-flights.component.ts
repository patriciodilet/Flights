import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent implements OnInit {

  searchResult: FlightRm[] = [
    {
      airline: "American Airlines",
      remainingNumberOfSeats: 500,
      departure: { time: Date.now().toString(), place: "Los Angeles"},
      arrival: { time: Date.now().toString(), place: "Istanbul"},
      price: "350"
    },
    {
      airline: "Latam Airlines",
      remainingNumberOfSeats: 60,
      departure: { time: Date.now().toString(), place: "Santiago"},
      arrival: { time: Date.now().toString(), place: "Conce"},
      price: "50"
    },
    {
      airline: "Sky",
      remainingNumberOfSeats: 60,
      departure: { time: Date.now().toString(), place: "Iquique"},
      arrival: { time: Date.now().toString(), place: "Punta Arenas"},
      price: "50"
    }
  ];



  constructor(){}

  ngOnInit(): void {
    
  }

}

export interface FlightRm {
  airline: string;
  arrival: TimePlaceRm;
  departure: TimePlaceRm;
  price: string;
  remainingNumberOfSeats: number;
}

export interface TimePlaceRm {
  place: string;
  time: string;
}
