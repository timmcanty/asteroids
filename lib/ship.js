(function () {
  if(typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }


  var Ship = Asteroids.Ship = function (game) {
    Asteroids.MovingObject.call(this, {
      pos: Asteroids.Game.randomPosition(),
      color: Ship.COLOR,
      radius: Ship.RADIUS,
      vel: [0,0]
    }, game)

  }


  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.relocate = function() {
      this.vel = [0,0];
      this.pos = Asteroids.Game.randomPosition();
  }


  Ship.RADIUS = 10;
  Ship.COLOR = 'blue';

  Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  }

  Ship.prototype.fireBullet = function() {
    var bullet = new Asteroids.Bullet({}, this.game);
    this.game.bullets.push(bullet);
  }


})();
