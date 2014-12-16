(function () {
  if(typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Bullet = Asteroids.Bullet = function(hash,game) {

    Asteroids.MovingObject.call(this, {
      pos: hash.pos,
      vel: [hash.vel[0] * Bullet.SPEED, hash.vel[1] * Bullet.SPEED],
      color: Bullet.COLOR,
      radius: Bullet.RADIUS
    }, game)
  };


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
  };


})();
