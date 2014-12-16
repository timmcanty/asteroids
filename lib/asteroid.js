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


  }

  Asteroid.COLOR = "black";
  Asteroid.RADIUS = 25;

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.collideWith = function(otherObject) {
    if (otherObject instanceof Asteroids.Ship) {

      this.game.ship.relocate();
    } else {
      this.game.remove(otherObject);
    }

    this.game.remove(this);
  }

})();
