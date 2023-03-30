package com.PZ.TrainGame.Controller;

import com.PZ.TrainGame.DTOs.ConnectDTO;
import com.PZ.TrainGame.Exceptions.GameNotFoundException;
import com.PZ.TrainGame.Model.Game.Game;
import com.PZ.TrainGame.Model.Game.Player;
import com.PZ.TrainGame.Service.GameService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
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


    @PostMapping(path = "/create")
    public Game createGame(@RequestBody String login){
        Game game = gameService.createGame(login);
        return game;
    }

    @PostMapping(path = "/join")
    public Game joinGame(@RequestBody ConnectDTO connectDTO){
        try {
            if(gameService.getGame(connectDTO.getGameId()).getPlayers().size()>=4)
                throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Game full");
            Game game = gameService.connectToGame(connectDTO.getPlayer(), connectDTO.getGameId());
            return game;
        }
        catch (Exception exception){
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "Game not found");
        }
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
}
