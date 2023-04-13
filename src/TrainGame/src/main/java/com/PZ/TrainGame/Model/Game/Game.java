package com.PZ.TrainGame.Model.Game;

import lombok.Data;

import java.util.List;
import java.util.Queue;

@Data
public class Game {
    private String id;
    private GameStatus status;
    private List<Player> players;
    private Queue<String> playersOrder;
    private List<TicketCard> ticketDeck;
    private List<TrainCard> trainDeck;
    private TrainCard[] visibleTrains;
    private List<BoardPlace> board;
}
