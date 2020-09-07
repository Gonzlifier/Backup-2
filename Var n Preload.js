var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false,
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
    }
};
var game = new Phaser.Game(config);
let keyA;
let keyS;
let keyD;
let keyW;
var gameOver = false;
var player;
var rocks;
var mines;
var patrols;
var diamonds;
var enemy;
var stars1;
var stars2;
var stars3;
var stars4;
var cursors;
var text;
var Hpup;
var Dmgup;
var killsLeft = 6;
var killText;
var currentLevel = 1;
var levelText;
var currentHP = 6;
var HPText;
var titleT;
var BrimCharge = 0;
var BrimCharger = 100;
var helpme = false;
var spawn;
var spawnDelay;
var Down = 400;
var Up = -400;
var Left = -400;
var Right = 400;
var MoveDown = 250;
var MoveUp = -250;
var MoveLeft = -250;
var MoveRight = 250;
var EnemyHPD;
var EnemyHPR;
var EnemyHPM;
var EnemyHPP;
var EnemyHPS;
var EnemyHPF;
var EnemyHPFS;
var EnemyHPC;
var BossHP;
var GurglingHP;
var BulletDMG = 1;
var BulletFire = 1;
var Door1L;
var Door2L;
var Door3L;
var Door4L;
var doorOpened;
var Entered = false;
var killsneeded = 6;
var door = false;
var currentBombs = 0;
var BombText;
var BombF;
var ButtonEdown = false;
var U = false;
var D = false;
var L = false;
var R = false;
var directX;
var directY;
var brimstone;
var brimstoneActive = false;
var laserfire = false;
var brimstoneCharge;
var Acess = false
var playes;
var playez;
var beamActive = false;
var beamDown = false;
var beamUp = false;
var beamLeft = false;
var beamRight = false;
var brimstonelaser = false;
var lazerbeam;
var BR = false;
var BL = false;
var BU = false;
var BD = false;
var LazerDMG = 5;
var lazerbeams;
var switch1 = false;
var getTroom = true;
var MaxHp = 6;
var SoulText;
var currentSouls = 0;
var scapularActive = false;
var addSoulHearts = false;
var BossChance = 0;
var BossMinions = false;
var waveAt75 = false;
var waveAt50 = false;
var waveAt25 = false;
var KeyText;
var currentKeys = 0;
var EnemyBullet;
var bullet;
var EnemyAlive = true;
var EnemyShootAngle;
var TriShotActive = false;
var ShotTimer = true;
var ShotReady = true;
var FireRate = 500;
var wall1;
var Pit;
var Reset = false;
var ResetZone;
var FlyingBullet;
var FlyAlive = true;
var SpectralActive = false;
var FlyingActive = false;
var BombWait = false;
var RoomNW = false;
var RoomN = false;
var RoomNE = false;
var RoomW = false;
var RoomC = false;
var RoomE = false;
var RoomSW = false;
var RoomS = false;
var RoomSE = false;
var RoomNWClear = false;
var RoomNClear = false;
var RoomNEClear = false;
var RoomWClear = false;
var RoomCClear = false;
var RoomEClear = false;
var RoomSWClear = false;
var RoomSClear = false;
var RoomSEClear = false;
var Doorcheck;
var RoomLoad;
var TreasurePossible = true;
var ShopPossible = true;
var BossPossible = true;
var GurgExist = 0;
var ClottyAlive = false;
var BossProtect = false;
var SoulChance = false;
function preload() {
    this.load.image('wall', 'http://labs.phaser.io/assets/sprites/gem.png')
    this.load.image('barriers', 'http://labs.phaser.io/assets/sprites/crate32.png')
    this.load.image('tinted', 'http://labs.phaser.io/assets/sprites/crate32.png')
    this.load.image('pit', 'http://labs.phaser.io/assets/sprites/loop.png')
    this.load.image('Room', 'http://labs.phaser.io/assets/sprites/steelbox.png')
    this.load.image('RoomIn', 'http://labs.phaser.io/assets/sprites/box-item-boxed.png')
    //-----------------------------------------------------------
    this.load.image('sky', 'http://labs.phaser.io/src/games/firstgame/assets/sky.png');
    this.load.image('space', 'http://labs.phaser.io/assets/skies/space.jpg');
    this.load.image('bomb', 'http://labs.phaser.io/src/games/firstgame/assets/bomb.png');
    this.load.image('Spec', 'http://labs.phaser.io/assets/sprites/rain.png');
    this.load.image('menutext', 'http://labs.phaser.io/assets/sprites/button-text.png');
    this.load.image('friendlyBOMB', 'http://labs.phaser.io/assets/sprites/red_ball.png')
    this.load.image('activeBOMB', 'http://labs.phaser.io/assets/sprites/shinyball.png')
    //-----------------------------------------------------------
    this.load.image('diamond', 'http://labs.phaser.io/assets/sprites/diamond.png');
    this.load.image('bullet', 'http://labs.phaser.io/assets/sprites/bullets/bullet7.png');
    this.load.image('Wabbit', 'http://labs.phaser.io/assets/sprites/wabbit.png');
    this.load.image('mine', 'http://labs.phaser.io/assets/sprites/mine.png');
    this.load.image('Slime', 'http://labs.phaser.io/assets/sprites/slime.png');
    this.load.image('Gun', 'http://labs.phaser.io/assets/sprites/player_handgun.png'),
        this.load.image('fly', 'http://labs.phaser.io/assets/sprites/wasp.png');
    this.load.image('flyshoot', 'http://labs.phaser.io/assets/sprites/wasp.png'),
        this.load.image('clotty', 'http://labs.phaser.io/assets/sprites/mushroom2.png'),
        this.load.image('Boss', 'http://labs.phaser.io/assets/sprites/hotdog.png');
    this.load.image('Gurglings', 'http://labs.phaser.io/assets/sprites/brain.png');
    //-----------------------------------------------------------
    this.load.image('HPup', 'http://labs.phaser.io/assets/sprites/firstaid.png');
    this.load.image('DMGup', 'http://labs.phaser.io/assets/sprites/orb-red.png');
    this.load.image('SoulH', 'http://labs.phaser.io/assets/sprites/orb-blue.png');
    this.load.image('star', 'http://labs.phaser.io/src/games/firstgame/assets/star.png');
    this.load.image('Coin', 'http://labs.phaser.io/assets/sprites/melon.png');
    this.load.image('Key', 'http://labs.phaser.io/assets/sprites/pineapple.png');
    //-----------------------------------------------------------
    this.load.image('peper', 'http://labs.phaser.io/assets/sprites/pepper.png');
    this.load.image('Blaser', 'http://labs.phaser.io/assets/sprites/rgblaser.png');
    this.load.image('breakfast', 'http://labs.phaser.io/assets/sprites/apple.png');
    this.load.image('quarter', 'http://labs.phaser.io/assets/sprites/purple_ball.png');
    this.load.image('heart', 'http://labs.phaser.io/assets/sprites/tomato.png');
    this.load.image('pact', 'http://labs.phaser.io/assets/sprites/default.png');
    this.load.image('scapular', 'http://labs.phaser.io/assets/sprites/yellow_ball.png');
    this.load.image('tri-shot', 'http://labs.phaser.io/assets/sprites/crate32.png');
    this.load.image('Hangman', 'http://labs.phaser.io/assets/sprites/onion.png');
    this.load.image('spec', 'http://labs.phaser.io/assets/sprites/bullets/bullet9.png');
    this.load.image('belt', 'http://labs.phaser.io/assets/sprites/blue_ball.png');
    this.load.image('mark', 'http://labs.phaser.io/assets/sprites/enemy-bullet.png');
    this.load.image('sadonion', 'http://labs.phaser.io/assets/sprites/onion.png');
    this.load.image('skeleKey', 'http://labs.phaser.io/assets/sprites/bullet.png');
    this.load.image('binky', 'http://labs.phaser.io/assets/sprites/eyes.png');
    this.load.image('pjs', 'http://labs.phaser.io/assets/sprites/phaser-dude.png');
    this.load.image('spoon', 'http://labs.phaser.io/assets/sprites/arrow.png');
    //-----------------------------------------------------------
    this.load.audio('BC', 'http://labs.phaser.io/assets/audio/SoundEffects/boss_hit.wav');
    this.load.audio('boom', 'http://labs.phaser.io/assets/audio/SoundEffects/explosion.mp3');
    this.load.audio('playerded', 'http://labs.phaser.io/assets/audio/SoundEffects/player_death.wav')
    this.load.audio('pickup', 'http://labs.phaser.io/assets/audio/SoundEffects/pickup.wav');
    this.load.audio('bump', 'http://labs.phaser.io/assets/audio/SoundEffects/need_cells.wav');
    this.load.audio('coingathered', 'http://labs.phaser.io/assets/audio/SoundEffects/key.wav');
    this.load.audio('bossded', 'http://labs.phaser.io/assets/audio/SoundEffects/sentry_explode.wav');
    this.load.audio('pew', 'http://labs.phaser.io/assets/audio/SoundEffects/pistol.wav');
    this.load.audio('pewpewpew', 'http://labs.phaser.io/assets/audio/SoundEffects/shotgun.wav');
    this.load.spritesheet('dude', 'http://labs.phaser.io/src/games/firstgame/assets/dude.png', { frameWidth: 32, frameHeight: 48 });
};
function create() {
    this.physics.world.setBounds(0, 0, 800, 600);
    titleT = this.add.image(400, 300, 'menutext').setInteractive();
    titleT.setDepth(1);
    spawn = titleT.on('pointerdown', function () {
        helpme = true;
        window.setTimeout(function () {
            killsneeded -= 6;
            killsLeft -= 6;
            killText.setText('KillsLeft: ' + killsLeft)
        });
    });
    //-----------------------------------------------------------
    this.add.image(400, 300, 'sky');
    this.physics.pause();
    killText = this.add.text(40, 46, 'KillsLeft: 6', { fontSize: '32px', fill: '#000' });
    levelText = this.add.text(40, 78, 'Level: 1', { fontSize: '32px', fill: '#000' });
    HPText = this.add.text(40, 102, 'Current Hp: 6', { fontSize: '16px', fill: '#000' });
    SoulText = this.add.text(40, 114, 'Soul Hearts: 0', { fontSize: '16px', fill: '#000' });
    CoinText = this.add.text(40, 126, 'Coins : 0', { fontSize: '16px', fill: '#000' });
    BombText = this.add.text(40, 138, 'Bombs: 0', { fontSize: '16px', fill: '#000' });
    KeyText = this.add.text(40, 150, 'Keys: 0', { fontSize: '16px', fill: '#000' });
    //-----------------------------------------------------------
    keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
    //-----------------------------------------------------------
    cursors = this.input.keyboard.createCursorKeys();
    player = this.physics.add.sprite(400, 400, 'dude');
    player.setCollideWorldBounds(true);
    killText.setDepth(2);
    levelText.setDepth(2);
    HPText.setDepth(2);
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'turn',
        frames: [{ key: 'dude', frame: 4 }],
        frameRate: 20
    });
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'up',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'down',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });
    player.setDrag(500);
    //-----------------------------------------------------------
    WallBorder = this.physics.add.staticGroup()
    wall1 = this.physics.add.staticGroup();
    tinted = this.physics.add.staticGroup();
    Something = this.physics.add.staticGroup();
    Pit = this.physics.add.staticGroup();
    patrols = this.physics.add.group();
    mines = this.physics.add.group();
    diamonds = this.physics.add.group();
    Boss = this.physics.add.group();
    Gurgling = this.physics.add.group();
    rocks = this.physics.add.group();
    enemy = this.physics.add.group();
    fly = this.physics.add.group();
    clotty = this.physics.add.group();
    flyshoot = this.physics.add.group();
    EnemyBullet = this.physics.add.group();
    FlyingBullet = this.physics.add.group();
    bombs1 = this.physics.add.group();
    bombs2 = this.physics.add.group();
    bombs3 = this.physics.add.group();
    bombs4 = this.physics.add.group();
    bomb1s = this.physics.add.group();
    bomb2s = this.physics.add.group();
    bomb3s = this.physics.add.group();
    bomb4s = this.physics.add.group();
    b1s = this.physics.add.group();
    b2s = this.physics.add.group();
    b3s = this.physics.add.group();
    b4s = this.physics.add.group();
    Specs1 = this.physics.add.group();
    Specs2 = this.physics.add.group();
    Specs3 = this.physics.add.group();
    Specs4 = this.physics.add.group();
    Spec1s = this.physics.add.group();
    Spec2s = this.physics.add.group();
    Spec3s = this.physics.add.group();
    Spec4s = this.physics.add.group();
    S1s = this.physics.add.group();
    S2s = this.physics.add.group();
    S3s = this.physics.add.group();
    S4s = this.physics.add.group();
    //-----------------------------------------------------------
    bombE = this.physics.add.group();
    bombF = this.physics.add.group();
    Hpup = this.physics.add.group();
    Dmgup = this.physics.add.group();
    melons = this.physics.add.group();
    pineapples = this.physics.add.group();
    SoulHP = this.physics.add.group();
    //-----------------------------------------------------------
    Door1L = this.add.zone(400, 70).setSize(100, 10);
    Door2L = this.add.zone(750, 300).setSize(10, 100);
    Door3L = this.add.zone(400, 530).setSize(100, 10);
    Door4L = this.add.zone(50, 300).setSize(10, 100);
    Door1E = this.physics.add.group();
    Door2E = this.physics.add.group();
    Door3E = this.physics.add.group();
    Door4E = this.physics.add.group();
    Door1Wall = this.physics.add.staticGroup();
    Door2Wall = this.physics.add.staticGroup();
    Door3Wall = this.physics.add.staticGroup();
    Door4Wall = this.physics.add.staticGroup();
    Doorcheck = Math.round(Math.random() * 8);
    if (Doorcheck == 0) {
        RoomNW = true;
    } else if (Doorcheck == 1) {
        RoomN = true;
    } else if (Doorcheck == 2) {
        RoomNE = true;
    } else if (Doorcheck == 3) {
        RoomW = true;
    } else if (Doorcheck == 4) {
        RoomC = true;
    } else if (Doorcheck == 5) {
        RoomE = true;
    } else if (Doorcheck == 6) {
        RoomSW = true;
    } else if (Doorcheck == 7) {
        RoomS = true;
    } else if (Doorcheck == 8) {
        RoomSE = true;
    }
    this.physics.world.enable(Door1L);
    this.physics.world.enable(Door2L);
    this.physics.world.enable(Door3L);
    this.physics.world.enable(Door4L);
    ResetZone = this.physics.add.group();
    ResetDelete = this.physics.add.group();
    Room = this.physics.add.group();
    RoomIn = this.physics.add.group();
    //-----------------------------------------------------------
    HpShop = this.physics.add.group();
    BombFShop = this.physics.add.group();
    KeyShop = this.physics.add.group();
    SoulShop = this.physics.add.group();
    PactShop = this.physics.add.group();
    BeltShop = this.physics.add.group();
    BinkyShop = this.physics.add.group();
    //-----------------------------------------------------------
    lazerbeam = this.physics.add.group();
    brimstone = this.physics.add.group();
    breakfast = this.physics.add.group();
    quarter = this.physics.add.group();
    heart = this.physics.add.group();
    pact = this.physics.add.group();
    scapular = this.physics.add.group();
    TriShot = this.physics.add.group();
    Hanged = this.physics.add.group();
    Ouiji = this.physics.add.group();
    Belt = this.physics.add.group();
    Mark = this.physics.add.group();
    SadOnion = this.physics.add.group();
    SkeleKey = this.physics.add.group();
    Binky = this.physics.add.group();
    PJs = this.physics.add.group();
    Boom = this.physics.add.group();
    Blanket = this.physics.add.group();
    WSpoon = this.physics.add.group();
    Stigma = this.physics.add.group();
    Mitre = this.physics.add.group();
    //-----------------------------------------------------------
    WallBorder.create(20, 40, 'wall');
    WallBorder.create(20, 130, 'wall');
    WallBorder.create(20, 220, 'wall');
    WallBorder.create(20, 400, 'wall');
    WallBorder.create(20, 490, 'wall');
    WallBorder.create(20, 580, 'wall');
    //-----------------------------------------------------------
    WallBorder.create(780, 40, 'wall');
    WallBorder.create(780, 130, 'wall');
    WallBorder.create(780, 220, 'wall');
    WallBorder.create(780, 400, 'wall');
    WallBorder.create(780, 490, 'wall');
    WallBorder.create(780, 580, 'wall');
    //-----------------------------------------------------------
    WallBorder.create(40, 10, 'wall').setAngle(90);
    WallBorder.create(130, 10, 'wall').setAngle(90);
    WallBorder.create(220, 10, 'wall').setAngle(90);
    WallBorder.create(310, 10, 'wall').setAngle(90);
    WallBorder.create(490, 10, 'wall').setAngle(90);
    WallBorder.create(580, 10, 'wall').setAngle(90);
    WallBorder.create(670, 10, 'wall').setAngle(90);
    WallBorder.create(760, 10, 'wall').setAngle(90);
    //-----------------------------------------------------------
    WallBorder.create(40, 580, 'wall').setAngle(90);
    WallBorder.create(130, 580, 'wall').setAngle(90);
    WallBorder.create(220, 580, 'wall').setAngle(90);
    WallBorder.create(310, 580, 'wall').setAngle(90);
    WallBorder.create(490, 580, 'wall').setAngle(90);
    WallBorder.create(580, 580, 'wall').setAngle(90);
    WallBorder.create(670, 580, 'wall').setAngle(90);
    WallBorder.create(760, 580, 'wall').setAngle(90);
    Room.create(740, 60, 'Room').setScale(0.5);
    Room.create(700, 60, 'Room').setScale(0.5);
    Room.create(660, 60, 'Room').setScale(0.5);
    Room.create(740, 100, 'Room').setScale(0.5);
    Room.create(700, 100, 'Room').setScale(0.5);
    Room.create(660, 100, 'Room').setScale(0.5);
    Room.create(740, 140, 'Room').setScale(0.5);
    Room.create(700, 140, 'Room').setScale(0.5);
    Room.create(660, 140, 'Room').setScale(0.5);
    this.physics.add.collider(bombs1, wall1, WallHit);
    this.physics.add.collider(bombs2, wall1, WallHit);
    this.physics.add.collider(bombs3, wall1, WallHit);
    this.physics.add.collider(bombs4, wall1, WallHit);
    this.physics.add.collider(bomb1s, wall1, WallHit);
    this.physics.add.collider(bomb2s, wall1, WallHit);
    this.physics.add.collider(bomb3s, wall1, WallHit);
    this.physics.add.collider(bomb4s, wall1, WallHit);
    this.physics.add.collider(b1s, wall1, WallHit);
    this.physics.add.collider(b2s, wall1, WallHit);
    this.physics.add.collider(b3s, wall1, WallHit);
    this.physics.add.collider(b4s, wall1, WallHit);
    this.physics.add.collider(SoulHP, SoulHP);
    this.physics.add.collider(pineapples, pineapples);
    this.physics.add.collider(bombE, bombE);
    this.physics.add.collider(bombF, bombF);
    this.physics.add.overlap(bombF, wall1, RockBoom, null,);
    //-----------------------------------------------------
    this.physics.add.collider(rocks, diamonds);
    this.physics.add.collider(rocks, patrols);
    this.physics.add.collider(rocks, rocks);
    this.physics.add.collider(player, Hpup, powerUpH, null, this);
    this.physics.add.collider(player, enemy);
    this.physics.add.collider(enemy, enemy);
    this.physics.add.collider(enemy, mines);
    this.physics.add.collider(player, Boss, BossHitPlayer, null, this);;
    this.physics.add.collider(player, Gurgling, BossHitPlayer, null, this);;
    this.physics.add.collider(wall1, diamonds);
    this.physics.add.collider(wall1, patrols);
    this.physics.add.collider(wall1, rocks);
    this.physics.add.collider(wall1, mines);
    this.physics.add.collider(wall1, enemy);
    this.physics.add.collider(wall1, clotty);
    this.physics.add.collider(Door1Wall, diamonds);
    this.physics.add.collider(Door1Wall, patrols);
    this.physics.add.collider(Door1Wall, rocks);
    this.physics.add.collider(Door1Wall, mines);
    this.physics.add.collider(Door1Wall, enemy);
    this.physics.add.collider(Door1Wall, player);
    this.physics.add.collider(Door1Wall, fly);
    this.physics.add.collider(Door1Wall, flyshoot);
    this.physics.add.collider(Door1Wall, Boss);
    this.physics.add.collider(Door1Wall, Gurgling);
    this.physics.add.collider(Door1Wall, clotty);
    this.physics.add.collider(Door1Wall, EnemyBullet, Deleto);
    this.physics.add.collider(Door1Wall, FlyingBullet, Deleto);
    this.physics.add.collider(Door2Wall, diamonds);
    this.physics.add.collider(Door2Wall, patrols);
    this.physics.add.collider(Door2Wall, rocks);
    this.physics.add.collider(Door2Wall, mines);
    this.physics.add.collider(Door2Wall, enemy);
    this.physics.add.collider(Door2Wall, player);
    this.physics.add.collider(Door2Wall, fly);
    this.physics.add.collider(Door2Wall, flyshoot);
    this.physics.add.collider(Door2Wall, Boss);
    this.physics.add.collider(Door2Wall, Gurgling);
    this.physics.add.collider(Door2Wall, clotty);
    this.physics.add.collider(Door2Wall, EnemyBullet, Deleto);
    this.physics.add.collider(Door2Wall, FlyingBullet, Deleto);
    this.physics.add.collider(Door3Wall, diamonds);
    this.physics.add.collider(Door3Wall, patrols);
    this.physics.add.collider(Door3Wall, rocks);
    this.physics.add.collider(Door3Wall, mines);
    this.physics.add.collider(Door3Wall, enemy);
    this.physics.add.collider(Door3Wall, player);
    this.physics.add.collider(Door3Wall, fly);
    this.physics.add.collider(Door3Wall, flyshoot);
    this.physics.add.collider(Door3Wall, Boss);
    this.physics.add.collider(Door3Wall, Gurgling);
    this.physics.add.collider(Door3Wall, clotty);
    this.physics.add.collider(Door3Wall, EnemyBullet, Deleto);
    this.physics.add.collider(Door3Wall, FlyingBullet, Deleto);
    this.physics.add.collider(Door4Wall, diamonds);
    this.physics.add.collider(Door4Wall, patrols);
    this.physics.add.collider(Door4Wall, rocks);
    this.physics.add.collider(Door4Wall, mines);
    this.physics.add.collider(Door4Wall, enemy);
    this.physics.add.collider(Door4Wall, player);
    this.physics.add.collider(Door4Wall, fly);
    this.physics.add.collider(Door4Wall, flyshoot);
    this.physics.add.collider(Door4Wall, Boss);
    this.physics.add.collider(Door4Wall, Gurgling);
    this.physics.add.collider(Door4Wall, clotty);
    this.physics.add.collider(Door4Wall, EnemyBullet, Deleto);
    this.physics.add.collider(Door4Wall, FlyingBullet, Deleto);
    this.physics.add.collider(WallBorder, diamonds);
    this.physics.add.collider(WallBorder, patrols);
    this.physics.add.collider(WallBorder, rocks);
    this.physics.add.collider(WallBorder, mines);
    this.physics.add.collider(WallBorder, enemy);
    this.physics.add.collider(WallBorder, player);
    this.physics.add.collider(WallBorder, fly);
    this.physics.add.collider(WallBorder, flyshoot);
    this.physics.add.collider(WallBorder, Boss);
    this.physics.add.collider(WallBorder, Gurgling);
    this.physics.add.collider(WallBorder, clotty);
    this.physics.add.collider(WallBorder, wall1, Deleto1);
    this.physics.add.collider(WallBorder, Pit, Deleto2);
    this.physics.add.collider(WallBorder, EnemyBullet, Deleto);
    this.physics.add.collider(WallBorder, FlyingBullet, Deleto);
    this.physics.add.overlap(wall1, player, CheckFly, null, this);
    this.physics.add.collider(wall1, EnemyBullet, Deleto);
    this.physics.add.collider(wall1, FlyingBullet, Deleto);
    this.physics.add.collider(Pit, diamonds);
    this.physics.add.collider(Pit, patrols);
    this.physics.add.collider(Pit, rocks);
    this.physics.add.collider(Pit, mines);
    this.physics.add.collider(Pit, enemy);
    this.physics.add.overlap(Pit, player, CheckFly, null, this);
    //-----------------------------------------------------------
    this.physics.add.overlap(bombs1, diamonds, targetHitD, null, this);
    this.physics.add.overlap(bombs2, diamonds, targetHitD, null, this);
    this.physics.add.overlap(bombs3, diamonds, targetHitD, null, this);
    this.physics.add.overlap(bombs4, diamonds, targetHitD, null, this);
    this.physics.add.overlap(bombs1, rocks, targetHitR, null, this);
    this.physics.add.overlap(bombs2, rocks, targetHitR, null, this);
    this.physics.add.overlap(bombs3, rocks, targetHitR, null, this);
    this.physics.add.overlap(bombs4, rocks, targetHitR, null, this);
    this.physics.add.overlap(bombs1, mines, targetHitM, null, this);
    this.physics.add.overlap(bombs2, mines, targetHitM, null, this);
    this.physics.add.overlap(bombs3, mines, targetHitM, null, this);
    this.physics.add.overlap(bombs4, mines, targetHitM, null, this);
    this.physics.add.overlap(bombs1, patrols, targetHitP, null, this);
    this.physics.add.overlap(bombs2, patrols, targetHitP, null, this);
    this.physics.add.overlap(bombs3, patrols, targetHitP, null, this);
    this.physics.add.overlap(bombs4, patrols, targetHitP, null, this);
    this.physics.add.overlap(bombs1, Boss, bossHit, null, this);
    this.physics.add.overlap(bombs2, Boss, bossHit, null, this);
    this.physics.add.overlap(bombs3, Boss, bossHit, null, this);
    this.physics.add.overlap(bombs4, Boss, bossHit, null, this);
    this.physics.add.overlap(bombs1, enemy, targetHitS, null, this);
    this.physics.add.overlap(bombs2, enemy, targetHitS, null, this);
    this.physics.add.overlap(bombs3, enemy, targetHitS, null, this);
    this.physics.add.overlap(bombs4, enemy, targetHitS, null, this);
    this.physics.add.overlap(bombs1, fly, targetHitF, null, this);
    this.physics.add.overlap(bombs2, fly, targetHitF, null, this);
    this.physics.add.overlap(bombs3, fly, targetHitF, null, this);
    this.physics.add.overlap(bombs4, fly, targetHitF, null, this);
    this.physics.add.overlap(bombs1, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(bombs2, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(bombs3, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(bombs4, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(bombs1, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(bombs2, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(bombs3, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(bombs4, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(bombs1, clotty, targetHitC, null, this);
    this.physics.add.overlap(bombs2, clotty, targetHitC, null, this);
    this.physics.add.overlap(bombs3, clotty, targetHitC, null, this);
    this.physics.add.overlap(bombs4, clotty, targetHitC, null, this);
    // ------------------------------------------------------------------------
    this.physics.add.overlap(bomb1s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(bomb2s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(bomb3s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(bomb4s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(bomb1s, rocks, targetHitR, null, this);
    this.physics.add.overlap(bomb2s, rocks, targetHitR, null, this);
    this.physics.add.overlap(bomb3s, rocks, targetHitR, null, this);
    this.physics.add.overlap(bomb4s, rocks, targetHitR, null, this);
    this.physics.add.overlap(bomb1s, mines, targetHitM, null, this);
    this.physics.add.overlap(bomb2s, mines, targetHitM, null, this);
    this.physics.add.overlap(bomb3s, mines, targetHitM, null, this);
    this.physics.add.overlap(bomb4s, mines, targetHitM, null, this);
    this.physics.add.overlap(bomb1s, patrols, targetHitP, null, this);
    this.physics.add.overlap(bomb2s, patrols, targetHitP, null, this);
    this.physics.add.overlap(bomb3s, patrols, targetHitP, null, this);
    this.physics.add.overlap(bomb4s, patrols, targetHitP, null, this);
    this.physics.add.overlap(bomb1s, Boss, bossHit, null, this);
    this.physics.add.overlap(bomb2s, Boss, bossHit, null, this);
    this.physics.add.overlap(bomb3s, Boss, bossHit, null, this);
    this.physics.add.overlap(bomb4s, Boss, bossHit, null, this);
    this.physics.add.overlap(bomb1s, enemy, targetHitS, null, this);
    this.physics.add.overlap(bomb2s, enemy, targetHitS, null, this);
    this.physics.add.overlap(bomb3s, enemy, targetHitS, null, this);
    this.physics.add.overlap(bomb4s, enemy, targetHitS, null, this);
    this.physics.add.overlap(bomb1s, fly, targetHitF, null, this);
    this.physics.add.overlap(bomb2s, fly, targetHitF, null, this);
    this.physics.add.overlap(bomb3s, fly, targetHitF, null, this);
    this.physics.add.overlap(bomb4s, fly, targetHitF, null, this);
    this.physics.add.overlap(bomb1s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(bomb2s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(bomb3s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(bomb4s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(bomb1s, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(bomb2s, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(bomb3s, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(bomb4s, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(bomb1s, clotty, targetHitC, null, this);
    this.physics.add.overlap(bomb2s, clotty, targetHitC, null, this);
    this.physics.add.overlap(bomb3s, clotty, targetHitC, null, this);
    this.physics.add.overlap(bomb4s, clotty, targetHitC, null, this);
    // ------------------------------------------------------------------------
    this.physics.add.overlap(b1s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(b2s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(b3s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(b4s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(b1s, rocks, targetHitR, null, this);
    this.physics.add.overlap(b2s, rocks, targetHitR, null, this);
    this.physics.add.overlap(b3s, rocks, targetHitR, null, this);
    this.physics.add.overlap(b4s, rocks, targetHitR, null, this);
    this.physics.add.overlap(b1s, mines, targetHitM, null, this);
    this.physics.add.overlap(b2s, mines, targetHitM, null, this);
    this.physics.add.overlap(b3s, mines, targetHitM, null, this);
    this.physics.add.overlap(b4s, mines, targetHitM, null, this);
    this.physics.add.overlap(b1s, patrols, targetHitP, null, this);
    this.physics.add.overlap(b2s, patrols, targetHitP, null, this);
    this.physics.add.overlap(b3s, patrols, targetHitP, null, this);
    this.physics.add.overlap(b4s, patrols, targetHitP, null, this);
    this.physics.add.overlap(b1s, Boss, bossHit, null, this);
    this.physics.add.overlap(b2s, Boss, bossHit, null, this);
    this.physics.add.overlap(b3s, Boss, bossHit, null, this);
    this.physics.add.overlap(b4s, Boss, bossHit, null, this);
    this.physics.add.overlap(b1s, enemy, targetHitS, null, this);
    this.physics.add.overlap(b2s, enemy, targetHitS, null, this);
    this.physics.add.overlap(b3s, enemy, targetHitS, null, this);
    this.physics.add.overlap(b4s, enemy, targetHitS, null, this);
    this.physics.add.overlap(b1s, fly, targetHitF, null, this);
    this.physics.add.overlap(b2s, fly, targetHitF, null, this);
    this.physics.add.overlap(b3s, fly, targetHitF, null, this);
    this.physics.add.overlap(b4s, fly, targetHitF, null, this);
    this.physics.add.overlap(b1s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(b2s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(b3s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(b4s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(b1s, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(b2s, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(b3s, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(b4s, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(b1s, clotty, targetHitC, null, this);
    this.physics.add.overlap(b2s, clotty, targetHitC, null, this);
    this.physics.add.overlap(b3s, clotty, targetHitC, null, this);
    this.physics.add.overlap(b4s, clotty, targetHitC, null, this);
    // ------------------------------------------------------------------------
    this.physics.add.overlap(bombs1, bombs1, NoOverlap, null, this);
    this.physics.add.overlap(bombs2, bombs2, NoOverlap, null, this);
    this.physics.add.overlap(bombs3, bombs3, NoOverlap, null, this);
    this.physics.add.overlap(bombs4, bombs4, NoOverlap, null, this);
    this.physics.add.overlap(bomb1s, bomb1s, NoOverlap, null, this);
    this.physics.add.overlap(bomb2s, bomb2s, NoOverlap, null, this);
    this.physics.add.overlap(bomb3s, bomb3s, NoOverlap, null, this);
    this.physics.add.overlap(bomb4s, bomb4s, NoOverlap, null, this);
    this.physics.add.overlap(b1s, b1s, NoOverlap, null, this);
    this.physics.add.overlap(b2s, b2s, NoOverlap, null, this);
    this.physics.add.overlap(b3s, b3s, NoOverlap, null, this);
    this.physics.add.overlap(b4s, b4s, NoOverlap, null, this);
    this.physics.add.overlap(lazerbeam, lazerbeam, NoOverlap, null, this);
    // ------------------------------------------------------------------------
    //-----------------------------------------------------------
    // ------------------------------------------------------------------------
    //-----------------------------------------------------------
    // ------------------------------------------------------------------------
    //-----------------------------------------------------------
    this.physics.add.overlap(Specs1, diamonds, targetHitD, null, this);
    this.physics.add.overlap(Specs2, diamonds, targetHitD, null, this);
    this.physics.add.overlap(Specs3, diamonds, targetHitD, null, this);
    this.physics.add.overlap(Specs4, diamonds, targetHitD, null, this);
    this.physics.add.overlap(Specs1, rocks, targetHitR, null, this);
    this.physics.add.overlap(Specs2, rocks, targetHitR, null, this);
    this.physics.add.overlap(Specs3, rocks, targetHitR, null, this);
    this.physics.add.overlap(Specs4, rocks, targetHitR, null, this);
    this.physics.add.overlap(Specs1, mines, targetHitM, null, this);
    this.physics.add.overlap(Specs2, mines, targetHitM, null, this);
    this.physics.add.overlap(Specs3, mines, targetHitM, null, this);
    this.physics.add.overlap(Specs4, mines, targetHitM, null, this);
    this.physics.add.overlap(Specs1, patrols, targetHitP, null, this);
    this.physics.add.overlap(Specs2, patrols, targetHitP, null, this);
    this.physics.add.overlap(Specs3, patrols, targetHitP, null, this);
    this.physics.add.overlap(Specs4, patrols, targetHitP, null, this);
    this.physics.add.overlap(Specs1, Boss, bossHit, null, this);
    this.physics.add.overlap(Specs2, Boss, bossHit, null, this);
    this.physics.add.overlap(Specs3, Boss, bossHit, null, this);
    this.physics.add.overlap(Specs4, Boss, bossHit, null, this);
    this.physics.add.overlap(Specs1, enemy, targetHitS, null, this);
    this.physics.add.overlap(Specs2, enemy, targetHitS, null, this);
    this.physics.add.overlap(Specs3, enemy, targetHitS, null, this);
    this.physics.add.overlap(Specs4, enemy, targetHitS, null, this);
    this.physics.add.overlap(Specs1, fly, targetHitF, null, this);
    this.physics.add.overlap(Specs2, fly, targetHitF, null, this);
    this.physics.add.overlap(Specs3, fly, targetHitF, null, this);
    this.physics.add.overlap(Specs4, fly, targetHitF, null, this);
    this.physics.add.overlap(Specs1, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(Specs2, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(Specs3, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(Specs4, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(Specs1, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(Specs2, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(Specs3, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(Specs4, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(Specs1, clotty, targetHitC, null, this);
    this.physics.add.overlap(Specs2, clotty, targetHitC, null, this);
    this.physics.add.overlap(Specs3, clotty, targetHitC, null, this);
    this.physics.add.overlap(Specs4, clotty, targetHitC, null, this);
    // ------------------------------------------------------------------------
    this.physics.add.overlap(Spec1s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(Spec2s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(Spec3s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(Spec4s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(Spec1s, rocks, targetHitR, null, this);
    this.physics.add.overlap(Spec2s, rocks, targetHitR, null, this);
    this.physics.add.overlap(Spec3s, rocks, targetHitR, null, this);
    this.physics.add.overlap(Spec4s, rocks, targetHitR, null, this);
    this.physics.add.overlap(Spec1s, mines, targetHitM, null, this);
    this.physics.add.overlap(Spec2s, mines, targetHitM, null, this);
    this.physics.add.overlap(Spec3s, mines, targetHitM, null, this);
    this.physics.add.overlap(Spec4s, mines, targetHitM, null, this);
    this.physics.add.overlap(Spec1s, patrols, targetHitP, null, this);
    this.physics.add.overlap(Spec2s, patrols, targetHitP, null, this);
    this.physics.add.overlap(Spec3s, patrols, targetHitP, null, this);
    this.physics.add.overlap(Spec4s, patrols, targetHitP, null, this);
    this.physics.add.overlap(Spec1s, Boss, bossHit, null, this);
    this.physics.add.overlap(Spec2s, Boss, bossHit, null, this);
    this.physics.add.overlap(Spec3s, Boss, bossHit, null, this);
    this.physics.add.overlap(Spec4s, Boss, bossHit, null, this);
    this.physics.add.overlap(Spec1s, enemy, targetHitS, null, this);
    this.physics.add.overlap(Spec2s, enemy, targetHitS, null, this);
    this.physics.add.overlap(Spec3s, enemy, targetHitS, null, this);
    this.physics.add.overlap(Spec4s, enemy, targetHitS, null, this);
    this.physics.add.overlap(Spec1s, fly, targetHitF, null, this);
    this.physics.add.overlap(Spec2s, fly, targetHitF, null, this);
    this.physics.add.overlap(Spec3s, fly, targetHitF, null, this);
    this.physics.add.overlap(Spec4s, fly, targetHitF, null, this);
    this.physics.add.overlap(Spec1s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(Spec2s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(Spec3s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(Spec4s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(Spec1s, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(Spec2s, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(Spec3s, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(Spec4s, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(Spec1s, clotty, targetHitC, null, this);
    this.physics.add.overlap(Spec2s, clotty, targetHitC, null, this);
    this.physics.add.overlap(Spec3s, clotty, targetHitC, null, this);
    this.physics.add.overlap(Spec4s, clotty, targetHitC, null, this);
    // ------------------------------------------------------------------------
    this.physics.add.overlap(S1s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(S2s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(S3s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(S4s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(S1s, rocks, targetHitR, null, this);
    this.physics.add.overlap(S2s, rocks, targetHitR, null, this);
    this.physics.add.overlap(S3s, rocks, targetHitR, null, this);
    this.physics.add.overlap(S4s, rocks, targetHitR, null, this);
    this.physics.add.overlap(S1s, mines, targetHitM, null, this);
    this.physics.add.overlap(S2s, mines, targetHitM, null, this);
    this.physics.add.overlap(S3s, mines, targetHitM, null, this);
    this.physics.add.overlap(S4s, mines, targetHitM, null, this);
    this.physics.add.overlap(S1s, patrols, targetHitP, null, this);
    this.physics.add.overlap(S2s, patrols, targetHitP, null, this);
    this.physics.add.overlap(S3s, patrols, targetHitP, null, this);
    this.physics.add.overlap(S4s, patrols, targetHitP, null, this);
    this.physics.add.overlap(S1s, Boss, bossHit, null, this);
    this.physics.add.overlap(S2s, Boss, bossHit, null, this);
    this.physics.add.overlap(S3s, Boss, bossHit, null, this);
    this.physics.add.overlap(S4s, Boss, bossHit, null, this);
    this.physics.add.overlap(S1s, enemy, targetHitS, null, this);
    this.physics.add.overlap(S2s, enemy, targetHitS, null, this);
    this.physics.add.overlap(S3s, enemy, targetHitS, null, this);
    this.physics.add.overlap(S4s, enemy, targetHitS, null, this);
    this.physics.add.overlap(S1s, fly, targetHitF, null, this);
    this.physics.add.overlap(S2s, fly, targetHitF, null, this);
    this.physics.add.overlap(S3s, fly, targetHitF, null, this);
    this.physics.add.overlap(S4s, fly, targetHitF, null, this);
    this.physics.add.overlap(S1s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(S2s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(S3s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(S4s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(S1s, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(S2s, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(S3s, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(S4s, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(S1s, clotty, targetHitC, null, this);
    this.physics.add.overlap(S2s, clotty, targetHitC, null, this);
    this.physics.add.overlap(S3s, clotty, targetHitC, null, this);
    this.physics.add.overlap(S4s, clotty, targetHitC, null, this);
    // ------------------------------------------------------------------------
    this.physics.add.overlap(Specs1, Specs1, NoOverlap, null, this);
    this.physics.add.overlap(Specs2, Specs2, NoOverlap, null, this);
    this.physics.add.overlap(Specs3, Specs3, NoOverlap, null, this);
    this.physics.add.overlap(Specs4, Specs4, NoOverlap, null, this);
    this.physics.add.overlap(Spec1s, Spec1s, NoOverlap, null, this);
    this.physics.add.overlap(Spec2s, Spec2s, NoOverlap, null, this);
    this.physics.add.overlap(Spec3s, Spec3s, NoOverlap, null, this);
    this.physics.add.overlap(Spec4s, Spec4s, NoOverlap, null, this);
    this.physics.add.overlap(S1s, b1s, NoOverlap, null, this);
    this.physics.add.overlap(S2s, b2s, NoOverlap, null, this);
    this.physics.add.overlap(S3s, b3s, NoOverlap, null, this);
    this.physics.add.overlap(S4s, b4s, NoOverlap, null, this);
    this.physics.add.overlap(player, mines, youHit, null, this);
    this.physics.add.overlap(player, diamonds, youHit, null, this);
    this.physics.add.overlap(player, patrols, youHit, null, this);
    this.physics.add.overlap(player, fly, youHit, null, this);
    this.physics.add.collider(player, flyshoot);
    this.physics.add.overlap(player, EnemyBullet, BulletOw, null, this);
    this.physics.add.overlap(player, FlyingBullet, BulletOw, null, this);
    // ------------------------------------------------------------------------
    this.physics.add.overlap(player, Hpup, powerUpH, null, this);
    this.physics.add.overlap(player, Dmgup, powerUpD, null, this);
    this.physics.add.overlap(player, bombE, powerupB, null, this);
    this.physics.add.overlap(player, SoulHP, powerupSH, null, this);
    this.physics.add.overlap(player, brimstone, itemBrimstone, null, this);
    this.physics.add.overlap(player, melons, pickupC, null, this);
    this.physics.add.overlap(player, pineapples, pickupK, null, this);
    this.physics.add.overlap(player, breakfast, breakFast, null, this);
    this.physics.add.overlap(player, quarter, AQuarter, null, this);
    this.physics.add.overlap(player, heart, v3, null, this);
    this.physics.add.overlap(player, pact, ThePact, null, this);
    this.physics.add.overlap(player, scapular, Scapular, null, this);
    this.physics.add.overlap(player, TriShot, TripleShot, null, this);
    this.physics.add.overlap(player, Hanged, HangMan, null, this);
    this.physics.add.overlap(player, Ouiji, OuijiBoard, null, this);
    this.physics.add.overlap(player, Belt, TheBelt, null, this);
    this.physics.add.overlap(player, Mark, TheMark, null, this);
    this.physics.add.overlap(player, SadOnion, TheSadOnion, null, this);
    this.physics.add.overlap(player, SkeleKey, SkeletonKey, null, this);
    this.physics.add.overlap(player, Binky, TheBinki, null, this);
    this.physics.add.overlap(player, PJs, Pajamas, null, this);
    this.physics.add.overlap(player, Boom, BooM, null, this);
    this.physics.add.overlap(player, Blanket, TheBlanket, null, this);
    this.physics.add.overlap(player, WSpoon, WoodenSpoon, null, this);
    this.physics.add.overlap(player, Stigma, TheStigma, null, this);
    this.physics.add.overlap(player, Mitre, TheMitre, null, this);
    // ------------------------------------------------------------------------
    this.physics.add.overlap(player, Door1E, door1Leave, null, this);
    this.physics.add.overlap(player, Door2E, door2Leave, null, this);
    this.physics.add.overlap(player, Door3E, door3Leave, null, this);
    this.physics.add.overlap(player, Door4E, door4Leave, null, this);
    // ------------------------------------------------------------------------
    // ------------------------------------------------------------------------
    this.physics.add.overlap(mines, patrols, mineHitP, null, this);
    this.physics.add.overlap(mines, rocks, mineHitR, null, this);
    this.physics.add.overlap(mines, diamonds, mineHitD, null, this);
    // ------------------------------------------------------------------------
    this.physics.add.overlap(bombF, diamonds, fE, null, this);
    this.physics.add.overlap(bombF, patrols, fE, null, this);
    this.physics.add.overlap(bombF, rocks, fE, null, this);
    this.physics.add.overlap(bombF, mines, fE, null, this);
    this.physics.add.overlap(bombF, enemy, fE, null, this);
    // ------------------------------------------------------------------------
    this.physics.add.overlap(lazerbeam, diamonds, fb, null, this);
    this.physics.add.overlap(lazerbeam, patrols, fb, null, this);
    this.physics.add.overlap(lazerbeam, rocks, fb, null, this);
    this.physics.add.overlap(lazerbeam, mines, fb, null, this);
    this.physics.add.overlap(lazerbeam, enemy, fb, null, this);
    // ------------------------------------------------------------------------
    this.physics.add.overlap(player, HpShop, buyHP, null, this);
    this.physics.add.overlap(player, BombFShop, buyBOMB, null, this);
    this.physics.add.overlap(player, KeyShop, buyKEY, null, this);
    this.physics.add.overlap(player, SoulShop, buySOUL, null, this);
    this.physics.add.overlap(player, PactShop, buyPACT, null, this);
    this.physics.add.overlap(player, BeltShop, buyBELT, null, this);
    this.physics.add.overlap(player, BinkyShop, buyBINKY, null, this);
    // ------------------------------------------------------------------------
    this.physics.add.overlap(ResetZone, wall1, RestartW, null, this);
    this.physics.add.overlap(ResetZone, Pit, RestartP, null, this);
    this.physics.add.overlap(ResetZone, Door1E, Restart1, null, this);
    this.physics.add.overlap(ResetZone, Door2E, Restart2, null, this);
    this.physics.add.overlap(ResetZone, Door3E, Restart3, null, this);
    this.physics.add.overlap(ResetZone, Door4E, Restart4, null, this);
    this.physics.add.overlap(ResetZone, Door1Wall, Restart1W, null, this);
    this.physics.add.overlap(ResetZone, Door2Wall, Restart2W, null, this);
    this.physics.add.overlap(ResetZone, Door3Wall, Restart3W, null, this);
    this.physics.add.overlap(ResetZone, Door4Wall, Restart4W, null, this);
    this.physics.add.overlap(ResetZone, RoomIn, RestartR, null, this);
    this.physics.add.collider(ResetZone, ResetDelete, Restart);
};
function update() {
    if (RoomLoad == true) {
        if (RoomNW == true) {
            console.log('NW');
            RoomIn.create(660, 60, 'RoomIn').setScale(0.5);
            Door1Wall.create(400, 10, 'wall').setAngle(90);
            Door2E.create(780, 300, 'star').setSize(10, 100);
            Door3E.create(400, 580, 'star').setSize(100, 10);
            Door4Wall.create(20, 310, 'wall');
        } else if (RoomN == true) {
            console.log('N');
            RoomIn.create(700, 60, 'RoomIn').setScale(0.5);
            Door1Wall.create(400, 10, 'wall').setAngle(90);
            Door2E.create(780, 300, 'star').setSize(10, 100);
            Door3E.create(400, 580, 'star').setSize(100, 10);
            Door4E.create(20, 300, 'star').setSize(10, 100);
        } else if (RoomNE == true) {
            console.log('NE');
            RoomIn.create(740, 60, 'RoomIn').setScale(0.5);
            Door1Wall.create(400, 10, 'wall').setAngle(90);
            Door2Wall.create(780, 310, 'wall');
            Door3E.create(400, 580, 'star').setSize(100, 10);
            Door4E.create(20, 300, 'star').setSize(10, 100);
        } else if (RoomW == true) {
            console.log('W');
            RoomIn.create(660, 100, 'RoomIn').setScale(0.5);
            Door1E.create(400, 20, 'star').setSize(100, 10);
            Door2E.create(780, 300, 'star').setSize(10, 100);
            Door3E.create(400, 580, 'star').setSize(100, 10);
            Door4Wall.create(20, 310, 'wall');
        } else if (RoomC == true) {
            console.log('C');
            RoomIn.create(700, 100, 'RoomIn').setScale(0.5);
            Door1E.create(400, 20, 'star').setSize(100, 10);
            Door2E.create(780, 300, 'star').setSize(10, 100);
            Door3E.create(400, 580, 'star').setSize(100, 10);
            Door4E.create(20, 300, 'star').setSize(10, 100);
        } else if (RoomE == true) {
            console.log('E');
            RoomIn.create(740, 100, 'RoomIn').setScale(0.5);
            Door1E.create(400, 20, 'star').setSize(100, 10);
            Door2Wall.create(780, 310, 'wall');
            Door3E.create(400, 580, 'star').setSize(100, 10);
            Door4E.create(20, 300, 'star').setSize(10, 100);
        } else if (RoomSW == true) {
            console.log('SW');
            RoomIn.create(660, 140, 'RoomIn').setScale(0.5);
            Door1E.create(400, 20, 'star').setSize(100, 10);
            Door2E.create(780, 300, 'star').setSize(10, 100);
            Door3Wall.create(400, 580, 'wall').setAngle(90);
            Door4Wall.create(20, 310, 'wall');
        } else if (RoomS == true) {
            console.log('S');
            RoomIn.create(700, 140, 'RoomIn').setScale(0.5);
            Door1E.create(400, 20, 'star').setSize(100, 10);
            Door2E.create(780, 300, 'star').setSize(10, 100);
            Door3Wall.create(400, 580, 'wall').setAngle(90);
            Door4E.create(20, 300, 'star').setSize(10, 100);
        } else if (RoomSE == true) {
            console.log('SE');
            RoomIn.create(740, 140, 'RoomIn').setScale(0.5);
            Door1E.create(400, 20, 'star').setSize(100, 10);
            Door2Wall.create(780, 310, 'wall');
            Door3Wall.create(400, 580, 'wall').setAngle(90);
            Door4E.create(20, 300, 'star').setSize(10, 100);
        }
        RoomLoad = false;
    }
    ShootingFunction();
    if (ShotReady == false) {
        ShotReady = true
        if (TriShotActive == false) {
            var Pew = this.sound.add('pew');
            Pew.play();
        } else if (TriShotActive == true) {
            var bigPEW = this.sound.add('pewpewpew');
            bigPEW.play();
        }
        setTimeout(function () {
            ShotTimer = true
        }, FireRate);
    }
    if (EnemyHPS == 0) {
        EnemyAlive == false;
    } else {
        EnemyAlive == true;
    }
    if (scapularActive == true) {
        addSoulHearts = true;
    }
    if (brimstoneActive == true) {
        playes = player.y - 30;
        playez = player.x - 50;
        if (Acess == true) {
            brimstoneCharge = this.add.text(playez, playes, 'Charge: 0', { fontSize: '16px', fill: '#000' });
        }
        setInterval(function () {
            brimstoneCharge.setVisible(false);
            brimstoneCharge.setActive(false);
        }, 1);
    }
    if (killsneeded == 0) {
        if (normalRoom == true) {
            spawnPickup();
            door = true;
            killsneeded = 6;
        } else {
            door = true;
            killsneeded = 6;
        }
    }
    if (helpme == true) {
        titleT.setVisible(false);
        this.physics.resume();
        RoomLoad = true;
        spawn = true;
        helpme = false;
    }
    if (keyA.isDown) {
        player.setVelocityX(MoveLeft);
        player.anims.play('left', true);
    } else if (keyD.isDown) {
        player.setVelocityX(MoveRight);
        player.anims.play('right', true);
    } else if (keyS.isDown) {
        player.setVelocityY(MoveDown);
        player.anims.play('down', true);
    } else if (keyW.isDown) {
        player.setVelocityY(MoveUp);
        player.anims.play('up', true);
    } else if (keyE.isDown) {
        if (BombWait == false) {
            BombWait = true;
            if (currentBombs >= 1) {
                currentBombs -= 1;
                BombText.setText('Bombs: ' + currentBombs);
                var bombsF = bombF.create(player.x, player.y, 'friendlyBOMB');
                setTimeout(function () {
                    bombsF.setScale(3);
                    setTimeout(function () {
                        bombsF.disableBody(true, true);
                    }, 100);
                }, 1000);
                bombsF.setCollideWorldBounds(true);
            }
            setTimeout(function () {
                BombWait = false;
            }, 1000);
        }
    } else {
        player.setVelocityX(0);
        player.setVelocityY(0);
        player.anims.play('turn');
        U = false;
        D = false;
        L = false;
        R = false;
    }
    if (killsLeft <= 0) {
        killsLeft = 6;
        currentLevel += 1;
        levelText.setText('Level: ' + currentLevel);
        killText.setText('KillsLeft: ' + killsLeft);
        return;
    } else {
    }
    if (currentHP > MaxHp) {
        currentHP--;
        HPText.setText('Current Hp: ' + currentHP);
    }
}