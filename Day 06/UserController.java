package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.model.Student;
import com.example.demo.model.Faculty;
import com.example.demo.service.UserService;
import com.example.demo.service.StudentService;
import com.example.demo.service.FacultyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private StudentService studentService;

    @Autowired
    private FacultyService facultyService;

    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        User registeredUser = userService.registerUser(user);
        if ("student".equals(user.getRole())) {
            Student student = new Student();
            student.setUser(registeredUser);
            studentService.registerStudent(student);
        } else if ("faculty".equals(user.getRole())) {
            Faculty faculty = new Faculty();
            faculty.setUser(registeredUser);
            facultyService.registerFaculty(faculty);
        }
        return registeredUser;
    }

    @PostMapping("/login")
    public User loginUser(@RequestBody User user) {
        User existingUser = userService.findByEmail(user.getEmail());
        if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
            return existingUser;
        }
        return null;  // Or throw an appropriate exception
    }
}