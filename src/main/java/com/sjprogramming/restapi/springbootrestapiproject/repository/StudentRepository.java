package com.sjprogramming.restapi.springbootrestapiproject.repository;

import com.sjprogramming.restapi.springbootrestapiproject.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Integer> {
}
