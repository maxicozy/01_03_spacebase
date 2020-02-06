class Helper {
  static 	setCharsAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+chr.length);
  }
}

class Invader {
  constructor(appearance, ischBinKaputt, explodeTime, id) {
    this.appearance = appearance;
    this.id = id;
    this.ischBinKaputt = ischBinKaputt;
    this.explodeTime = explodeTime;
}

  shootLaser() {
    console.log("Invader " +this.id+" Laser shot")
  }

  explode() {
    this.appearance = ["                ", "   \\   |   /    ", " -  p u f f  -  ", "   /   |   \\    ",  "                "];
  }
}

class InvaderRow {
  constructor(posX, posY, width, height, invaders, id) {
    this.id = id;
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.invaders = invaders;
  }

  step(direction) {
    if (direction == 1) {
      this.posX += 1;
    }
    if (direction == -1) {
      this.posX -=1;
    }
    if (direction == "down") {
      this.posY += 1;
    }
  }

  static generateInvader(width, height) {
    let currentInvader = [];
    for (let y = 0; y < height; y++) {
      currentInvader[y] = " ".repeat(width*2+1);
      for (let x = 0; x < width; x++) {
        let randomNumber = Math.random();
        if (randomNumber >= 0.5) {
          currentInvader[y] = (Helper.setCharsAt(currentInvader[y], x,'#'));
          currentInvader[y] = (Helper.setCharsAt(currentInvader[y], 2 * width - x,'#'));
        }
      }
    }
    return currentInvader;
  }
  
  static generateInvaderRow(invaderWidth, invaderHeight) {
    let currentInvaders = [];
    let rowWidth = Math.floor(cols*0.8);
    let wholeInvader = invaderWidth * 2;
    let spacerWidth = invaderWidth/2; 
    let numInvaders = Math.floor((rowWidth / ((wholeInvader+spacerWidth))));
    let invaderAppearance = InvaderRow.generateInvader(invaderWidth, invaderHeight);
    //let numInvaders = Math.floor(spacing);
			for(let i = 0; i < numInvaders ; i++) { // gerundet(x = ((breite - breite*0,2) / invaderbreite) + (x - 1) * invaderbreite/2 ))
        let newInv = new Invader(invaderAppearance, false, 0, i);
        currentInvaders.push(newInv);
			}
		return currentInvaders;
  }
}