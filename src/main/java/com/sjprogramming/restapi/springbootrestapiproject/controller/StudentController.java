package com.sjprogramming.restapi.springbootrestapiproject.controller;

import com.sjprogramming.restapi.springbootrestapiproject.entity.Student;
import com.sjprogramming.restapi.springbootrestapiproject.exception.UserNotFoundException;
import com.sjprogramming.restapi.springbootrestapiproject.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {

    @Autowired
    private StudentRepository repo;
    //get all the students
    //https://localhost:8080/students
    @GetMapping("/students")
    public List<Student> getAllStudents(){
        List<Student> students =repo.findAll();
        return students;
    }

    //localhost:808/students/1
    @GetMapping("/student/{id}")
    public Student getStudent(@PathVariable int id){
//        Student student = repo.findById(id).get();
//        return student;
        return repo.findById(id).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PostMapping("/student/add")
    @ResponseStatus(code = HttpStatus.CREATED)
    public void createStudent(@RequestBody Student student){
        repo.save(student);
//       return ResponseEntity.status(HttpStatus.CREATED).body(newStudent);
    }

    @PutMapping("/student/update/{id}")
    public Student updateStudent(@RequestBody Student newStudent,@PathVariable int id){
//        Student student = repo.findById(id).get();
//        student.setName("raji");
//        student.setPercentage(92);
//        repo.save(student);
//        return student;
        return repo.findById(id).map(student -> {
            student.setName(newStudent.getName());
            student.setPercentage(newStudent.getPercentage());
            Student updatedStudent = repo.save(student);
            return updatedStudent;
        }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @DeleteMapping("/student/delete/{id}")
    public String deleteStudent(@PathVariable int id){
        if(!repo.existsById(id)){
            throw new UserNotFoundException(id);
        }
        repo.deleteById(id);
        return "User with id : "+ id +" has been deleted success";
    }
}
