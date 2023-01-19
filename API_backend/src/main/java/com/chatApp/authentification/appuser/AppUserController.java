package com.chatApp.authentification.appuser;

import lombok.AllArgsConstructor;
import org.apache.catalina.User;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@CrossOrigin
public class AppUserController {
    AppUserService appUserService;

    @GetMapping(path = "loggedIn")
    public String loggedIn() {
        return appUserService.loggedIn();
    }

    @GetMapping(path = "/api/v1/user/{id}")
    public AppUser userById(@PathVariable Long id) {
        return appUserService.findUserById(id);
    }

    @GetMapping(path = "/api/v1/user/{first_name}/{last_name}")
    public AppUser userByFullName(@PathVariable String first_name, @PathVariable String last_name) {
        return appUserService.findUserByFullName(first_name, last_name);
    }

    @GetMapping(path = "/api/v1/user/login/{username}/{password}")
    public AppUser userByLogIn(@PathVariable String username, @PathVariable String password) {
        return appUserService.findEmailByPassword(username, password);
    }

}
