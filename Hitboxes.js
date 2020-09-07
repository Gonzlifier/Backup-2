function RandomEnemy() {
    var EnemyRandom = Math.round(Math.random() * 8);
    if (EnemyRandom == 0) {
        Basic();
    } else if (EnemyRandom == 1) {
        Fast();
    } else if (EnemyRandom == 2) {
        Tank();
    } else if (EnemyRandom == 3) {
        Mine();
    } else if (EnemyRandom == 4) {
        Gunner();
    } else if (EnemyRandom == 5) {
        Tank();
    } else if (EnemyRandom == 6) {
        Fly();
    } else if (EnemyRandom == 7) {
        FlyGunner();
    } else if (EnemyRandom == 8) {
        Clotty();
    }
}
function spawnPickup() {
    var numberPickup = Math.round(Math.random() * 8);
    if (numberPickup == 0) {
        hp()
        console.log('Hp Pickup!');
    } else if (numberPickup == 1) {
        coin();
    } else if (numberPickup == 2) {
        coin();
    } else if (numberPickup == 3) {
        if (SoulChance == true) {
            soulH()
        } else {
        }
    } else if (numberPickup == 4) {
        deploybomb();
    } else if (numberPickup == 5) {
    } else if (numberPickup == 6) {
        key();
    } else if (numberPickup == 7) {
        soulH();
    } else if (numberPickup == 8) {
        if (SoulChance == true) {
            soulH()
        } else {
        }
    }
}
function tintedSpawn() {
    var numberPickup = Math.round(Math.random() * 4);
    if (numberPickup == 0) {
        TintedsoulH();
        TintedsoulH();
    } else if (numberPickup == 1) {
        Tintedkey();
        Tintedkey();
    } else if (numberPickup == 2) {
        Tintedbomb();
        Tintedbomb();
    } else if (numberPickup == 3) {
    } else if (numberPickup == 4) {
    }
}
function targetHitD(bomb, diamond) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    if (EnemyHPD <= 0) {
        diamond.disableBody(true, true);
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPD = 8;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
        EnemyHPD -= BulletDMG;
    }
}
function targetHitR(bomb, Wabbit) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPR -= BulletDMG;
    if (EnemyHPR <= 0) {
        Wabbit.disableBody(true, true);
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPR = 3;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitP(bomb, Slime) {
    var explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPP -= BulletDMG;
    if (EnemyHPP <= 0) {
        Slime.disableBody(true, true);
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPP = 12;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitM(bomb, mine) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPM -= BulletDMG;
    if (EnemyHPM <= 0) {
        mine.disableBody(true, true);
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPM = 1;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitF(bomb, fly) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPF -= BulletDMG;
    if (EnemyHPF <= 0) {
        fly.disableBody(true, true);
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPF = 5;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitFS(bomb, flyshoot) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPFS -= BulletDMG;
    if (EnemyHPFS <= 0) {
        flyshoot.disableBody(true, true);
        FlyAlive = false;
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPFS = 6;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitC(bomb, clotty) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPC -= BulletDMG;
    if (EnemyHPC <= 0) {
        clotty.disableBody(true, true);
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPC = 4;
        ClottyAlive = false;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitS(bomb, enemy) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPS -= BulletDMG;
    if (EnemyHPS <= 0) {
        enemy.disableBody(true, true)
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        Shooting = false;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPS = 7;
        EnemyAlive = false
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitG(bomb, Gurgling) {
    const collide = this.sound.add('BC');
    collide.play();
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    GurglingHP -= BulletDMG;
    if (GurglingHP <= 0) {
        if (GurgExist == 0) {
            Gurgling.disableBody(true, true)
            explode.play();
            killsLeft == 0;
            killsneeded == 0;
            GurgExist++;
            console.log('Gurgling 1 down');
            console.log(GurgExist);
            killText.setText('Kills Left: ' + killsLeft);
            GurglingHP = 50;
        } else if (GurgExist == 1) {
            console.log('Gurgling 2 down');
            Gurgling.disableBody(true, true)
            explode.play();
            BossTreasure();
            spawnPickup();
            killsLeft = 0;
            killsneeded = 0;
            killText.setText('Kills Left: ' + killsLeft);
            GurglingHP = 50;
        }
    }
}
function bossHit(bomb, Boss) {
    const collide = this.sound.add('BC');
    collide.play();
    const explode = this.sound.add('bossded');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    BossHP -= BulletDMG;
    if (BossHP <= 0) {
        Boss.disableBody(true, true);
        BossTreasure();
        explode.play();
        killsLeft = 0;
        killsneeded = 0;
        killText.setText('KillsLeft: ' + killsLeft);
        BossHP = 100;
    }
    if (BossHP <= 75) {
        if (waveAt75 == true) {
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            waveAt75 = false;
            waveAt50 = true;
        }
    }
    if (BossHP <= 50) {
        if (waveAt50 == true) {
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            waveAt50 = false;
            waveAt25 = true;
        }
    }
    if (BossHP <= 25) {
        if (waveAt25 == true) {
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            waveAt25 = false
        }
    }
}
function BulletCollide(EnemyBullet, bomb) {
    const explode = this.sound.add('pew');
    EnemyBullet.disableBody(true, true);
    bomb.disableBody(true, true);
    explode.play();
}
function mineHitD(mines, diamonds) {
    const explode = this.sound.add('boom');
    mines.disableBody(true, true);
    diamonds.disableBody(true, true);
    explode.play();
    killsLeft -= 2;
    killsneeded -= 2;
    killText.setText('KillsLeft: ' + killsLeft);
}
function mineHitR(mines, rocks) {
    const explode = this.sound.add('boom');
    mines.disableBody(true, true);
    rocks.disableBody(true, true);
    explode.play();
    killsLeft -= 2;
    killsneeded -= 2;
    killText.setText('KillsLeft: ' + killsLeft);
}
function mineHitP(mines, patrols) {
    const explode = this.sound.add('boom');
    mines.disableBody(true, true);
    patrols.disableBody(true, true);
    explode.play();
    killsLeft -= 2;
    killsneeded -= 2;
    killText.setText('KillsLeft: ' + killsLeft);
}
function NoOverlap(bombs1, bombs1) {
    bombs1.disableBody(true, true);
    bombs1.disableBody(true, true);
}
function NoOverlap(bombs2, bombs2) {
    bombs2.disableBody(true, true);
    bombs2.disableBody(true, true);
}
function NoOverlap(bombs3, bombs3) {
    bombs3.disableBody(true, true);
    bombs3.disableBody(true, true);
}
function NoOverlap(bombs4, bombs4) {
    bombs4.disableBody(true, true);
    bombs4.disableBody(true, true);
}
function NoOverlap(lazerbeam, lazerbeam) {
    lazerbeam.disableBody(true, true);
    lazerbeam.disableBody(true, true);
    lazerbeam.setVisible(false);
    lazerbeam.setActive(false);
}
function bulletHit(bullets, bullets) {
    bullets.disableBody(true, true);
    var collide = this.sound.add('BC');
    collide.play();
}
function youHit(player, patrols) {
    if (currentSouls > 0) {
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        patrols.disableBody(true, true)
        currentSouls--;
        SoulText.setText('Soul Hearts: ' + currentSouls);
        const explode = this.sound.add('BC');
        explode.play();
    } else if (currentSouls == 0) {
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        patrols.disableBody(true, true)
        currentHP -= 1;
        HPText.setText('Current Hp: ' + currentHP);
        const explode = this.sound.add('BC');
        explode.play();
        if (currentHP <= 0) {
            HPText = 0;
            const collide = this.sound.add('playerded');
            collide.play();
            this.physics.pause();
            player.setTint(0xff0000);
            let gameOverText = this.add.text(game.config.width / 2.5,
                game.config.height / 3,
                'GAME OVER',
                { fontSize: '32px', fill: '#fff' });
            gameOverText.setDepth(1);
            gameOver = true;
            keyA = false;
            keyS = false;
            keyD = false;
            keyW = false;
        }
    }
}
function BossHitPlayer(player, Boss) {
    if (currentSouls > 0) {
        currentSouls--;
        SoulText.setText('Soul Hearts: ' + currentSouls);
        const explode = this.sound.add('BC');
        explode.play();
    } else if (currentSouls == 0) {
        currentHP -= 1;
        HPText.setText('Current Hp: ' + currentHP);
        const explode = this.sound.add('BC');
        explode.play();
        if (currentHP <= 0) {
            HPText = 0;
            const collide = this.sound.add('playerded');
            collide.play();
            this.physics.pause();
            player.setTint(0xff0000);
            let gameOverText = this.add.text(game.config.width / 2.5,
                game.config.height / 3,
                'GAME OVER',
                { fontSize: '32px', fill: '#fff' });
            gameOverText.setDepth(1);
            gameOver = true;
            keyA = false;
            keyS = false;
            keyD = false;
            keyW = false;
        }
    }
}
function BulletOw(player, EnemyBullet) {
    if (currentSouls > 0) {
        EnemyBullet.disableBody(true, true)
        currentSouls--;
        SoulText.setText('Soul Hearts: ' + currentSouls);
        const explode = this.sound.add('BC');
        explode.play();
    } else if (currentSouls <= 0) {
        EnemyBullet.disableBody(true, true)
        currentHP -= 1;
        HPText.setText('Current Hp: ' + currentHP);
        const explode = this.sound.add('BC');
        explode.play();
        if (currentHP <= 0) {
            EnemyBullet.disableBody(true, true)
            HPText = 0;
            const collide = this.sound.add('playerded');
            collide.play();
            this.physics.pause();
            player.setTint(0xff0000);
            let gameOverText = this.add.text(game.config.width / 2.5,
                game.config.height / 3,
                'GAME OVER',
                { fontSize: '32px', fill: '#fff' });
            gameOverText.setDepth(1);
            gameOver = true;
            keyA = false;
            keyS = false;
            keyD = false;
            keyW = false;
        }
    }
}
function Deleto(wall1, EnemyBullet) {
    EnemyBullet.disableBody(true, true)
}
function WallHit(bomb) {
    bomb.disableBody(true, true)
}
function RestartW(ResetZone, wall1) {
    wall1.disableBody(true, true);
}
function RestartP(ResetZone, Pit) {
    Pit.disableBody(true, true);
}
function Restart1(ResetZone, Door1E) {
    Door1E.disableBody(true, true);
}
function Restart2(ResetZone, Door2E) {
    Door2E.disableBody(true, true);
}
function Restart3(ResetZone, Door3E) {
    Door3E.disableBody(true, true);
}
function Restart4(ResetZone, Door4E) {
    Door4E.disableBody(true, true);
}
function Restart1W(ResetZone, Door1Wall) {
    Door1Wall.disableBody(true, true);
}
function Restart2W(ResetZone, Door2Wall) {
    Door2Wall.disableBody(true, true);
}
function Restart3W(ResetZone, Door3Wall) {
    Door3Wall.disableBody(true, true);
}
function Restart4W(ResetZone, Door4Wall) {
    Door4Wall.disableBody(true, true);
}
function RestartR(ResetZone, RoomIn) {
    RoomIn.disableBody(true, true);
}
function Restart(ResetZone, ResetDelete) {
    ResetZone.disableBody(true, true);
    ResetDelete.disableBody(true, true);
}
function CheckFly() {
    if (FlyingActive == true) {
        this.physics.world.removeCollider(qween);
        this.physics.world.removeCollider(king);
    } else if (FlyingActive == false) {
        var qween = this.physics.add.collider(player, wall1);
        var king = this.physics.add.collider(player, Pit);
        qween
        king
    }
}
function Deleto1(WallBorder, wall1) {
    wall1.disableBody(true, true)
}
function Deleto2(WallBorder, Pit) {
    Pit.disableBody(true, true)
}
function RockBoom(bombF, wall1) {
    wall1.disableBody(true, true);
    bombF.disableBody(true, true);
}
function TintedBoom(bombF, tinted) {
    const collide = this.sound.add('boom');
    collide.play();
    tintedSpawn();
    tinted.disableBody(true, true)
}