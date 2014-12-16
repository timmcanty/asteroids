(function () {
  if(typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Bullet = Asteroids.Bullet = function(hash,game) {
    // actually use hash!

    var posx = game.ship.pos[0] + Asteroids.Util.normVec(game.ship.vel, game.ship.radius)[0];
    var posy = game.ship.pos[1] + Asteroids.Util.normVec(game.ship.vel, game.ship.radius)[1];

    Asteroids.MovingObject.call(this, {
      pos: [posx, posy],
      vel: [game.ship.vel[0] * Bullet.SPEED, game.ship.vel[1] * Bullet.SPEED],
      color: Bullet.COLOR,
      radius: Bullet.RADIUS
    }, game)
  }


  Bullet.SPEED = 2;
  Bullet.COLOR = 'red';
  Bullet.RADIUS = 3;


  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);

  Bullet.prototype.isWrappable = false;


  Bullet.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroids.Asteroid) {
      this.game.remove(this);
      this.game.remove(otherObject);
    }
  }


})();
