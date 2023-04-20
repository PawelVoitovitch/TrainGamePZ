package com.PZ.TrainGame.Model.Game;

public class Edge {
    private String playerId;
    private Vertex target;

    public Edge(String playerId, Vertex target) {
        this.playerId = playerId;
        this.target = target;
    }

    public String getPlayerId() {
        return playerId;
    }

    public Vertex getTarget() {
        return target;
    }
}
