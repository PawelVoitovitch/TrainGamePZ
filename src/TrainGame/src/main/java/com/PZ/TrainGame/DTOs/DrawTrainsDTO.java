package com.PZ.TrainGame.DTOs;

import com.PZ.TrainGame.Model.Game.TrainCard;
import lombok.Data;

import java.util.ArrayList;

@Data
public class DrawTrainsDTO extends Turn{
    ArrayList<TrainCard> fromVisible;
    ArrayList<TrainCard> blind;
}
