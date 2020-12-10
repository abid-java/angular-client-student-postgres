import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from '../Student';
import { StudentService } from "../student.service";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Observable<Student[]>;

  constructor(private studentService: StudentService,
    private router: Router) { }

  ngOnInit(): void {
    this.loadWholeData();
    console.log('Students List : ' + this.students);
  }

  loadWholeData() {
    this.students = this.studentService.getAllStudents();
  }

  deleteStudent(studentId: number) {
    this.studentService.deleteStudent(studentId)
      .subscribe(data => {
        console.log(data);
        this.loadWholeData();
      }, error => console.log(error));
  }

  studentDetails(studentId: number) {
    this.router.navigate(['details', studentId]);
  }

  updateStudent(studentId: number) {
    this.router.navigate(['update', studentId]);
  }

}
