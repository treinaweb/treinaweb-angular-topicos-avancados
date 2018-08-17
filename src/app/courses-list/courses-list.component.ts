import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  name = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.name = this.activatedRoute.snapshot.params['nome'];
   }

  ngOnInit() {
    //this.router.navigate(['/cursos/jquery']);
  }

}
