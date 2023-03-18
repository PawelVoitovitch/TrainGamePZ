package com.PZ.TrainGame.Model.Game;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class BoardPlace {
    private Integer id;
    private Boolean isTaken;
    private String player;
    private Integer cost;
    private BoardPlaceColor color;
}
