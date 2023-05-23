package com.PZ.TrainGame.Controller;

import com.PZ.TrainGame.DTOs.UserRegisterDTO;
import com.PZ.TrainGame.DTOs.UserDTO;
import com.PZ.TrainGame.Model.User.User;
import com.PZ.TrainGame.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/user")
public class UserController {
    private final UserService userService;
    private final ModelMapper modelMapper;

    @PostMapping
    public User addNew(@RequestBody UserRegisterDTO user){
        return userService.add(convertToEntity(user));
    }

    @GetMapping(path = "/{id}")
    public UserDTO getById(@PathVariable("id") Integer id){
        return convertToDto(userService.findById(id));
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