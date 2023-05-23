package com.PZ.TrainGame.Repository;

import com.PZ.TrainGame.Model.User.Stats;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StatsRepo extends JpaRepository<Stats, Integer> {
}
