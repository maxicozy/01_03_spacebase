class Invader {
  constructor(posX, posY, appearance, id) {
    this.posX = posX;
    this.posY =posY;
    this.appearance = appearance;
    this.id = id;
  }

  shootLaser() {
    console.log("Invader " +this.id+" Laser shot")
  }

  explode() {
    console.log("Invader "+this.id+" exploded")
  }
  
  isHitByBullet(bulletX, bulletY) {
    //prüfen ob der Bullet den Invader trifft
  }

  static generateInvader(width, height) {
      let currentInvader = [];
      for (let y = 0; y < height; y++) {
        currentInvader[y] = " ".repeat(width*2+1);
        for (let x = 0; x < width; x++) {
          let randomNumber = Math.random();
          if (randomNumber >= 0.5) {
            currentInvader[y] = (setCharsAt(currentInvader[y], x,'▧'));
            currentInvader[y] = (setCharsAt(currentInvader[y], 2 * width - x,'▨'));
          }
        }
      } 
      return currentInvader; 
    
  }
}

let inv = new Invader(1,1,0,0,Invader.generateInvader(),1)


module.exports = Invader;