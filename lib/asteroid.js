(function () {
  if(typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function(hash,game) {
    Asteroids.MovingObject.call(this, {
      pos: hash.pos,
      color: Asteroid.COLOR,
      radius: Asteroid.RADIUS,
      vel: Asteroids.Util.randomVec(3)
    }, game);
  };

  Asteroid.COLOR = "black";
  Asteroid.RADIUS = 25;

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.collideWith = function(otherObject) {
    if (otherObject instanceof Asteroids.Ship) {
      this.game.ship.relocate();
      this.game.remove(this);
    } else if (otherObject instanceof Asteroids.Bullet){
      this.game.remove(otherObject);
      this.game.remove(this);
    }

    if (otherObject instanceof Asteroid) {
      this.vel[0] = -1 * this.vel[0];
      this.vel[1] = -1 * this.vel[1];
      otherObject.vel[0] = -1 * otherObject.vel[0];
      otherObject.vel[1] = -1 * otherObject.vel[1];
      if (Asteroids.Util.tooClose(this.pos,otherObject.pos, 2 * Asteroid.RADIUS)) {
        this.move();
        otherObject.move();
      }
    }

  //   this.game.remove(this);
  };

})();
