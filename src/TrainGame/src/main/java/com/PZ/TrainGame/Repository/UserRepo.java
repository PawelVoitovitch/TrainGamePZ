package com.PZ.TrainGame.Repository;

import com.PZ.TrainGame.Model.User.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Integer> {
}
