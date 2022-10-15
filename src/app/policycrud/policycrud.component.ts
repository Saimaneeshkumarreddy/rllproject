import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-policycrud',
  templateUrl: './policycrud.component.html',
  styleUrls: ['./policycrud.component.css']
})
export class PolicycrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
