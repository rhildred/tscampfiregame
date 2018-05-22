enum GameState{
    WELCOMING,
    GUESSING
}

export class TeaGame{
    private stateCur: GameState = GameState.WELCOMING;
    makeAMove(sInput: string){
        let sReply = "Grandma likes tea but she doesn't like oranges. What else would Gramdma like?";
        switch(this.stateCur){
            case GameState.WELCOMING:
                this.stateCur = GameState.GUESSING;
                break;
            case GameState.GUESSING:
                if(sInput.toLowerCase().match("t")){
                    sReply = "You are right Grandma does like " + sInput + ". What else would Grandma like?";                    
                }else{
                    sReply = "Grandma doesn't like " + sInput + " but she does like tea. What else would Grandma like?";
                }
                break;
        }
        return(sReply);
    }
}