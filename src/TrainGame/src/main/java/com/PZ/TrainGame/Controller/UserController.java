package com.PZ.TrainGame.Controller;

import com.PZ.TrainGame.DTOs.CreateUserDto;
import com.PZ.TrainGame.DTOs.UserDTO;
import com.PZ.TrainGame.Model.User.User;
import com.PZ.TrainGame.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "api/user")
public class UserController {
    private final UserService userService;
    private final ModelMapper modelMapper;

    @PostMapping
    public User addNew(@RequestBody CreateUserDto user){
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
    private User convertToEntity(CreateUserDto createUserDto){
        User user= modelMapper.map(createUserDto, User.class);
        return user;
    }
}