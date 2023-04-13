package com.PZ.TrainGame.Service;

import com.PZ.TrainGame.DTOs.DrawTicketsDTO;
import com.PZ.TrainGame.DTOs.DrawTrainsDTO;
import com.PZ.TrainGame.DTOs.PlaceTrainDTO;
import com.PZ.TrainGame.Model.Game.*;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.*;
import java.util.stream.Collectors;


@Service
@AllArgsConstructor
public class GameService {
    public Game createGame(String login){
        Game game = new Game();
        game.setId(UUID.randomUUID().toString());
        game.setStatus(GameStatus.NEW);
        //player
        Player player = new Player();
        player.setLogin(login);
        player.setPlayerColor(PlayerColor.BLUE);
        player.setPoints(0);
        player.setTrains(35);
        player.setTicketCards(new ArrayList<TicketCard>());
        player.setTrainCards(new ArrayList<TrainCard>());
        game.setPlayers(new ArrayList<Player>());
        game.getPlayers().add(player);
        //playerOrder
        game.setPlayersOrder(new LinkedList<String>());
        game.getPlayersOrder().add(login);
        //TrainDeck
        ArrayList<TrainCard> trainDeck= new ArrayList<>();
        for (int i = 0; i<10; i++){
            trainDeck.add(TrainCard.PINK);
            trainDeck.add(TrainCard.WHITE);
            trainDeck.add(TrainCard.BLUE);
            trainDeck.add(TrainCard.YELLOW);
            trainDeck.add(TrainCard.ORANGE);
            trainDeck.add(TrainCard.BLACK);
            trainDeck.add(TrainCard.RED);
            trainDeck.add(TrainCard.GREEN);
            trainDeck.add(TrainCard.RAINBOW);
        }
        trainDeck.add(TrainCard.RAINBOW);
        trainDeck.add(TrainCard.RAINBOW);
        Collections.shuffle(trainDeck,new Random());
        game.setVisibleTrains(new TrainCard[]{trainDeck.get(0),trainDeck.get(1),trainDeck.get(2),trainDeck.get(3),trainDeck.get(4)});
        for (int i = 0; i < 5; i++)
            trainDeck.remove(0);
        game.setTrainDeck(trainDeck);
        //ticketDeck
        ArrayList<TicketCard> ticketDeck = new ArrayList<>();
        ticketDeck.add(TicketCard.SaintLouis_SaltLakeCity);
        ticketDeck.add(TicketCard.Houston_Miami);
        ticketDeck.add(TicketCard.Chicago_Helena);
        ticketDeck.add(TicketCard.Dallas_SanFrancisco);
        ticketDeck.add(TicketCard.Toronto_NewOrleans);
        ticketDeck.add(TicketCard.Hawaje_Portland);
        ticketDeck.add(TicketCard.Miami_Phoenix);
        ticketDeck.add(TicketCard.Hawaje_KansasCity);
        ticketDeck.add(TicketCard.Dallas_SaltLakeCity);
        ticketDeck.add(TicketCard.NewOrleans_Omaha);
        ticketDeck.add(TicketCard.Winnipeg_Washington);
        ticketDeck.add(TicketCard.Toronto_Portland);
        ticketDeck.add(TicketCard.SaintLouis_Winnipeg);
        ticketDeck.add(TicketCard.Boston_Miami);
        ticketDeck.add(TicketCard.LosAngeles_Atlanta);
        ticketDeck.add(TicketCard.Helena_Atlanta);
        ticketDeck.add(TicketCard.Omaha_SanFrancisco);
        ticketDeck.add(TicketCard.NewYork_Phoenix);
        ticketDeck.add(TicketCard.Washington_Helena);
        ticketDeck.add(TicketCard.SanFrancisco_Atlanta);
        ticketDeck.add(TicketCard.Winnipeg_Miami);
        ticketDeck.add(TicketCard.Seattle_NewYork);
        ticketDeck.add(TicketCard.Portland_Miami);
        ticketDeck.add(TicketCard.Boston_Hawaje);
        Collections.shuffle(ticketDeck,new Random());
        game.setTicketDeck(ticketDeck);
        //Board
        ArrayList<BoardPlace> board = new ArrayList<>();
        board.add(new BoardPlace(1,false,null,6,BoardPlaceColor.GREY));
        board.add(new BoardPlace(2,false,null,3,BoardPlaceColor.GREY));
        board.add(new BoardPlace(3,false,null,3,BoardPlaceColor.GREY));
        board.add(new BoardPlace(4,false,null,3,BoardPlaceColor.GREY));
        board.add(new BoardPlace(5,false,null,5,BoardPlaceColor.RED));
        board.add(new BoardPlace(6,false,null,5,BoardPlaceColor.ORANGE));
        board.add(new BoardPlace(7,false,null,2,BoardPlaceColor.BLACK));
        board.add(new BoardPlace(8,false,null,2,BoardPlaceColor.YELLOW));
        board.add(new BoardPlace(9,false,null,2,BoardPlaceColor.BLACK));
        board.add(new BoardPlace(10,false,null,1,BoardPlaceColor.WHITE));
        board.add(new BoardPlace(11,false,null,1,BoardPlaceColor.ORANGE));
        board.add(new BoardPlace(12,false,null,3,BoardPlaceColor.BLUE));
        board.add(new BoardPlace(13,false,null,3,BoardPlaceColor.BLACK));
        board.add(new BoardPlace(14,false,null,4,BoardPlaceColor.GREEN));
        board.add(new BoardPlace(15,false,null,5,BoardPlaceColor.PINK));
        board.add(new BoardPlace(16,false,null,3,BoardPlaceColor.WHITE));
        board.add(new BoardPlace(17,false,null,2,BoardPlaceColor.GREY));
        board.add(new BoardPlace(18,false,null,2,BoardPlaceColor.BLUE));
        board.add(new BoardPlace(19,false,null,5,BoardPlaceColor.BLACK));
        board.add(new BoardPlace(20,false,null,6,BoardPlaceColor.GREY));
        board.add(new BoardPlace(21,false,null,2,BoardPlaceColor.ORANGE));
        board.add(new BoardPlace(22,false,null,2,BoardPlaceColor.PINK));
        board.add(new BoardPlace(23,false,null,2,BoardPlaceColor.RED));
        board.add(new BoardPlace(24,false,null,2,BoardPlaceColor.BLACK));
        board.add(new BoardPlace(25,false,null,2,BoardPlaceColor.ORANGE));
        board.add(new BoardPlace(26,false,null,2,BoardPlaceColor.YELLOW));
        board.add(new BoardPlace(27,false,null,4,BoardPlaceColor.PINK));
        board.add(new BoardPlace(28,false,null,3,BoardPlaceColor.RED));
        board.add(new BoardPlace(29,false,null,5,BoardPlaceColor.YELLOW));
        board.add(new BoardPlace(30,false,null,2,BoardPlaceColor.WHITE));
        board.add(new BoardPlace(31,false,null,2,BoardPlaceColor.WHITE));
        board.add(new BoardPlace(32,false,null,2,BoardPlaceColor.BLUE));
        board.add(new BoardPlace(33,false,null,1,BoardPlaceColor.GREY));
        board.add(new BoardPlace(34,false,null,1,BoardPlaceColor.GREY));
        board.add(new BoardPlace(35,false,null,3,BoardPlaceColor.GREEN));
        board.add(new BoardPlace(36,false,null,1,BoardPlaceColor.GREY));
        board.add(new BoardPlace(37,false,null,1,BoardPlaceColor.GREY));
        board.add(new BoardPlace(38,false,null,3,BoardPlaceColor.GREY));
        board.add(new BoardPlace(39,false,null,3,BoardPlaceColor.RED));
        board.add(new BoardPlace(40,false,null,2,BoardPlaceColor.WHITE));
        board.add(new BoardPlace(41,false,null,2,BoardPlaceColor.BLUE));
        board.add(new BoardPlace(42,false,null,3,BoardPlaceColor.YELLOW));
        board.add(new BoardPlace(43,false,null,1,BoardPlaceColor.GREEN));
        board.add(new BoardPlace(44,false,null,1,BoardPlaceColor.BLACK));
        board.add(new BoardPlace(45,false,null,1,BoardPlaceColor.GREY));
        board.add(new BoardPlace(46,false,null,1,BoardPlaceColor.GREY));
        board.add(new BoardPlace(47,false,null,3,BoardPlaceColor.ORANGE));
        board.add(new BoardPlace(48,false,null,5,BoardPlaceColor.WHITE));
        board.add(new BoardPlace(49,false,null,3,BoardPlaceColor.YELLOW));
        board.add(new BoardPlace(50,false,null,2,BoardPlaceColor.BLUE));
        board.add(new BoardPlace(51,false,null,2,BoardPlaceColor.RED));
        board.add(new BoardPlace(52,false,null,1,BoardPlaceColor.GREY));
        board.add(new BoardPlace(53,false,null,1,BoardPlaceColor.GREY));
        board.add(new BoardPlace(54,false,null,3,BoardPlaceColor.GREEN));
        board.add(new BoardPlace(55,false,null,2,BoardPlaceColor.PINK));
        board.add(new BoardPlace(56,false,null,3,BoardPlaceColor.GREY));
        board.add(new BoardPlace(57,false,null,3,BoardPlaceColor.GREY));
        board.add(new BoardPlace(58,false,null,1,BoardPlaceColor.GREY));
        board.add(new BoardPlace(59,false,null,2,BoardPlaceColor.ORANGE));
        board.add(new BoardPlace(60,false,null,2,BoardPlaceColor.PINK));
        board.add(new BoardPlace(61,false,null,4,BoardPlaceColor.GREEN));
        board.add(new BoardPlace(62,false,null,4,BoardPlaceColor.BLUE));
        board.add(new BoardPlace(63,false,null,3,BoardPlaceColor.GREY));
        game.setBoard(board);

        GamesStorage.getInstance().setGame(game);

        return game;

    }

