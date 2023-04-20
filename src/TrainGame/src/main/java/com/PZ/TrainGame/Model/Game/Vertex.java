package com.PZ.TrainGame.Model.Game;

import java.util.ArrayList;
import java.util.List;

public class Vertex {
    private String id;
    private List<Edge> edges;

    public Vertex(String id) {
        this.id = id;
        edges = new ArrayList<>();
    }

    public String getId() {
        return id;
    }

    public void addEdge(Edge edge) {
        edges.add(edge);
    }

    public List<Edge> getEdges() {
        return edges;
    }

    @Override
    public String toString() {
        return id;
    }
}
