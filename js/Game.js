class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",(data)=>{
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountref = await database.ref("playerCount").once("value");
      if(playerCountref.exists()){
        playerCount=playerCountref.val();
        player.getCount();
      }
      
      form = new Form()
      form.display();
    }
  }
  play(){
   form.hide()
   textSize(30)
   text("GAME START",120,100)
   Player.getPlayerinfo()
   if(allplayer!==undefined){
     var yposition =130;
     for(var plr in allplayer){
       if(plr==="player"+player.index){
         fill("red")
       }
       else{
         fill("black")
       }
       yposition=yposition+30;
       textSize(30)
       text(allplayer[plr].name + ":"+allplayer[plr].distance,120,yposition)
     }
   }
   if(keyDown(UP_ARROW)&&player.index!==null){
     player.distance=player.distance+10;
     player.update()
   }
  }
}
