package com.PZ.TrainGame.Model.Game;

public enum TicketCard {
    SaintLouis_SaltLakeCity(5),
    Houston_Miami(5),
    Chicago_Helena(5),
    Dallas_SanFrancisco(6),
    Toronto_NewOrleans(7),
    Hawaje_Portland(7),
    Miami_Phoenix(7),
    Hawaje_KansasCity(7),
    Dallas_SaltLakeCity(7),
    NewOrleans_Omaha(8),
    Winnipeg_Washington(8),
    Toronto_Portland(10),
    SaintLouis_Winnipeg(10),
    Boston_Miami(11),
    LosAngeles_Atlanta(13),
    Helena_Atlanta(13),
    Omaha_SanFrancisco(13),
    NewYork_Phoenix(13),
    Washington_Helena(16),
    SanFrancisco_Atlanta(20),
    Winnipeg_Miami(20),
    Seattle_NewYork(20),
    Portland_Miami(22),
    Boston_Hawaje(22);

    private int value;

    private TicketCard(int value){
        this.value=value;
    }

    public int getValue() {
        return value;
    }
}
