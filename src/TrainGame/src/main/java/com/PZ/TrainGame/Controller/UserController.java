package com.PZ.TrainGame.Controller;

import com.PZ.TrainGame.DTOs.AuthResponse;
import com.PZ.TrainGame.DTOs.UserLoginDTO;
import com.PZ.TrainGame.DTOs.UserRegisterDTO;
import com.PZ.TrainGame.DTOs.UserDTO;
import com.PZ.TrainGame.Model.User.User;
import com.PZ.TrainGame.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@CrossOrigin
@RequestMapping(path = "/user")
public class UserController {
    private final UserService userService;
    private final ModelMapper modelMapper;

    @PostMapping("/register")
    public AuthResponse register(@RequestBody UserRegisterDTO user){
        return userService.register(convertToEntity(user));
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody UserLoginDTO user){
        return userService.login(user);
    }
    @GetMapping(path = "/username={id}")
    public UserDTO getById(@PathVariable("id") Integer id){
        return convertToDto(userService.findById(id));
    }

    @GetMapping(path = "/isUsernameTaken/{username}")
    public Boolean isUsernameTaken(@PathVariable("username") String username){
        return userService.isUsernameTaken(username);
    }

    @GetMapping(path = "/isEmailTaken/{email}")
    public Boolean isEmailTaken(@PathVariable("email") String email){
        return userService.isEmailTaken(email);
    }

    private UserDTO convertToDto(User user){
        UserDTO userDto = modelMapper.map(user, UserDTO.class);
        return userDto;
    }
    private User convertToEntity(UserRegisterDTO userRegisterDTO){
        User user= modelMapper.map(userRegisterDTO, User.class);
        return user;
    }
}