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

    public Game checkTickets(Game game){
        Graph graph = new Graph();

        //dodanie vertexów - miasta
        Vertex seattle = new Vertex("Seattle");
        Vertex portland = new Vertex("Portland");
        Vertex sanFrancisco = new Vertex("SanFrancisco");
        Vertex losAngeles = new Vertex("LosAngeles");
        Vertex hawaje = new Vertex("Hawaje");
        Vertex phoenix = new Vertex("Phoenix");
        Vertex saltLakeCity = new Vertex("SaltLakeCity");
        Vertex helena = new Vertex("Helena");
        Vertex winnipeg = new Vertex("Winnipeg");
        Vertex denver = new Vertex("Denver");
        Vertex omaha = new Vertex("Omaha");
        Vertex kansasCity = new Vertex("KansasCity");
        Vertex chicago = new Vertex("Chicago");
        Vertex saintLouis = new Vertex("SaintLouis");
        Vertex dallas = new Vertex("Dallas");
        Vertex houston = new Vertex("Houston");
        Vertex newOrleans = new Vertex("NewOrleans");
        Vertex miami = new Vertex("Miami");
        Vertex atlanta = new Vertex("Atlanta");
        Vertex washington = new Vertex("Washington");
        Vertex newYork = new Vertex("NewYork");
        Vertex boston = new Vertex("Boston");
        Vertex toronto = new Vertex("Toronto");

        graph.addVertex(seattle);
        graph.addVertex(portland);
        graph.addVertex(sanFrancisco);
        graph.addVertex(losAngeles);
        graph.addVertex(hawaje);
        graph.addVertex(phoenix);
        graph.addVertex(saltLakeCity);
        graph.addVertex(helena);
        graph.addVertex(winnipeg);
        graph.addVertex(denver);
        graph.addVertex(omaha);
        graph.addVertex(kansasCity);
        graph.addVertex(chicago);
        graph.addVertex(saintLouis);
        graph.addVertex(dallas);
        graph.addVertex(houston);
        graph.addVertex(newOrleans);
        graph.addVertex(miami);
        graph.addVertex(atlanta);
        graph.addVertex(washington);
        graph.addVertex(newYork);
        graph.addVertex(boston);
        graph.addVertex(toronto);

        List<BoardPlace> board = game.getBoard();

        //dodanie edge-ów - tras
        graph.addEdge(hawaje.getId(), houston.getId(), board.get(0).getPlayer());
        graph.addEdge(hawaje.getId(), phoenix.getId(), board.get(1).getPlayer());
        graph.addEdge(hawaje.getId(), losAngeles.getId(), board.get(2).getPlayer());
        graph.addEdge(hawaje.getId(), losAngeles.getId(), board.get(3).getPlayer());
        graph.addEdge(hawaje.getId(), sanFrancisco.getId(), board.get(4).getPlayer());
        graph.addEdge(hawaje.getId(), sanFrancisco.getId(), board.get(5).getPlayer());
        graph.addEdge(sanFrancisco.getId(), losAngeles.getId(), board.get(6).getPlayer());
        graph.addEdge(sanFrancisco.getId(), losAngeles.getId(), board.get(7).getPlayer());
        graph.addEdge(sanFrancisco.getId(), portland.getId(), board.get(8).getPlayer());
        graph.addEdge(portland.getId(), seattle.getId(), board.get(9).getPlayer());
        graph.addEdge(portland.getId(), seattle.getId(), board.get(10).getPlayer());
        graph.addEdge(portland.getId(), saltLakeCity.getId(), board.get(11).getPlayer());
        graph.addEdge(seattle.getId(), saltLakeCity.getId(), board.get(12).getPlayer());
        graph.addEdge(seattle.getId(), helena.getId(), board.get(13).getPlayer());
        graph.addEdge(seattle.getId(), winnipeg.getId(), board.get(14).getPlayer());
        graph.addEdge(losAngeles.getId(), saltLakeCity.getId(), board.get(15).getPlayer());
        graph.addEdge(losAngeles.getId(), phoenix.getId(), board.get(16).getPlayer());
        graph.addEdge(helena.getId(), winnipeg.getId(), board.get(17).getPlayer());
        graph.addEdge(winnipeg.getId(), toronto.getId(), board.get(18).getPlayer());
        graph.addEdge(winnipeg.getId(), boston.getId(), board.get(19).getPlayer());
        graph.addEdge(saltLakeCity.getId(), helena.getId(), board.get(20).getPlayer());
        graph.addEdge(helena.getId(), denver.getId(), board.get(21).getPlayer());
        graph.addEdge(helena.getId(), omaha.getId(), board.get(22).getPlayer());
        graph.addEdge(saltLakeCity.getId(), phoenix.getId(), board.get(23).getPlayer());
        graph.addEdge(saltLakeCity.getId(), phoenix.getId(), board.get(24).getPlayer());
        graph.addEdge(saltLakeCity.getId(), denver.getId(), board.get(25).getPlayer());
        graph.addEdge(phoenix.getId(), houston.getId(), board.get(26).getPlayer());
        graph.addEdge(phoenix.getId(), dallas.getId(), board.get(27).getPlayer());
        graph.addEdge(phoenix.getId(), kansasCity.getId(), board.get(28).getPlayer());
        graph.addEdge(phoenix.getId(), denver.getId(), board.get(29).getPlayer());
        graph.addEdge(denver.getId(), omaha.getId(), board.get(30).getPlayer());
        graph.addEdge(denver.getId(), kansasCity.getId(), board.get(31).getPlayer());
        graph.addEdge(dallas.getId(), houston.getId(), board.get(32).getPlayer());
        graph.addEdge(dallas.getId(), houston.getId(), board.get(33).getPlayer());
        graph.addEdge(dallas.getId(), saintLouis.getId(), board.get(34).getPlayer());
        graph.addEdge(houston.getId(), newOrleans.getId(), board.get(35).getPlayer());
        graph.addEdge(houston.getId(), newOrleans.getId(), board.get(36).getPlayer());
        graph.addEdge(houston.getId(), saintLouis.getId(), board.get(37).getPlayer());
        graph.addEdge(newOrleans.getId(), miami.getId(), board.get(38).getPlayer());
        graph.addEdge(newOrleans.getId(), atlanta.getId(), board.get(39).getPlayer());
        graph.addEdge(newOrleans.getId(), atlanta.getId(), board.get(40).getPlayer());
        graph.addEdge(newOrleans.getId(), saintLouis.getId(), board.get(41).getPlayer());
        graph.addEdge(kansasCity.getId(), saintLouis.getId(), board.get(42).getPlayer());
        graph.addEdge(kansasCity.getId(), saintLouis.getId(), board.get(43).getPlayer());
        graph.addEdge(omaha.getId(), kansasCity.getId(), board.get(44).getPlayer());
        graph.addEdge(omaha.getId(), kansasCity.getId(), board.get(45).getPlayer());
        graph.addEdge(omaha.getId(), chicago.getId(), board.get(46).getPlayer());
        graph.addEdge(omaha.getId(), toronto.getId(), board.get(47).getPlayer());
        graph.addEdge(chicago.getId(), toronto.getId(), board.get(48).getPlayer());
        graph.addEdge(toronto.getId(), boston.getId(), board.get(49).getPlayer());
        graph.addEdge(boston.getId(), newYork.getId(), board.get(50).getPlayer());
        graph.addEdge(saintLouis.getId(), chicago.getId(), board.get(51).getPlayer());
        graph.addEdge(saintLouis.getId(), chicago.getId(), board.get(52).getPlayer());
        graph.addEdge(chicago.getId(), newYork.getId(), board.get(53).getPlayer());
        graph.addEdge(saintLouis.getId(), atlanta.getId(), board.get(54).getPlayer());
        graph.addEdge(saintLouis.getId(), washington.getId(), board.get(55).getPlayer());
        graph.addEdge(saintLouis.getId(), newYork.getId(), board.get(56).getPlayer());
        graph.addEdge(newYork.getId(), washington.getId(), board.get(57).getPlayer());
        graph.addEdge(newYork.getId(), washington.getId(), board.get(58).getPlayer());
        graph.addEdge(washington.getId(), atlanta.getId(), board.get(59).getPlayer());
        graph.addEdge(washington.getId(), miami.getId(), board.get(60).getPlayer());
        graph.addEdge(washington.getId(), miami.getId(), board.get(61).getPlayer());
        graph.addEdge(atlanta.getId(), miami.getId(), board.get(62).getPlayer());

        List<Player> players = game.getPlayers();
        for (Player player : players) {
            List<TicketCard> ticketCards = player.getTicketCards();
            for (TicketCard tC : ticketCards){
                String startCity = tC.name().split("_")[0];
                String endCity = tC.name().split("_")[1];

                boolean connected = graph.hasPath(graph.getVertex(startCity), graph.getVertex(endCity), player.getLogin());
                if (connected) player.setPoints(player.getPoints()+tC.getValue());
            }
        }

        game.setPlayers(players);
        return game;
    }
}
