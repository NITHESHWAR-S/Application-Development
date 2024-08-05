package com.example.demo.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String department;
    private LocalTime timingFrom;
    private LocalTime timingTo;
    private LocalDate date;
    private String eventName;
    private String eventDetails;

    // Constructors
    public Booking() {
    }

    public Booking(String name, String department, LocalTime timingFrom, LocalTime timingTo, LocalDate date, String eventName, String eventDetails) {
        this.name = name;
        this.department = department;
        this.timingFrom = timingFrom;
        this.timingTo = timingTo;
        this.date = date;
        this.eventName = eventName;
        this.eventDetails = eventDetails;
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public LocalTime getTimingFrom() {
        return timingFrom;
    }

    public void setTimingFrom(LocalTime timingFrom) {
        this.timingFrom = timingFrom;
    }

    public LocalTime getTimingTo() {
        return timingTo;
    }

    public void setTimingTo(LocalTime timingTo) {
        this.timingTo = timingTo;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public String getEventDetails() {
        return eventDetails;
    }

    public void setEventDetails(String eventDetails) {
        this.eventDetails = eventDetails;
    }
}