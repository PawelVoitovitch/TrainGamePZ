package com.PZ.TrainGame.Service;

import com.PZ.TrainGame.Config.Security.JwtService;
import com.PZ.TrainGame.DTOs.AuthResponse;
import com.PZ.TrainGame.DTOs.UserLoginDTO;
import com.PZ.TrainGame.Model.User.Role;
import com.PZ.TrainGame.Model.User.User;
import com.PZ.TrainGame.Repository.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthResponse register(User user) {
        User tmpUser = user;
        tmpUser.setPassword(passwordEncoder.encode(user.getPassword()));
        tmpUser.setRole(Role.USER);
        userRepo.save(tmpUser);
        String jwtToken = jwtService.generateToken(tmpUser);
        return AuthResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthResponse login(UserLoginDTO user) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        user.getUsername(),
                        user.getPassword()
                )
        );
        User tmpUser = userRepo.findByUsername(user.getUsername()).orElseThrow();
        String jwtToken = jwtService.generateToken(tmpUser);
        return AuthResponse.builder()
                .token(jwtToken)
                .build();
    }

    public User findById(Integer id) {
        Optional<User> user= userRepo.findById(id);
        if (user.isEmpty())
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User of this id not found!");
        return user.get();
    }

    public Boolean isUsernameTaken(String username) {
        return userRepo.existsByUsername(username);
    }

    public Boolean isEmailTaken(String email) {
        return userRepo.existsByEmail(email);
    }
}