    public boolean isGameCreated(String gameId){
        return (GamesStorage.getInstance().getGames().get(gameId)!=null);
    }

    public Game getGame(String gameId){
        return GamesStorage.getInstance().getGames().get(gameId);
    }
    public Game connectToGame(String login, String gameId){
        Game game = GamesStorage.getInstance().getGames().get(gameId);
        if(game == null)
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Game of this id has not been found!");
        if(game.getPlayers().size()>=4)
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Game full");
        Player player = new Player();
        player.setLogin(login);
        if(game.getPlayers().size()==1)
            player.setPlayerColor(PlayerColor.RED);
        if(game.getPlayers().size()==2)
            player.setPlayerColor(PlayerColor.GREEN);
        if(game.getPlayers().size()==3)
            player.setPlayerColor(PlayerColor.YELLOW);
        player.setPoints(0);
        player.setTrains(35);
        player.setTicketCards(new ArrayList<TicketCard>());
        player.setTrainCards(new ArrayList<TrainCard>());
        game.getPlayers().add(player);
        if(game.getPlayers().size()==4)
            game.setStatus(GameStatus.INPROGRESS);
        GamesStorage.getInstance().setGame(game);
        return game;
    }

    public Game turn(DrawTicketsDTO drawTicketsDTO) {
        Game game = GamesStorage.getInstance().getGames().get(drawTicketsDTO.getGameId());
        Player player = game.getPlayers().stream()
                .filter(player1 -> drawTicketsDTO.getPlayer().equals(player1.getLogin()))
                .findFirst()
                .orElse(null);

        if(player==null)
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "You are not playing this game.");

