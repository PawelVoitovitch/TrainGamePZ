package com.PZ.TrainGame.Controller;

import com.PZ.TrainGame.DTOs.ConnectDTO;
import com.PZ.TrainGame.DTOs.DrawTicketsDTO;
import com.PZ.TrainGame.DTOs.DrawTrainsDTO;
import com.PZ.TrainGame.DTOs.PlaceTrainDTO;
import com.PZ.TrainGame.Exceptions.GameNotFoundException;
import com.PZ.TrainGame.Model.Game.Game;
import com.PZ.TrainGame.Model.Game.Player;
import com.PZ.TrainGame.Service.GameService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@CrossOrigin
@Slf4j
@AllArgsConstructor
@RequestMapping(path = "/game")
public class GameController {
    private final GameService gameService;
    private final SimpMessagingTemplate simpMessagingTemplate;

    @PostMapping(path = "/create")
    public Game createGame(@RequestBody String login){
        Game game = gameService.createGame(login);
        return game;
    }

    @PostMapping(path = "/join")
    public Game joinGame(@RequestBody ConnectDTO connectDTO){
        try {

            Game game = gameService.connectToGame(connectDTO.getPlayer(), connectDTO.getGameId());
            return game;
        }
        catch (Exception exception){
            throw exception;
        }
//            throw new ResponseStatusException(
//                    HttpStatus.NOT_FOUND, "Game of this Id not found");
//        }
    }

    @RequestMapping(path = "/{gameId}/players", method = RequestMethod.GET)
    public List<Player> getPlayers(@PathVariable String gameId) {
        try {
            Game game = gameService.getGame(gameId);
            return game.getPlayers();
        } catch (Exception exception) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "Game not found");
        }
    }

    @PostMapping(path = "/turn/drawTickets")
    public Game turn(@RequestBody DrawTicketsDTO drawTicketsDTO){
        try {
            Game game = gameService.turn(drawTicketsDTO);
            simpMessagingTemplate.convertAndSend("/topic/game-progress/" + game.getId(), game);
            return game;
        }
        catch (Exception e){
            throw e;
        }
    }

    @PostMapping(path = "/turn/drawTrains")
    public Game turn(@RequestBody DrawTrainsDTO drawTrainsDTO){
        try {
            Game game = gameService.turn(drawTrainsDTO);
            simpMessagingTemplate.convertAndSend("/topic/game-progress/" + game.getId(), game);
            return game;
        }
        catch (Exception e){
            throw e;
        }
    }

    @PostMapping(path = "/turn/place")
    public Game turn(@RequestBody PlaceTrainDTO placeTrainDTO){
        try {
            Game game = gameService.turn(placeTrainDTO);
            simpMessagingTemplate.convertAndSend("/topic/game-progress/" + game.getId(), game);
            return game;
        }
        catch (Exception e){
            throw e;
        }
    }
}
