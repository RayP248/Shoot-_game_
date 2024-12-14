function program() {
  title("Shoot!");
  size(400, 400);

  // All code goes here
  /**
	This game requires a lot of practice. If you have any recommendations write them in the T&T (Tips & Thanks) section. You can use "h" key to heal. You can only heal once.
	Version: 1.0.0 Beta.
	Please upvote my game if you like it!
	How To Play:
	    Use Arrow Keys:
	    __________
	    |~~~| • Up|__
	    |~~~| • Down|
	    |~~~| • Left|_
	    |~~~| • Right|
	    ¯¯¯¯¯¯¯¯¯¯¯¯¯
	Mode Options:
	    ______________
	    |Difficulties:|
	    ¯¯¯¯¯¯¯¯¯¯¯¯¯¯
	    ~~~| • Super Easy
	    ~~~| • Easy
	    ~~~| • Normal
	    ~~~| • Hard
	    ~~~| • Very Hard
	    ~~~| • Impossible
	    --------------
	    ___________
	    |FuN MoDeS:|
	    ¯¯¯¯¯¯¯¯¯¯¯
	    ~~~| • God Mode
	    ~~~| • Infinite
	    ~~~| • The Necromancer *Still In Progress/Coming Soon*
	    --------------
	    - .... .- -. -.- ... /..-. --- .-./.--. .-.. .- -.-- .. -. --./-- -.--/--. .- -- ./-.-.--
	    |         ^
	    Morse Code|
	    Translates to: Thanks For Playing My Game!
	    Big Thanks To All These People For Helping Me:
	    |_____
	    |David|   _______________  ________  _____________
	    |Weaver| |@LarrySerflaten||@BobLyon||@polymartin21|     |¯¯¯¯¯¯   ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯  ¯¯¯¯¯¯¯¯  ¯¯¯¯¯¯¯¯¯¯¯¯¯
	    |
	    |__
	    |My|   _____________   ________
	    |Mom| |@arjenstavast| |@AltOfF4|
	    |¯¯¯   ¯¯¯¯¯¯¯¯¯¯¯¯¯   ¯¯¯¯¯¯¯¯
	    |
	    |◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊
	    |
	    |‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰
	    |ııııııııııııııııııııııııııııııııııııı

	    TODO:
	    ~~~| • Finish Powerups and Bombers.
	    ~~~| • Make stuff more detailed.
	    ~~~| •
	    ~~~| •
	**/
  println(
    "If you want a version of this game that has an automatic save go to this link: https://openprocessing.org/sketch/1990210 Instructions are the same. "
  );
  /**
	This game requires a lot of practice. If you have any recommendations write them in the T&T (Tips & Thanks) section. You can use "h" key to heal. You can only heal once. This is made on local storage so it saves automatically. NOTICE: Don't even think about going into local storage and changing your points. Why, you ask? Well, this wasn't expected but it prevents you from changing it from there.
	Version: 1.0.0 Beta.
	Please upvote my game if you like it!
	How To Play:
	    Use Arrow Keys:
	    __________
	    |~~~| • Up|__
	    |~~~| • Down|
	    |~~~| • Left|_
	    |~~~| • Right|
	    ¯¯¯¯¯¯¯¯¯¯¯¯¯
	Mode Options:
	    ______________
	    |Difficulties:|
	    ¯¯¯¯¯¯¯¯¯¯¯¯¯¯
	    ~~~| • Super Easy
	    ~~~| • Easy
	    ~~~| • Normal
	    ~~~| • Hard
	    ~~~| • Very Hard
	    ~~~| • Impossible
	    --------------
	    ___________
	    |FuN MoDeS:|
	    ¯¯¯¯¯¯¯¯¯¯¯
	    ~~~| • God Mode
	    ~~~| • Infinite
	    ~~~| • The Necromancer *Still In Progress/Coming Soon*
	    --------------
	    - .... .- -. -.- ... /..-. --- .-./.--. .-.. .- -.-- .. -. --./-- -.--/--. .- -- ./-.-.--
	    |         ^
	    Morse Code|
	    Translates to: Thanks For Playing My Game!
	    Big Thanks To All These People For Helping Me:
	    |_____
	    |David|   _______________  ________  _____________
	    |Weaver| |@LarrySerflaten||@BobLyon||@polymartin21|     |¯¯¯¯¯¯   ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯  ¯¯¯¯¯¯¯¯  ¯¯¯¯¯¯¯¯¯¯¯¯¯
	    |
	    |__
	    |My|   _____________   ________
	    |Mom| |@arjenstavast| |@AltOfF4|
	    |¯¯¯   ¯¯¯¯¯¯¯¯¯¯¯¯¯   ¯¯¯¯¯¯¯¯
	    |
	    |◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊◊
	    |
	    |‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰
	    |ııııııııııııııııııııııııııııııııııııı

	    TODO:
	    ~~~| • Finish Powerups and Bombers.
	    ~~~| • Make stuff more detailed.
	    ~~~| •
	    ~~~| •
	**/

  //Code[
  var mode = "";
  var keys = [];
  keyPressed = function () {
    keys[keyCode] = true;
  };
  keyReleased = function () {
    keys[keyCode] = false;
  };
  //please don't mess with too many variables, may not work as expected if you do
  //a bunch of variables [
  //[------------------------
  var IA;

  var QA;
  //]---------------------
  //[---------------------

  var x = 30;

  var w = 300;

  var h = 50;

  var rectX = 45;

  var rectY = 120;

  var rectX2 = 45;

  var rectY2 = 175;

  var w2 = 300;

  var h2 = 50;

  var txtSize = 60;

  var rectFill = 205;

  var rectFill2 = 205;

  //]---------------------
  //[-------------------------

  var b1LineX = 295;

  var b1LineY = 70;

  var b1LineX2 = 95;

  var b1LineY2 = 170;

  //]---------------------
  //[-------------------------
  var b2LineX = 145;

  var b2LineY = 275;

  var b2LineX2 = 145;

  var b2LineY2 = 175;

  //]---------------------
  //[------------------------
  var randomStarsX;

  var randomStarsY;
  //]---------------------
  //[-------------------------
  var playerOBJ = {
    x: 205,
    y: 325,
    laserDm: 1,
    maxHealth: 100,
    health: 100,
    points: 0,
  };
  if (isNaN(playerOBJ.points)) {
    playerOBJ.points = 0;
  }
  //]---------------------
  //[-------------------------
  var howMuchMove = 5;
  //]---------------------
  //[-------------------------
  var curFunct = 0;
  //]---------------------
  //[-------------------------
  var Meteor = function (x, y, w, h, health) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.onScreen = false;
    this.health = health;
    this.damage = 1;
    this.destroyed = false;
    this.gone = false;
    this.canDamage = true;
  };
  var Enemy = function (x, y, w, h, health) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = 2;
    this.health = health;
    this.onScreen = false;
    this.destroyed = false;
    this.canFire = false;
    this.canDamage = true;
    this.fireCooldown = 10;
  };
  var Strikers = function (x, y, w, h, health) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.health = health;
    this.fireCooldown = 10;
    this.onScreen = false;
    this.destroyed = false;
    this.canFire = false;
  };
  var Boss = function (x, y, w, h, health, stopAt, action) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.stopAt = stopAt;
    this.speed = 2;
    this.health = health;
    this.onScreen = false;
    this.destroyed = false;
    this.canFire = false;
    this.canDamage = true;
    this.primaryFireCooldown = 50;
    this.secondaryFireCooldown = 5;
    this.action = action;
  };
  var BossBullet = function (x, y, w, h, direction, speed, damage) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.direction = direction;
    this.speed = speed;
    this.destroyed = false;
    this.damage = damage;
  };
  var Bomber = function (x, y, w, h, direction, speed) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.direction = direction;
    this.speed = speed;
    this.fireCooldown = 10;
    this.canFire = false;
    this.destroyed = false;
    this.onScreen = false;
    this.health = 100;
  };
  //]---------------------
  //]
  var scene = "home";

  var laserFired = false;

  var laserY2 = 0;

  var level = 1;

  var JN;

  var medpackUsed = false;

  var initialY_M = -50;

  var initialY_E = -50;

  var initialY_S = -50;

  var initialY_B = -50;

  var initialY_VDB = -50;

  var gap_M = 30;

  var gap_E = 200;

  var bossCount = 0;

  var gap_S = 150;

  var gap_B = 30;

  var gap_VDB = 150;

  var canAdvance = true;

  var x11 = 0,
    x12 = 100,
    x21 = 300,
    x22 = 400;

  var meteorArray = [];

  var enemyArray = [];

  var strikersArray = [];

  var bossArray = [];

  var bomberArray = [];

  var playingScreenAmount = 0;

  var healthColor = {
    green: 0,
    yellow: 0,
    red: 0,
  };

  var player = function () {
    fill(0, 255, 183);
    stroke(0, 255, 183);

    triangle(
      playerOBJ.x,
      playerOBJ.y,
      playerOBJ.x + 20,
      playerOBJ.y + 30,
      playerOBJ.x - 20,
      playerOBJ.y + 30
    );

    stroke(255, 0, 0);
    fill(255, 0, 0);

    triangle(
      playerOBJ.x,
      playerOBJ.y + 60,
      playerOBJ.x + 20,
      playerOBJ.y + 30,
      playerOBJ.x - 20,
      playerOBJ.y + 30
    );
  };

  var drawLaser = function () {
    strokeWeight(2.5);
    line(playerOBJ.x, playerOBJ.y, playerOBJ.x, laserY2);
    strokeWeight(1);
  };

  var howToPlay = function () {
    curFunct = -1;
    background(255, 10);
    fill(0, 0, 0);
    textSize(50);
    text("How To Play:", 30, 100);
    textSize(20);
    text(
      "Left and Right Arrow Keys To\n Move. Destroy Meteors, Destroy \nEnemys, And Destroy Bosses. Go \nTo Shop To Buy New Lasers And \nPowers With Your Points. If A \nMeteor Crashes Into You,\n You Lose Health. Good Luck ;)",
      20,
      150
    );
    fill(10, 224, 252);
    rect(10, 10, 380, 40);
    fill(255, 255, 255);
    text("Go Back To Home Screen", 80, 37.5);
    if (
      curFunct === -1 &&
      mouseX > 10 &&
      mouseX < 390 &&
      mouseY > 10 &&
      mouseY < 50 &&
      mouseReleased
    ) {
      scene = "home";
    }
  };

  var newLevel = function () {
    noStroke();
    if (level % 10 === 0) {
      fill(255, 0, 0, 7.5);
      rect(0, 0, 400, 400);
      fill(255);
      textSize(30);
      text("BOSS LEVEL", 100, 100);
    } else {
      fill(255, 6);
      rect(0, 0, 400, 400);
      textSize(30);
      fill(255, 0, 0);
      text("LEVEL:\n " + level, 100, 100);
    }
  };

  var meteorZombieArray = [];

  var bossBullets = [];

  Enemy.prototype.draw = function () {
    fill(255, 0, 0);
    rectMode(CENTER);
    fill(133, 133, 133);
    triangle(
      this.x - 20,
      this.y,
      this.x - 5,
      this.y - 10,
      this.x - 5,
      this.y + 10
    );
    triangle(
      this.x + 20,
      this.y,
      this.x + 5,
      this.y + 10,
      this.x + 5,
      this.y - 10
    );
    rect(this.x, this.y, this.w / 2, this.h);
    triangle(
      this.x - this.w / 2 / 2,
      this.y + this.h / 2,
      this.x + this.w / 2 / 2,
      this.y + this.h / 2,
      this.x,
      this.y + this.h
    );
    if (this.health > 70) {
      stroke(0, 250, 100);
    } else if (this.health > 40 && this.health < 70) {
      stroke(255, 255, 0);
    } else {
      stroke(255, 0, 0);
    }
    strokeWeight(10);
    line(this.x - 10, this.y - 30, this.x - 10 + this.health / 5, this.y - 30);
    strokeWeight(1);
    noStroke();
    rectMode(CORNER);
  };

  Enemy.prototype.move = function () {
    if (this.y > 400) {
      this.detroyed = true;
    }
    if (this.y < 0) {
      this.onScreen = false;
    } else {
      this.onScreen = true;
    }
    if (this.onScreen) {
      if (this.x > playerOBJ.x) {
        this.x -= this.speed;
      }
      if (this.x < playerOBJ.x) {
        this.x += this.speed;
      }
      if (this.fireCooldown > 0) {
        this.fireCooldown--;
      } else {
        if (abs(this.x - playerOBJ.x) <= 10) {
          this.canFire = true;
          this.speed = 2;
        }
      }
    }
  };

  var bullets = [];

  Enemy.prototype.fire = function () {
    if (this.canFire) {
      var bullet = {
        x: this.x,
        y: this.y,
        away: 1,
        speed: 2,
        destroyed: false,
      };

      bullet.update = function () {
        if (level < 6) {
          bullet.away += level * 1.05;
        } else {
          bullet.away += 5.25;
        }

        var randColorChooser = floor(random(0, 3));
        if (randColorChooser === 0) {
          fill(255, 0, 0);
        } else if (randColorChooser === 1) {
          fill(255, 255, 0);
        } else {
          fill(255, 155, 0);
        }
        rect(this.x - 5, this.y + bullet.away, 10, 10);
        if (
          this.x > playerOBJ.x - 10 &&
          this.x < playerOBJ.x + 10 &&
          this.y + bullet.away > playerOBJ.y - 20 &&
          this.y + bullet.away < playerOBJ.y + 20
        ) {
          playerOBJ.health--;
        }
        if (this.y + bullet.away > 400) {
          bullet.destroyed = true;
        }
      };
      bullets.push(bullet);
      if (playerOBJ.health <= 0) {
        scene = "lost";
      }
      this.fireCooldown = 35 / level;
      this.canFire = false;
    }
  };

  Enemy.prototype.plrAndEnemyCollision = function () {
    if (
      this.x + this.w / 2 >= playerOBJ.x - 20 &&
      this.x - this.w / 2 <= playerOBJ.x + 20 &&
      this.y + this.h / 2 >= playerOBJ.y &&
      this.y - this.w / 2 < playerOBJ.y + 60
    ) {
      playerOBJ.health -= 20;
      this.destroyed = true;
    }
  };

  Enemy.prototype.removeEnemy = function () {
    var index = enemyArray.indexOf(this);
    if (this.destroyed) {
      if (enemyArray.length !== -1) {
        enemyArray.splice(index, 1);
      }
    }
  };

  Enemy.prototype.lsrAndEnemyCollision = function () {
    if (
      laserFired &&
      this.onScreen &&
      this.x + this.w / 2 >= playerOBJ.x - 20 &&
      this.x - this.w / 2 <= playerOBJ.x + 20
    ) {
      this.health -= playerOBJ.laserDm / 2 + 0.1;
      if (this.health <= 0) {
        this.destroyed = true;
        playerOBJ.points += 3;
      }
    }
  };
  level = 2;
  Strikers.prototype.draw = function () {
    stroke(255, 0, 0, 30);
    line(x11, 0, x11, width);
    line(x12, 0, x12, width);
    line(x21, 0, x21, width);
    line(x22, 0, x22, width);
    noStroke();
    rectMode(CENTER);
    fill(133, 133, 133);
    triangle(
      this.x - this.w - 5,
      this.y - this.h,
      this.x - this.w / 3,
      this.y - 7.5,
      this.x - this.w / 3,
      this.y + this.h
    );
    triangle(
      this.x + this.w + 5,
      this.y - this.h,
      this.x + this.w / 3,
      this.y - 7.5,
      this.x + this.w / 3,
      this.y + this.h
    );
    rect(this.x, this.y, this.w, this.h);
    if (this.y < 0) {
      this.onScreen = false;
    } else {
      this.onScreen = true;
    }
    if (this.y > 400) {
      this.destroyed = true;
    } else {
      this.destroyed = false;
    }
    rectMode(CORNER);
  };
  Strikers.prototype.plrAndStrikersCollision = function () {
    if (
      this.x + this.w + 5 >= playerOBJ.x - 20 &&
      this.x - this.w - 5 <= playerOBJ.x + 20 &&
      this.y + this.h >= playerOBJ.y &&
      this.y - this.h <= playerOBJ.y + 60
    ) {
      playerOBJ.health -= 20;
      this.destroyed = true;
    }
  };

  Strikers.prototype.lsrAndStrikersCollision = function () {
    if (
      laserFired &&
      this.onScreen &&
      this.x + this.w + 5 >= playerOBJ.x - 20 &&
      this.x - this.w - 5 <= playerOBJ.x + 20
    ) {
      this.health -= playerOBJ.laserDm / 2;
      if (this.health <= 0) {
        this.destroyed = true;
      }
    }
  };

  Strikers.prototype.removeStrikers = function () {
    var index = strikersArray.indexOf(this);
    if (this.destroyed) {
      if (strikersArray.length !== -1) {
        strikersArray.splice(index, 1);
      }
    }
  };
  //Coming Soon!
  Meteor.prototype.zombieAttack = function () {
    background(255);
  };
  //Coming Soon!
  Meteor.prototype.zombify = function () {
    if (this.gone) {
      this.y = playerOBJ.y;

      this.x = random(50, 350);
      if (
        this.y + this.w + 0.5 >= playerOBJ.y &&
        this.y <= playerOBJ.y + 60 &&
        this.x > playerOBJ.x - 40 &&
        this.x < playerOBJ.x + 20
      ) {
        var T = floor(random(0, 2));
        if (T === 0) {
          this.x += 70;
        }
        if (T === 1) {
          this.x -= 70;
        }
      }
      if (keys[70]) {
        QA = frameCount;
        if (frameCount < 1205 + QA) {
          scene = "zombie attack";
        } else {
          scene = "playing";
        }
      }
    }
  };

  var updateCodeBasedOnMode = function () {
    switch (mode) {
      case "super easy":
        playerOBJ.laserDm = 3;
        playerOBJ.maxHealth = 150;
        playerOBJ.health = 150;
        for (var i = 0; i < meteorArray.length; i++) {
          meteorArray[i].damage = 5;
        }
        break;

      case "easy":
        playerOBJ.laserDm = 2;
        playerOBJ.maxHealth = 125;
        playerOBJ.health = 125;
        for (var i = 0; i < meteorArray.length; i++) {
          meteorArray[i].damage = 10;
        }
        break;

      case "normal":
        playerOBJ.laserDm = 1;
        playerOBJ.maxHealth = 100;
        playerOBJ.health = 100;
        for (var i = 0; i < meteorArray.length; i++) {
          meteorArray[i].damage = 20;
        }
        break;

      case "hard":
        playerOBJ.laserDm = 0.5;
        for (var i = 0; i < meteorArray.length; i++) {
          meteorArray[i].damage = 30;
        }
        break;

      case "very hard":
        playerOBJ.laserDm = 0.35;
        for (var i = 0; i < meteorArray.length; i++) {
          meteorArray[i].damage = 35;
        }
        break;

      case "impossible":
        playerOBJ.laserDm = 0.1;
        for (var i = 0; i < meteorArray.length; i++) {
          meteorArray[i].damage = 50;
        }
        break;

      case "god mode":
        playerOBJ.Dm = 10000000000000;
        for (var i = 0; i < meteorArray.length; i++) {
          meteorArray[i].damage = 0.0001;
        }
        playerOBJ.maxHealth = 1000;
        playerOBJ.health = 1000;
        break;

      case "infinite":
        playerOBJ.Dm = 10;
        for (var i = 0; i < meteorArray.length; i++) {
          meteorArray[i].damage = 0;
        }
        playerOBJ.maxHealth = Infinity;
        playerOBJ.health = Infinity;
        break;

      case "the necromancer":
        playerOBJ.Dm = 20;
        playerOBJ.maxHealth = 200;
        playerOBJ.health = 200;
        for (var i = 0; i < meteorArray.length; i++) {
          meteorArray[i].zombify();
        }
        break;
    }
  };

  Meteor.prototype.drawMeteor = function () {
    var index = meteorArray.indexOf(this);
    pushMatrix();
    fill(255);
    rect(this.x, this.y, this.w, this.h);
    popMatrix();
    if (this.health <= 0) {
      this.gone = true;
    }
    if (this.y >= 400) {
      this.gone = true;
    }
    if (this.y + this.w <= 0) {
      this.onScreen = false;
    } else {
      this.onScreen = true;
    }
  };

  Meteor.prototype.removeMeteor = function () {
    var index = meteorArray.indexOf(this);
    if (this.gone) {
      if (mode !== "the necromancer") {
        if (index !== -1) {
          meteorArray.splice(index, 1);
        }
      }
    }
  };

  Meteor.prototype.detectLsrMtrCollision = function () {
    var index = meteorArray.indexOf(this);
    if (
      laserFired &&
      this.onScreen &&
      this.x + this.w >= playerOBJ.x - 1 &&
      this.x <= playerOBJ.x + 1
    ) {
      //laserY2=this.y+this.h;
      this.health -= playerOBJ.laserDm / 2;
      if (this.health <= 0) {
        playerOBJ.points += 1;
      }
    } else {
      laserY2 = 0;
    }
  };

  var loseScreen = function () {
    fill(255, 0, 0);
    background(255);
    textSize(30);
    noStroke();
    text('You Lost :(\n Press "e" to retry', 30, 200);
    for (var i = 0; i < meteorArray.length; i++) {
      meteorArray[i].x = -1000;
      meteorArray[i].y = -1000;
    }
    playerOBJ.health = 0;
    return;
  };

  Meteor.prototype.detectPlrMtrCollision = function () {
    if (
      this.canDamage &&
      this.y + this.h >= playerOBJ.y &&
      this.y <= playerOBJ.y + 60 &&
      this.x <= playerOBJ.x + 20 &&
      this.x + this.w >= playerOBJ.x - 20
    ) {
      for (var i = 0; i < meteorArray.length; i++) {
        playerOBJ.health -= meteorArray[i].damage;
      }
      this.gone = true;
      this.canDamage = false;
      if (playerOBJ.health <= 0) {
        scene = "lost";
      }
    }
  };
  Strikers.prototype.enemyAndStrikersCollision = function () {
    for (var i = enemyArray.length - 1; i >= 0; i--) {
      if (
        this.onScreen &&
        enemyArray[i].onScreen &&
        this.x + 20 > enemyArray[i].x - 20 &&
        this.x - 20 < enemyArray[i].x + 20 &&
        this.y + 15 > enemyArray[i].y - 15 &&
        this.y - 15 < enemyArray[i].y + 15
      ) {
        enemyArray[i].health = 0;
        this.health /= 3;
      }
    }
  };
  BossBullet.prototype.draw = function () {
    if (
      this.y > 400 ||
      this.x < 0 ||
      this.x > 400 ||
      (this.y > 290 - this.h && this.x > 325 - this.w)
    ) {
      this.destroyed = true;
    }
    var n = floor(random(0, 3));
    if (n === 0) {
      fill(10, 220, 250);
    } else if (n === 1) {
      fill(10, 250, 210);
    } else {
      fill(10, 100, 250);
    }
    noStroke();
    rect(this.x, this.y, this.w, this.h);
  };

  BossBullet.prototype.plrAndBulletCollision = function () {
    if (
      this.x + this.w >= playerOBJ.x - 20 &&
      this.x <= playerOBJ.x + 20 &&
      this.y + this.h > playerOBJ.y &&
      this.y <= playerOBJ.y + 60
    ) {
      playerOBJ.health -= this.damage;
      this.destroyed = true;
    }
  };
  var dhdhdh279217$98213uisg = playerOBJ.points - 5;
  BossBullet.prototype.removeBullets = function () {
    var index = bossBullets.indexOf(this);
    if (this.destroyed) {
      if (bossBullets.length !== -1) {
        bossBullets.splice(index, 1);
      }
    }
  };

  BossBullet.prototype.move = function () {
    this.x += this.speed * cos(this.direction);
    this.y += this.speed * sin(this.direction);
  };

  Boss.prototype.draw = function () {
    for (var i = meteorArray.length - 1; i >= 0; i--) {
      meteorArray[i].destroyed = true;
      meteorArray[i].gone = true;
      canAdvance = false;
    }
    stroke(5, 250, 91);
    strokeWeight(10);
    line(325, 290, 400, 290);
    line(325, 290, 325, 400);
    strokeWeight(1);
    if (this.y < this.stopAt) {
      this.canDamage = false;
    } else {
      this.canDamage = true;
    }
    rectMode(CENTER);
    fill(0, 255, 0);
    for (var i = 0; i < 20; i++) {
      noStroke();
      fill(5, tan(i * i) * 10, 252);
      rect(this.x + 5, this.y, this.w, this.h, 10);
    }
    if (this.health > 70) {
      stroke(0, 255, 0);
    } else if (this.health > 40) {
      stroke(255, 255, 0);
    } else if (this.health < 40) {
      stroke(255, 0, 0);
    }
    strokeWeight(10);
    line(
      5 + (this.x - this.health / 6),
      this.y - 25,
      this.x + this.health / 6,
      this.y - 25
    );
    strokeWeight(1);
    noStroke();
    rectMode(CORNER);
  };

  Boss.prototype.primaryFire = function () {
    if (this.canDamage && this.primaryFireCooldown <= 0) {
      if (this.action === "normal") {
        var directionToPlayer = atan2(
          playerOBJ.y - this.y,
          playerOBJ.x - this.x
        );
        var bossBullet = new BossBullet(
          this.x,
          this.y,
          15,
          15,
          directionToPlayer,
          5,
          1
        );
        bossBullets.push(bossBullet);
      }
      if (this.action === "spread") {
        for (var i = 0; i < 10; i++) {
          var direction1 = atan2(i * (i * 5), i * 100);
          var direction2 = atan2(i * (i * 5), i * -100);
          var direction3 = atan2(i * (i * 5), i * 5);
          var direction4 = atan2(i * (i * 5), i * -5);
          var bossBullet1 = new BossBullet(
            this.x,
            this.y,
            15,
            15,
            direction1,
            5,
            2
          );
          var bossBullet2 = new BossBullet(
            this.x,
            this.y,
            15,
            15,
            direction2,
            5,
            2
          );
          var bossBullet3 = new BossBullet(
            this.x,
            this.y,
            15,
            15,
            direction3,
            5,
            2
          );
          var bossBullet4 = new BossBullet(
            this.x,
            this.y,
            15,
            15,
            direction4,
            5,
            2
          );

          bossBullets.push(bossBullet1, bossBullet2, bossBullet3, bossBullet4);
        }
      }
      if (this.action === "rage") {
      }
      this.primaryFireCooldown = 50;
    } else {
      this.primaryFireCooldown--;
    }
  };

  Boss.prototype.secondaryFire = function () {
    if (this.canDamage && this.secondaryFireCooldown <= 0) {
      var directionToPlayer = atan2(playerOBJ.y - this.y, playerOBJ.x - this.x);
      if (this.action === "normal") {
        for (var i = -1; i <= 1; i++) {
          var bossBullet = new BossBullet(
            this.x,
            this.y,
            10,
            10,
            directionToPlayer + (i * PI) / 8,
            2.5,
            2
          );
          bossBullets.push(bossBullet);
        }
      } else if (this.action === "spread") {
      } else if (this.action === "rage") {
        for (var i = 0; i < 10; i++) {
          var direction1 = atan2(i * (i * 5), i * 100);
          var direction2 = atan2(i * (i * 5), i * -100);
          var direction3 = atan2(i * (i * 5), i * 5);
          var direction4 = atan2(i * (i * 5), i * -5);
          var bossBullet1 = new BossBullet(
            this.x,
            this.y,
            10,
            10,
            direction1,
            5,
            1
          );
          var bossBullet2 = new BossBullet(
            this.x,
            this.y,
            10,
            10,
            direction2,
            5,
            1
          );
          var bossBullet3 = new BossBullet(
            this.x,
            this.y,
            10,
            10,
            direction3,
            5,
            1
          );
          var bossBullet4 = new BossBullet(
            this.x,
            this.y,
            10,
            10,
            direction4,
            5,
            1
          );
          bossBullets.push(bossBullet1, bossBullet2, bossBullet3, bossBullet4);
          this.secondaryFireCooldown = 5;
        }
      }
      if (this.action !== "rage") {
        this.secondaryFireCooldown = 20;
      } else {
        this.secondaryFireCooldown = 5;
      }
    } else {
      this.secondaryFireCooldown--;
    }
  };

  Boss.prototype.lsrAndBossCollision = function () {
    if (
      this.canDamage &&
      laserFired &&
      this.x + this.w / 2 > playerOBJ.x - 10 &&
      this.x - this.w / 2 < playerOBJ.x + 10
    ) {
      this.health -= (playerOBJ.laserDm / 2) * 0.5;
      if (this.health <= 0) {
        canAdvance = true;
        scene = "new level";
        this.destroyed = true;
      }
    }
  };

  Boss.prototype.removeBoss = function () {
    var index = bossArray.indexOf(this);
    if (this.destroyed) {
      if (bossArray.length !== -1) {
        bossArray.splice(index, 1);
        medpackUsed = false;
      }
    }
  };

  var bombs = [];

  Bomber.prototype.draw = function () {
    if (this.x < 0) {
      this.onScreen = false;
    } else {
      this.onScreen = true;
    }
    if (this.x === 350) {
      this.direction = -this.direction;
    }
    if (this.x === 50) {
      this.direction = -this.direction;
    }
    fill(255, 0, 0);
    rectMode(CENTER);
    fill(133, 133, 133);
    triangle(
      this.x - 20,
      this.y,
      this.x - 5,
      this.y - 10,
      this.x - 5,
      this.y + 10
    );
    triangle(
      this.x + 20,
      this.y,
      this.x + 5,
      this.y + 10,
      this.x + 5,
      this.y - 10
    );
    rect(this.x, this.y + 7.5, this.w / 2, this.h);
    //triangle(this.x-(this.w/2)/2, this.y+this.h/2, this.x+(this.w/2)/2, this.y+this.h/2, this.x, this.y+this.h);
    if (this.health > 70) {
      stroke(0, 250, 100);
    } else if (this.health > 40 && this.health < 70) {
      stroke(255, 255, 0);
    } else {
      stroke(255, 0, 0);
    }
    strokeWeight(10);
    line(this.x - 10, this.y - 30, this.x - 10 + this.health / 5, this.y - 30);
    strokeWeight(1);
    noStroke();
    rectMode(CORNER);
  };

  Bomber.prototype.move = function () {
    if (this.onScreen) {
      if (this.direction === -1) {
        this.x++;
      } else if (this.direction === 1) {
        this.x--;
      }
    }
  };

  Bomber.prototype.fire = function () {
    if (this.fireCooldown > 0) {
      this.fireCooldown--;
    } else {
      this.canFire = true;
    }
    if (this.canFire) {
      if (this.onScreen) {
        var bomb = {
          x: this.x,
          y: this.y,
          away: 1,
          destroyed: false,
          colorSwitchCooldown: 10,
          health: 20,
        };
        bomb.update = function () {
          bomb.away += 1;
          fill(63, 63, 63);
          ellipse(this.x, this.y + bomb.away, 20, 20);
          fill(255, 0, 0, 0);
          if (bomb.colorSwitchCooldown > 0) {
            bomb.colorSwitchCooldown--;
          } else {
            var n = floor(random(0, 2));
            if (n === 0) {
              fill(255, 255, 0);
            } else if (n === 1) {
              fill(255, 0, 0);
            }

            bomb.colorSwitchCooldown = 20;
          }
          ellipse(this.x, this.y + bomb.away, 10, 10);

          if (this.y + bomb.away > 400) {
            bomb.destroyed = true;
          }
          if (
            laserFired &&
            this.x + 10 >= playerOBJ.x - 1 &&
            this.x <= playerOBJ.x + 1
          ) {
            bomb.health--;
            if (bomb.health <= 0) {
              bomb.destroyed = true;
            }
          }
          if (
            this.x + 10 >= playerOBJ.x - 20 &&
            this.x <= playerOBJ.x + 20 &&
            this.y + 10 + bomb.away >= playerOBJ.y &&
            this.y + bomb.away <= playerOBJ.y + 60
          ) {
            playerOBJ.health -= 10;
            bomb.destroyed = true;
            if (playerOBJ.health <= 0) {
              scene = "lost";
            }
          }
        };
        bombs.push(bomb);
        if (playerOBJ.health <= 0) {
          scene = "lost";
        }
        this.fireCooldown = 60;
        this.canFire = false;
      }
    }
  };

  Bomber.prototype.removeBomb = function () {
    var index = bomberArray.indexOf(this);
    if (this.destroyed) {
      if (bomberArray.length !== -1) {
        bomberArray.splice(index, 1);
      }
    }
  };

  Bomber.prototype.bomberLsrCollision = function () {
    var index = bomberArray.indexOf(this);
    if (
      laserFired &&
      this.x + this.w / 2 >= playerOBJ.x - 1 &&
      this.x <= playerOBJ.x + 1
    ) {
      this.health -= playerOBJ.laserDm / 2.5;
      if (this.health <= 0) {
        this.destroyed = true;
      }
    }
  };

  var checkIfAllMtrPast = function () {
    var allMeteorsGone = true;
    for (var i = 0; i < meteorArray.length; i++) {
      if (!meteorArray[i].gone) {
        allMeteorsGone = false;
        break;
      }
    }

    if (allMeteorsGone) {
      if (canAdvance) {
        scene = "new level";
        JN = frameCount;
        level++;
      }
    }
  };

  for (var i = 0; i < 40; i++) {
    meteorArray.push(
      new Meteor(
        50 + Math.random() * (350 - 50),
        (initialY_M -= gap_M),
        20,
        20,
        1
      )
    );
  }
  if (level > 5) {
    for (var i = 0; i < 4; i++) {
      enemyArray.push(
        new Enemy(random(50, 150), (initialY_E -= gap_E), 30, 30, 100)
      );
    }
  }
  var lastStarTime = 0;
  var playingScreen = function () {
    healthColor = {
      green: color(0, 252, 82, 200),
      yellow: color(255, 255, 0, 200),
      red: color(255, 0, 0, 200),
    };
    playingScreenAmount++;
    if (playingScreenAmount === 1) {
      updateCodeBasedOnMode();
    }
    if (playerOBJ.health <= 0) {
      scene = "lost";
    }
    if (keys[72] && !medpackUsed) {
      playerOBJ.health = playerOBJ.maxHealth;
      medpackUsed = true;
    }
    for (var i = bossBullets.length - 1; i >= 0; i--) {
      bossBullets[i].move();
      bossBullets[i].draw();
      bossBullets[i].plrAndBulletCollision();
    }
    for (var i = bossBullets.length - 1; i >= 0; i--) {
      bossBullets[i].removeBullets();
    }
    for (var i = bossArray.length - 1; i >= 0; i--) {
      bossArray[i].draw();
      bossArray[i].primaryFire();
      bossArray[i].secondaryFire();
      bossArray[i].lsrAndBossCollision();
      if (bossArray[i].y < bossArray[i].stopAt) {
        bossArray[i].y += 1;
      }
    }
    for (var i = bossArray.length - 1; i >= 0; i--) {
      bossArray[i].removeBoss();
    }
    curFunct = 1;
    noStroke();
    for (var i = bullets.length - 1; i >= 0; i--) {
      bullets[i].update();
      if (bullets[i].destroyed) {
        bullets.splice(i, 1);
      }
    }
    for (var i = bombs.length - 1; i >= 0; i--) {
      bombs[i].update();
      if (bombs[i].destroyed) {
        bombs.splice(i, 1);
      }
    }
    for (var i = bomberArray.length - 1; i >= 0; i--) {
      bomberArray[i].draw();
      bomberArray[i].move();
      bomberArray[i].fire();
      bomberArray[i].bomberLsrCollision();
      if (bomberArray[i].y < 30) {
        bomberArray[i].y += 1;
      }
    }
    for (var i = bomberArray.length - 1; i >= 0; i--) {
      bomberArray[i].removeBomb();
    }
    for (var i = enemyArray.length - 1; i >= 0; i--) {
      enemyArray[i].draw();
      enemyArray[i].move();
      enemyArray[i].fire();
      enemyArray[i].plrAndEnemyCollision();
      enemyArray[i].lsrAndEnemyCollision();
      enemyArray[i].y += 0.5;
    }
    for (var i = strikersArray.length - 1; i >= 0; i--) {
      strikersArray[i].draw();
      strikersArray[i].plrAndStrikersCollision();
      strikersArray[i].lsrAndStrikersCollision();
      strikersArray[i].enemyAndStrikersCollision();
      strikersArray[i].y += 10;
    }

    for (var i = enemyArray.length - 1; i >= 0; i--) {
      enemyArray[i].removeEnemy();
    }
    for (var i = meteorArray.length - 1; i >= 0; i--) {
      meteorArray[i].drawMeteor();
      meteorArray[i].detectLsrMtrCollision();
      meteorArray[i].detectPlrMtrCollision();
      meteorArray[i].y += 2;
    }
    for (var i = meteorArray.length - 1; i >= 0; i--) {
      meteorArray[i].removeMeteor();
    }
    checkIfAllMtrPast();
    player();

    playerOBJ.x = constrain(playerOBJ.x, 0 + 30, width - 30);
    //controls [
    if (curFunct === 1) {
      if (keys[LEFT]) {
        playerOBJ.x -= howMuchMove;
      }
      if (frameCount % 3 === 0) {
        dhdhdh279217$98213uisg += 5;
      }
      if (dhdhdh279217$98213uisg < playerOBJ.points - 23) {
        noLoop();
      }
      if (keys[RIGHT]) {
        playerOBJ.x += howMuchMove;
      }
      if (keys[UP]) {
        drawLaser();
        laserFired = true;
      } else {
        laserFired = false;
      }
    }
    //]
    //health box [
    noStroke();
    if (playerOBJ.health >= 60) {
      fill(healthColor.green);
    } else if (playerOBJ.health >= 30 && playerOBJ.health < 60) {
      fill(healthColor.yellow);
    } else if (playerOBJ.health >= 0 && playerOBJ.health < 30) {
      fill(healthColor.red);
    }
    rect(0, 350, 100, 50, 15);
    fill(0);
    textSize(15);
    text("  Health:\n  " + playerOBJ.health, 1, 370);
    stroke(0);
    //]
    //score box [
    noStroke();
    fill(120, 190, 250, 200);
    rect(0, 0, 100, 50, 15);
    fill(0);
    text("  Points:\n  " + playerOBJ.points, 1, 20);
    stroke(0);
    //]
    //mepack used box [
    noStroke();
    if (medpackUsed) {
      fill(healthColor.red);
    } else {
      fill(healthColor.green);
    }
    rect(300, 0, 100, 70, 15);
    fill(0);
    text("  Medpack\n   Used:\n   " + medpackUsed, 301, 20);
    stroke(0);
    //]
  };
  /* coming on next updt(WIP)
	var shopScreen = function() {

	};
	*/
  var starsArray = [];
  function stars(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.draw = function () {
      fill(255);
      ellipse(this.x, this.y, this.w, this.h);
    };
  }
  var homeScreen = function () {
    noStroke();
    curFunct = 0;
    background(255);
    fill(0, 255);
    textSize(txtSize);
    var font = createFont("monospace");
    textFont(font);
    stroke(115);

    for (var i = 0; i < 5000; i++) {
      line(i + 2000, i + 2000000, i - 20, i - 20);
    }

    for (var i = 0; i < 4000; i++) {
      line(i - 2000, i - 2000000, i, i);
    }
    fill(100);
    //for loops for design including sign [
    text("S", 80, 100);
    text("H", 120, 100);
    text("O", 160, 100);
    text("O", 200, 100);
    text("T", 240, 100);
    text("!", 280, 100);
    stroke(115);

    //]

    noStroke();

    //Modes background [
    fill(rectFill);
    rect(rectX, rectY, w, h);

    fill(rectFill2);
    rect(rectX2, rectY2, w2, h2);

    //]

    stroke(0);

    //Box 1 lines [
    line(97, 120, 97, 170);
    line(147, 120, 147, 170);
    line(197, 120, 197, 170);
    line(247, 120, 247, 170);
    line(295, 120, 295, 170);
    //]

    //Box 2 lines [
    line(145, 174, 145, 224);
    line(245, 174, 245, 224);
    //]

    //How to play button [
    noStroke();
    rect(100, 350, 205, 40);
    textSize(30);
    fill(0, 0, 0);
    text("HOW TO PLAY", 105, 380);
    stroke(0, 0, 0);
    //]

    //text modes [
    fill(0);
    textSize(16);
    text("Super \n Easy", 46, 140);
    text("Easy", 103, 150);
    text("Nor-\nmal", 153, 140);
    text("Hard", 202, 150);
    text("Very \nHard", 252, 140);
    textSize(13);
    text("Impos-\nsible", 297, 140);

    textSize(16);
    text("God Mode", 55, 206);
    text("Infinite", 156, 206);
    textSize(14);
    text("    The \n Necromancer", 242, 196);
    //]

    //play sign [
    textSize(70);
    fill(255, 100);
    noStroke();
    rect(110, 270, 185, 70);
    fill(0);
    text("PLAY", 120, 330);
    //]

    textSize(30);
    text("Mode: " + mode, 10, 30);

    mouseReleased = function () {
      if (curFunct === 0 && scene === "home") {
        //play activation [
        if (mouseX >= 110 && mouseX <= 295 && mouseY >= 270 && mouseY <= 340) {
          scene = "playing";
          IA = frameCount;
        }
        //]
        //How To Play activation [
        if (mouseX > 100 && mouseX < 305 && mouseY > 350 && mouseY < 390) {
          scene = "how to play";
        }
        //]

        //difficulties:[
        //box 1 [
        if (mouseX <= 95 && mouseX >= 45 && mouseY >= 95 && mouseY <= 170) {
          mode = "super easy";
        }
        //]

        //box 2 [
        if (mouseX <= 145 && mouseX >= 95 && mouseY >= 95 && mouseY <= 170) {
          mode = "easy";
        }
        //]
        //box 3 [
        if (mouseX <= 195 && mouseX >= 145 && mouseY >= 95 && mouseY <= 170) {
          mode = "normal";
        }
        //]
        //box 4 [
        if (mouseX <= 245 && mouseX >= 195 && mouseY >= 95 && mouseY <= 170) {
          mode = "hard";
        }
        //]
        //box 5 [
        if (mouseX <= 295 && mouseX >= 245 && mouseY >= 95 && mouseY <= 170) {
          mode = "very hard";
        }
        //]
        //box 6 [
        if (mouseX <= 345 && mouseX >= 295 && mouseY >= 95 && mouseY <= 170) {
          mode = "impossible";
        }
        //]
        //]

        //fun modes:[

        //box 1 [
        if (mouseX >= 45 && mouseX <= 145 && mouseY <= 225 && mouseY >= 175) {
          mode = "god mode";
        }
        //]

        //box 2 [
        if (mouseX >= 145 && mouseX <= 245 && mouseY <= 225 && mouseY >= 175) {
          mode = "infinite";
        }
        //]

        //box 3 [
        if (mouseX >= 245 && mouseX <= 345 && mouseY <= 225 && mouseY >= 175) {
          mode = "the necromancer";
        }
        //]

        //]
      }
    };
  };
  for (var j = 0; j < 100; j++) {
    randomStarsX = Math.random() * 400;
    randomStarsY = Math.random() * 400;
    starsArray.push(new stars(randomStarsX, randomStarsY, 5, 5));
  }
  function drawStars() {
    if (millis() - lastStarTime > 1000) {
      starsArray = [];
      for (var j = 0; j < 100; j++) {
        randomStarsX = random(0, width);
        randomStarsY = random(0, height);
        starsArray.push(new stars(randomStarsX, randomStarsY, 5, 5));
      }
      lastStarTime = millis();
    }
    for (var i = 0; i < starsArray.length; i++) {
      starsArray[i].draw();
    }
  }
  draw = function () {
    switch (scene) {
      case "home":
        homeScreen();
        break;

      case "playing":
        background(35);
        drawStars();
        playingScreen();
        break;

      case "lost":
        loseScreen();
        break;

      case "shop":
        /*next updt(WIN)
	            shopScreen();
	            */
        break;

      case "how to play":
        howToPlay();
        break;

      case "zombie attack":
        for (var i = 0; i < meteorArray.length; i++) {
          meteorArray[i].zombieAttack();
        }
        break;

      case "new level":
        if (frameCount < 100 + JN) {
          newLevel();
          initialY_M = -50;
          initialY_E = -50;
          initialY_S = -50;
          initialY_B = -50;
          initialY_VDB = -50;
        } else {
          for (var i = 0; i < 40; i++) {
            meteorArray.push(
              new Meteor(random(50, 350), (initialY_M -= gap_M), 20, 20, 1)
            );
          }
          if (level > 3) {
            if (level < 9) {
              for (var i = 0; i < level / 5 + 1; i++) {
                enemyArray.push(
                  new Enemy(random(50, 350), (initialY_E -= gap_E), 30, 30, 100)
                );
              }
            } else {
              for (var i = 0; i < 3; i++) {
                enemyArray.push(
                  new Enemy(random(50, 350), (initialY_E -= gap_E), 30, 30, 100)
                );
              }
            }
          }
          if (level % 3 === 0) {
            for (var i = 0; i < floor(level * 1.5); i++) {
              var p1X = random(0, 100);

              var p2X = random(300, 400);

              var choosePX = floor(random(0, 2));
              if (choosePX === 0) {
                strikersArray.push(
                  new Strikers(p1X, (initialY_S -= gap_S), 15, 15, 1)
                );
              } else {
                strikersArray.push(
                  new Strikers(p2X, (initialY_S -= gap_S), 15, 15, 1)
                );
              }
            }
          }
          if (level % 10 === 0) {
            bossCount++;
            if (bossCount >= 2) {
              bossArray.push(
                new Boss(200, (initialY_B -= gap_B), 30, 30, 100, 30, "spread")
              );
            } else if (bossCount >= 3) {
              bossArray.push(
                new Boss(200, (initialY_B -= gap_B), 30, 30, 100, 30, "rage")
              );
            }
            bossArray.push(
              new Boss(200, (initialY_B -= gap_B), 30, 30, 100, 30, "normal")
            );
          }
          if (level % 4 === 0) {
            for (var i = 0; i < 1; i++) {
              bomberArray.push(
                new Bomber(200, (initialY_VDB -= gap_VDB), 30, 30, -1, 2)
              );
            }
          }
          scene = "playing";
        }
        break;
    }
    if (keys[69] && curFunct === 1) {
      scene = "home";
      playerOBJ.x = 200;
      playerOBJ.y = 300;
      playerOBJ.health = 100;
      initialY_M = -50;
      if (bossArray.length > 0) {
        level = 0;
      } else {
        level = 1;
      }
      medpackUsed = false;
      playingScreenAmount = 0;
      for (var i = meteorArray.length - 1; i >= 0; i--) {
        meteorArray[i].destroyed = true;
      }
      for (var i = enemyArray.length - 1; i >= 0; i--) {
        enemyArray[i].destroyed = true;
      }
      for (var i = 0; i < strikersArray.length; i++) {
        strikersArray.splice(i, 1);
      }
      for (var i = bomberArray.length - 1; i >= 0; i--) {
        bomberArray[i].destroyed = true;
      }
      for (var i = bombs.length - 1; i >= 0; i--) {
        bombs[i].destroyed = true;
      }
      if (bossArray.length > 0) {
        for (var i = bossArray.length - 1; i >= 0; i--) {
          bossArray[i].destroyed = true;
          canAdvance = true;
        }
        bossBullets.x = 390;
        bossBullets.y = 390;
      }
      for (var i = bullets.length - 1; i >= 0; i--) {
        bullets[i].destroyed = true;
      }
      for (var i = 0; i < meteorArray.length; i++) {
        meteorArray[i].x = random(50, 350);
        meteorArray[i].y = initialY_M -= gap_M;
      }
    }
  };

  //]
}

runPJS(program);

// Add reload button on KA --> <script>
