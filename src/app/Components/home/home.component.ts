import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  studentName: string='';
  studentAge: number|null=0;
  students: { name: string, age: number }[] = [];
  constructor(){}
  addStudent(): void {
    if (this.studentName && this.studentAge) {
      this.students.push({ name: this.studentName, age: this.studentAge });
      this.studentName = '';
      this.studentAge = null;
    }
  }
  remove(index:number):void{
    this.students.splice(index, 1);
  }

}
