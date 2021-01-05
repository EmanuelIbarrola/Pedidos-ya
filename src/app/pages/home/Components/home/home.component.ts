import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos=[
    {
      titulo:"Pizza",
      descripcion:"ricas",
      precio: 220,
      id:1,
      imageUrl:"../assets/pizza1.jpg"
    },

    {
      titulo:"Pizza2",
      descripcion:"ricas",
      precio: 220,
      id:2,
      imageUrl:"../assets/pizza1.jpg"
    },

    {
      titulo:"Pizza3",
      descripcion:"ricas",
      precio: 220,
      id:3,
      imageUrl:"../assets/pizza1.jpg"
    },
    {
      titulo:"Pizza4",
      descripcion:"ricas",
      precio: 220,
      id:4,
      imageUrl:"../assets/pizza1.jpg"
    },
    {
      titulo:"Pizza5",
      descripcion:"ricas",
      precio: 220,
      id:5,
      imageUrl:"../assets/pizza1.jpg"
    },
    {
      titulo:"Pizza6",
      descripcion:"ricas",
      precio: 220,
      id:6,
      imageUrl:"../assets/pizza1.jpg"
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
