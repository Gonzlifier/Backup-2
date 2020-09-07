function Basic() {
    EnemyHPD = 8;
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var diamond = diamonds.create(sX, sY, 'diamond');
    var directionX = Math.random() * 360 - 180;
    var directionY = Math.random() * 360 - 180;
    diamond.setVelocityX(directionX);
    diamond.setVelocityY(directionY);
    diamond.setCollideWorldBounds(true);
    diamond.setBounce(1, 1);
};
function Fast() {
    EnemyHPR = 3;
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var Wabbit = rocks.create(sX, sY, 'Wabbit');
    var directionX = Math.random() * 780 - 360;
    var directionY = Math.random() * 780 - 360;
    Wabbit.setVelocityX(directionX);
    Wabbit.setVelocityY(directionY);
    Wabbit.setCollideWorldBounds(true);
    Wabbit.setBounce(1, 1);
};
function Tank() {
    EnemyHPP = 12;
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var Slime = patrols.create(sX, sY, 'Slime');
    var directionX = Math.random() * 180 - 120;
    var directionY = Math.random() * 180 - 120;
    Slime.setVelocityX(directionX);
    Slime.setVelocityY(directionY);
    Slime.setCollideWorldBounds(true);
    Slime.setBounce(1, 1);
}
function Mine() {
    EnemyHPM = 1;
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var minez = mines.create(sX, sY, 'mine');
    minez.setCollideWorldBounds(true);
}
function Fly() {
    EnemyHPF = 5;
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var flys = fly.create(sX, sY, 'fly').setScale(0.4);
    var directionX = Math.random() * 180 - 120;
    var directionY = Math.random() * 180 - 120;
    flys.setVelocityX(directionX);
    flys.setVelocityY(directionY);
    flys.setCollideWorldBounds(true);
    flys.setBounce(1, 1);
}
function Clotty() {
    ClottyAlive = true;
    EnemyHPC = 4;
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var clottys = clotty.create(sX, sY, 'clotty').setScale(0.6).setTint(0xff0000);
    clottys.setCollideWorldBounds(true);
    clottys.setBounce(1, 1);
    clottys.setDrag(200);
    setInterval(function () {
        var number = Math.round(Math.random() * 4)
        if (ClottyAlive == true) {
            if (number == 0) {
                clottys.setVelocityY(120);
            } else if (number == 1) {
                clottys.setVelocityX(120);
            } else if (number == 2) {
                clottys.setVelocityY(-120);
            } else if (number == 3) {
                clottys.setVelocityX(-120);
            } else if (number == 4) {
                EnemyBullet1 = EnemyBullet.create(clottys.x, clottys.y, 'bullet')
                EnemyBullet2 = EnemyBullet.create(clottys.x, clottys.y, 'bullet')
                EnemyBullet3 = EnemyBullet.create(clottys.x, clottys.y, 'bullet')
                EnemyBullet4 = EnemyBullet.create(clottys.x, clottys.y, 'bullet')
                EnemyBullet1.setVelocityY(200);
                EnemyBullet2.setVelocityX(200);
                EnemyBullet3.setVelocityY(-200);
                EnemyBullet4.setVelocityX(-200);
            }
        } else {
            clearInterval
        }
    }, 500);
}
function FlyGunner() {
    EnemyHPFS = 6;
    FlyAlive = true;
    var FlyingShooting = true;
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var flyshoots = flyshoot.create(sX, sY, 'flyshoot').setScale(0.5).setTint(0xff0000);
    var directionX = Math.random() * 180 - 120;
    var directionY = Math.random() * 180 - 120;
    flyshoots.setVelocityX(directionX);
    flyshoots.setVelocityY(directionY);
    flyshoots.setCollideWorldBounds(true);
    flyshoots.setBounce(1, 1);
    setInterval(function () {
        if (FlyAlive == false) {
            FlyingShooting = false;
        }
        if (FlyingShooting == true) {
            FlyingBullets = FlyingBullet.create(flyshoots.x, flyshoots.y, 'bullet')
            FlyingBullets.setVelocityX(player.x - flyshoots.x)
            FlyingBullets.setVelocityY(player.y - flyshoots.y)
            FlyingBullets.setVisible(false);
            FlyingBullets.setActive(false)
            FlyingBullets.setVisible(true);
            FlyingBullets.setActive(true)
        } else {
        }
    }, 1100);
}
function FloorBoss() {
    var number = Math.round(Math.random() * 1)
    if (number == 0) {
        BossHP = 100;
        killsLeft += 10000;
        killsneeded += 10000;
        waveAt75 = true;
        var Bossz = Boss.create(400, 300, 'Boss');
        var directionX = Math.random() * 360 - 180;
        var directionY = Math.random() * 360 - 180;
        Bossz.setVelocityX(directionX);
        Bossz.setVelocityY(directionY);
        Bossz.setCollideWorldBounds(true);
        Bossz.setBounce(1, 1);
    } else if (number == 1) {
        GurglingHP = 50;
        killsLeft += 10000;
        killsneeded += 10000;
        killText.setText('Kills Left: ' + killsLeft)
        var Gurgling1 = Gurgling.create(350, 300, 'Gurglings').setScale(0.5);
        var Gurgling2 = Gurgling.create(450, 300, 'Gurglings').setScale(0.5);
        Gurgling1.setDrag(200);
        Gurgling2.setDrag(200);
        Gurgling1.setCollideWorldBounds(true);
        Gurgling2.setCollideWorldBounds(true);
        Gurgling1.setBounce(0.7);
        Gurgling2.setBounce(0.7);
        setInterval(function () {
            var number = Math.round(Math.random() * 3)
            if (number == 0) {
                Gurgling1.setVelocityY(300);
            } else if (number == 1) {
                Gurgling1.setVelocityX(300);
            } else if (number == 2) {
                Gurgling1.setVelocityY(-300);
            } else if (number == 3) {
                Gurgling1.setVelocityX(-300);
            }
        }, 500);
        setInterval(function () {
            var number = Math.round(Math.random() * 3)
            if (number == 0) {
                Gurgling2.setVelocityY(300);
            } else if (number == 1) {
                Gurgling2.setVelocityX(300);
            } else if (number == 2) {
                Gurgling2.setVelocityY(-300);
            } else if (number == 3) {
                Gurgling2.setVelocityX(-300);
            }
        }, 500);
    }
}
function Gunner() {
    EnemyHPS = 5;
    EnemyAlive = true
    var Shooting = true;
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var enemys = enemy.create(sX, sY, 'Gun');
    var directionX = Math.random() * 180 - 120;
    var directionY = Math.random() * 180 - 120;
    enemys.setVelocityX(directionX);
    enemys.setVelocityY(directionY);
    enemys.setCollideWorldBounds(true);
    enemys.setBounce(1, 1);
    setInterval(function () {
        enemys.rotation = Phaser.Math.Angle.Between(enemys.x, enemys.y, player.x, player.y);
    }, 10);
    enemys.setDrag(500, 500)
    setInterval(function () {
        if (EnemyAlive == false) {
            Shooting = false;
        }
        if (Shooting == true) {
            EnemyBullets = EnemyBullet.create(enemys.x, enemys.y, 'bullet')
            EnemyBullets.setVelocityX(player.x - enemys.x)
            EnemyBullets.setVelocityY(player.y - enemys.y)
            EnemyBullets.setVisible(false);
            EnemyBullets.setActive(false)
            EnemyBullets.setVisible(true);
            EnemyBullets.setActive(true)
        } else {
        }
    }, 1000);
}
function HP() {
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var hpup = Hpup.create(sX, sY, 'HPup');
    hpup.setCollideWorldBounds(true);
}
function DMG() {
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var dmgup = Dmgup.create(sX, sY, 'DMGup');
    dmgup.setCollideWorldBounds(true);
}
function SOULHEART() {
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var SoulHPS = SoulHP.create(sX, sY, 'SoulH');
    SoulHPS.setCollideWorldBounds(true);
}
function COINS() {
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var melon = melons.create(sX, sY, 'Coin');
    melon.setCollideWorldBounds(true);
}
function FRIENDLYBOMB() {
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var bombsE = bombE.create(sX, sY, 'friendlyBOMB');
    bombsE.setCollideWorldBounds(true);
}
function AKEY() {
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var pineapple = pineapples.create(sX, sY, 'Key');
    pineapple.setCollideWorldBounds(true);
}
function LASERODOOM() {
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var brimstones = brimstone.create(sX, sY, 'peper');
    brimstones.setCollideWorldBounds(true);
}
function BREAKFAST() {
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var breakfasts = breakfast.create(sX, sY, 'breakfast');
    breakfasts.setCollideWorldBounds(true);
}
function QUARTER() {
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var quarters = quarter.create(sX, sY, 'quarter');
    quarters.setCollideWorldBounds(true);
}
function THEPACT() {
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var pacts = pact.create(sX, sY, 'pact');
    pacts.setCollideWorldBounds(true);
}
function SCAPULAR() {
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var scapulars = scapular.create(sX, sY, 'scapular');
    scapulars.setCollideWorldBounds(true);
}
function TRIPLESHOT() {
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var TriShots = TriShot.create(sX, sY, 'tri-shot');
    TriShots.setCollideWorldBounds(true);
}
function SPEC() {
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var Ouijis = Ouiji.create(sX, sY, 'spec');
    Ouijis.setCollideWorldBounds(true);
}
function THEBELT() {
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var Belts = Belt.create(sX, sY, 'belt');
    Belts.setCollideWorldBounds(true);
}
function THEMARK() {
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var Marks = Mark.create(sX, sY, 'mark');
    Marks.setCollideWorldBounds(true);
}
function THEBINKI() {
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var Binkys = Binky.create(sX, sY, 'binky').setScale(0.5);
    Binkys.setCollideWorldBounds(true);
}
function PJS() {
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var PJ = PJs.create(sX, sY, 'pjs').setScale(1.2).setTint(0x0000ff);
    PJ.setCollideWorldBounds(true);
}
function BOOM() {
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var Booms = Boom.create(sX, sY, 'mine').setScale(1.2).setTint(0xff00ff);
    Booms.setCollideWorldBounds(true);
}
function BLANKET() {
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var Blankets = Blanket.create(sX, sY, 'tri-shot').setScale(0.8).setTint(0x0000ff);
    Blankets.setCollideWorldBounds(true);
}
function WOODENSPOON() {
    Stigma.create(400, 300, 'spoon').setScale(0.5).setAngle(-90).setTint(0x0f000f);
}
function GURGLING() {
    GurglingHP = 50;
    killsLeft += 10000;
    killsneeded += 10000;
    killText.setText('Kills Left: ' + killsLeft)
    var Gurgling1 = Gurgling.create(350, 300, 'Gurglings').setScale(0.5);
    var Gurgling2 = Gurgling.create(450, 300, 'Gurglings').setScale(0.5);
    Gurgling1.setDrag(200);
    Gurgling2.setDrag(200);
    Gurgling1.setCollideWorldBounds(true);
    Gurgling2.setCollideWorldBounds(true);
    Gurgling1.setBounce(0.7);
    Gurgling2.setBounce(0.7);
    setInterval(function () {
        var number = Math.round(Math.random() * 3)
        if (number == 0) {
            Gurgling1.setVelocityY(300);
        } else if (number == 1) {
            Gurgling1.setVelocityX(300);
        } else if (number == 2) {
            Gurgling1.setVelocityY(-300);
        } else if (number == 3) {
            Gurgling1.setVelocityX(-300);
        }
    }, 500);
    setInterval(function () {
        var number = Math.round(Math.random() * 3)
        if (number == 0) {
            Gurgling2.setVelocityY(300);
        } else if (number == 1) {
            Gurgling2.setVelocityX(300);
        } else if (number == 2) {
            Gurgling2.setVelocityY(-300);
        } else if (number == 3) {
            Gurgling2.setVelocityX(-300);
        }
    }, 500);
}
function hp() {
    Hpup.create(400, 300, 'HPup');
}
function deploybomb() {
    var bombsE = bombE.create(400, 300, 'friendlyBOMB');
    bombsE.setCollideWorldBounds(true);
}
function coin() {
    melons.create(400, 300, 'Coin');
}
function key() {
    pineapples.create(400, 300, 'Key')
}
function soulH() {
    SoulHP.create(400, 300, 'SoulH')
}
function TintedsoulH() {
    SoulHP.create(tinted.x, tinted.y, 'SoulH')
}
function Tintedkey() {
    pineapples.create(tinted.x, tinted.y, 'Key')
}
function Tintedbomb() {
    bombE.create(tinted.x, tinted.y, 'friendlyBomb')
}
function RandomRock() {
    var number = Math.round(Math.random() * 10)
    if (number <= 9) {
        wall1.create(200, 250, 'barriers').setScale(1.5);
    } else if (number == 10) {
        wall1.create(200, 250, 'tinted').setScale(1.5).setTint(0x0000ff);
    }
}
function RandomRock1() {
    var number = Math.round(Math.random() * 10)
    if (number <= 9) {
        wall1.create(300, 250, 'barriers').setScale(1.5);
    } else if (number == 10) {
        wall1.create(300, 250, 'tinted').setScale(1.5).setTint(0x0000ff);
    }
}
function RandomRock2() {
    var number = Math.round(Math.random() * 10)
    if (number <= 9) {
        wall1.create(500, 250, 'barriers').setScale(1.5);
    } else if (number == 10) {
        wall1.create(500, 250, 'tinted').setScale(1.5).setTint(0x0000ff);
    }
}
function RandomRock3() {
    var number = Math.round(Math.random() * 10)
    if (number <= 9) {
        wall1.create(200, 350, 'barriers').setScale(1.5);
    } else if (number == 10) {
        wall1.create(200, 350, 'tinted').setScale(1.5).setTint(0x0000ff);
    }
}
function RandomRock4() {
    var number = Math.round(Math.random() * 10)
    if (number <= 9) {
        wall1.create(100, 350, 'barriers').setScale(1.5);
    } else if (number == 10) {
        wall1.create(100, 350, 'tinted').setScale(1.5).setTint(0x0000ff);
    }
}
function RandomRock5() {
    var number = Math.round(Math.random() * 10)
    if (number <= 9) {
        wall1.create(300, 350, 'barriers').setScale(1.5);
    } else if (number == 10) {
        wall1.create(300, 350, 'tinted').setScale(1.5).setTint(0x0000ff);
    }
}