package com.PZ.TrainGame.Service;

import com.PZ.TrainGame.Model.User.User;
import com.PZ.TrainGame.Repository.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepo userRepo;

    public User add(User user) {
        return userRepo.save(user);
    }
}
