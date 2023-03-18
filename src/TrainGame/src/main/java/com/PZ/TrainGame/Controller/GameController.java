package com.PZ.TrainGame.Controller;

import com.PZ.TrainGame.Model.Game.GamesStorage;
import com.PZ.TrainGame.Service.GameService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@AllArgsConstructor
@RequestMapping("/")
public class GameController {
    private final GameService gameService;



}
