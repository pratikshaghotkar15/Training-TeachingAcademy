import { Component, OnInit } from '@angular/core';
import {Student} from '../student'
import { StudentService } from '../student.service';
import { Observable } from "rxjs";
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

students:Student[];

  constructor(private studentService:StudentService,private router:Router) { }

  ngOnInit(): void {
  
 // this.students=[
  //{
  //"id":1,
  //"name":"prati",
  //"email":"ppp",
  //"courseName":"rrr",
  //"fees":"678"},
  
  //{
  //"id":2,
  //"name":"mayu",
  //"email":"qqq",
  //"courseName":"ssd",
  //"fees":"567"}
  
  //]
  
  this.getStudents();
  
  }
  
  private getStudents(){
  this.studentService.getStudentsList().subscribe(data=>{
  this.students=data;
  });
  }
  
  updateStudent(id:number){
  this.router.navigate(['update-student',id]);
  }
  
  deleteStudent(id:number){
  this.studentService.deleteStudent(id)
  .subscribe(data=>{
  console.log(data);
  this.getStudents();
  })
 
  }
  
  studentDetails(id:number){
  this.router.navigate(['view-student',id]);
  }

}

