package com.utimak.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
@RequestMapping("/api")
public class TesteController {

    @GetMapping("/")
    public String testeEndpoint(){
        return "Olá cornos " + new Date();
    }
}
