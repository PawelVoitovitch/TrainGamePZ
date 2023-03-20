package com.PZ.TrainGame.Model.Game;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Player {
    private String login;
    private PlayerColor playerColor;
    private Integer points;
    private Integer trains;
    private List<TrainCard> trainCards;
    private List<TicketCard> ticketCards;
}
