package com.PZ.TrainGame.Model.User;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "stats")
@Data
@NoArgsConstructor
public class Stats {
    @Id
    private Integer id;

    @Column
    private Integer gamesPlayed;

    @Column
    private Integer gamesWon;

    @Column
    private Integer gamesLost;

    @EqualsAndHashCode.Exclude
    @ManyToOne
    @JoinColumn(name="user_id", nullable = false)
    private User user;
}
