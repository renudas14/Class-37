class Player {
  constructor(){
    this.index=null;
    this.name=null;
    this.distance=0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

   static getPlayerinfo(){
    var playerinforef = database.ref("players")
    playerinforef.on("value",(data)=>{
      allplayer = data.val();
    })
  }
}
