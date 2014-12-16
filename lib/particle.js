(function () {
  if(typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  // hash = { pos: pos }
  var Particle = Asteroids.Particle = function(hash, game) {

    Asteroids.MovingObject.call(this, {
      pos: hash.pos,
      vel: hash.vel,
      color: Particle.COLOR,
      radius: Particle.RADIUS
    }, game);
  };

  Particle.COLOR = 'red';
  Particle.RADIUS = 15;
  Particle.SCALE = 0.9;
  Asteroids.Util.inherits(Particle, Asteroids.MovingObject);
  Particle.prototype.isWrappable = false;

  Particle.createExplosion = function(pos, game) {

    for (var angle=0; angle<360; angle+=45) {

      var speed = 5;
      var velX = Math.floor(speed * Math.cos(angle * Math.PI / 180));
      var velY = Math.floor(speed * Math.sin(angle * Math.PI / 180));
      var posDup = pos.slice();
      var particle = new Particle({pos: posDup, vel: [velX, velY]}, game);

      game.particles.push(particle);

    }
  };


  Particle.prototype.draw = function(ctx) {

    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2* Math.PI,
      false
    );

    ctx.fill();

    this.radius = Particle.SCALE * this.radius;

  }


})();
