package com.PZ.TrainGame.DTOs;

import com.PZ.TrainGame.Model.Game.TicketCard;
import lombok.Data;

import java.util.ArrayList;

@Data
public class DrawTicketsDTO extends Turn{
    ArrayList<TicketCard> saved;
}
