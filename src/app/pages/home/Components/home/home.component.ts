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
      imageUrl:"ada"
    },

    {
      titulo:"Pizza2",
      descripcion:"ricas",
      precio: 220,
      id:2,
      imageUrl:"ada"
    },

    {
      titulo:"Pizza3",
      descripcion:"ricas",
      precio: 220,
      id:3,
      imageUrl:"ada"
    },
    {
      titulo:"Pizza4",
      descripcion:"ricas",
      precio: 220,
      id:4,
      imageUrl:"ada"
    },
    {
      titulo:"Pizza5",
      descripcion:"ricas",
      precio: 220,
      id:5,
      imageUrl:"ada"
    },
    {
      titulo:"Pizza6",
      descripcion:"ricas",
      precio: 220,
      id:6,
      imageUrl:"ada"
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
