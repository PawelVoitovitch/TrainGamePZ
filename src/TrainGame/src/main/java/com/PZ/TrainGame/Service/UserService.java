package com.PZ.TrainGame.Service;

import com.PZ.TrainGame.Model.User.User;
import com.PZ.TrainGame.Repository.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepo userRepo;

    public User add(User user) {
        return userRepo.save(user);
    }

    public User findById(Integer id) {
        Optional<User> user= userRepo.findById(id);
        if (user.isEmpty())
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User of this id not found!");
        return user.get();
    }


}
