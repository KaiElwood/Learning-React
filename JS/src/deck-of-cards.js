const myDeck = {
    deck: [],
    suits: ["hearts", "diamonds", "clubs", "spades"],
    values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
    makeDeck(){
        const { values, suits, deck } = this;
        for (let suit of suits){
            for (let value of values.split(",")){
                deck.push({value, suit});
            }
        }
    },
    drawCard(){
        return this.deck.pop()
    }
}