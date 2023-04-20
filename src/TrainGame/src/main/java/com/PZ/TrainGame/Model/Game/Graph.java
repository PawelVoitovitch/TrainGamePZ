package com.PZ.TrainGame.Model.Game;

import java.util.*;

public class Graph {
    private Map<String, Vertex> vertices;

    public Graph() {
        vertices = new HashMap<>();
    }

    public void addVertex(Vertex vertex) {
        vertices.put(vertex.getId(), vertex);
    }

    public Vertex getVertex(String id) {
        return vertices.get(id);
    }

    public void addEdge(String sourceId, String targetId, String playerId) {
        Vertex source = getVertex(sourceId);
        Vertex target = getVertex(targetId);
        if (source != null && target != null) {
            source.addEdge(new Edge(playerId, target));
            target.addEdge(new Edge(playerId, source));
        }
    }

    public boolean hasPath(Vertex source, Vertex target, String playerId) {
        Set<Vertex> visited = new HashSet<>();
        LinkedList<Vertex> queue = new LinkedList<>();
        visited.add(source);
        queue.add(source);

        while (!queue.isEmpty()) {
            Vertex current = queue.poll();
            for (Edge edge : current.getEdges()) {
                Vertex neighbor = edge.getTarget();
                if (!visited.contains(neighbor) && edge.getPlayerId()!=null && edge.getPlayerId().equals(playerId)) {
                    visited.add(neighbor);
                    queue.add(neighbor);
                    if (neighbor.equals(target)) {
                        return true;
                    }
                }
            }
        }

        return false;
    }
}