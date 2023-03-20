package com.PZ.TrainGame.Model.Game;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class GamesStorage {
    private static Map<String,Game> games;
    private static GamesStorage instance;
    private GamesStorage(){
        games= new HashMap<>();
    }

    public static synchronized GamesStorage getInstance(){
        if(instance==null){
            instance= new GamesStorage();
        }
        return instance;
    }

    public void setGame(Game game) {
        games.put(game.getId(), game);
    }

    public static Map<String, Game> getGames() {
        return games;
    }
}