        if(!player.getLogin().equals(game.getPlayersOrder().element()))
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Not your turn.");

        player.getTicketCards().addAll(drawTicketsDTO.getSaved());
        for (int i=0; i<drawTicketsDTO.getSaved().size(); i++)
            game.getTicketDeck().remove(0);

        game.getPlayersOrder().add(game.getPlayersOrder().poll());

        return game;
    }

    public Game turn(DrawTrainsDTO drawTrainsDTO) {
        Game game = GamesStorage.getInstance().getGames().get(drawTrainsDTO.getGameId());
        Player player = game.getPlayers().stream()
                .filter(player1 -> drawTrainsDTO.getPlayer().equals(player1.getLogin()))
                .findFirst()
                .orElse(null);

        if(player==null)
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "You are not playing this game.");

        if(!player.getLogin().equals(game.getPlayersOrder().element()))
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Not your turn.");

        if(!drawTrainsDTO.getBlind().isEmpty()) {
            for (TrainCard trainCard : drawTrainsDTO.getBlind()) {
                player.getTrainCards().add(trainCard);
                game.getTicketDeck().remove(0);
            }
        }

        if(!drawTrainsDTO.getFromVisible().isEmpty()) {
            for (TrainCard trainCard : drawTrainsDTO.getFromVisible()) {
                player.getTrainCards().add(trainCard);
                for(int i=0; i<5; i++){
                    if(game.getVisibleTrains()[i].equals(trainCard)){
                        game.getVisibleTrains()[i]=game.getTrainDeck().remove(0);
                        break;
                    }
                }
            }
        }

        game.getPlayersOrder().add(game.getPlayersOrder().poll());

        return game;
    }

    public Game turn(PlaceTrainDTO placeTrainDTO) {
        Game game = GamesStorage.getInstance().getGames().get(placeTrainDTO.getGameId());
        Player player = game.getPlayers().stream()
                .filter(player1 -> placeTrainDTO.getPlayer().equals(player1.getLogin()))
                .findFirst()
                .orElse(null);

        if(player==null)
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "You are not playing this game.");

        if(!player.getLogin().equals(game.getPlayersOrder().element()))
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Not your turn.");

        BoardPlace boardPlace = game.getBoard().get(placeTrainDTO.getBoardPlaceId()-1);

        if(!boardPlace.getColor().toString().equals(placeTrainDTO.getUsed().toString()) && !placeTrainDTO.getUsed().equals(TrainCard.RAINBOW) && !boardPlace.getColor().equals(BoardPlaceColor.GREY))//dopisz
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Not enough resources.");

        for(int i = 0; i<boardPlace.getCost(); i++){
            player.getTrainCards().remove(placeTrainDTO.getUsed());
        }
        boardPlace.setIsTaken(Boolean.TRUE);
        boardPlace.setPlayer(player.getLogin());

        player.setTrains(player.getTrains()-boardPlace.getCost());

        Integer points = switch (boardPlace.getCost()) {
            case 1 -> 1;
            case 2 -> 2;
            case 3 -> 4;
            case 4 -> 7;
            case 5 -> 10;
            case 6 -> 15;
            default -> 0;
        };

        player.setPoints(player.getPoints()+points);

        game.getPlayersOrder().add(game.getPlayersOrder().poll());

        if(player.getTrains()<4)
            endGame(game);

        return game;
    }

    private Game endGame(Game game){
        game.setStatus(GameStatus.ENDED);
        checkTickets(game);
        return game;
    }

    private Game checkTickets(Game game){
        return game;
    }
}
