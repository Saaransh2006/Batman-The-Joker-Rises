var batman,joker,gameState,loading1,loading2,completed,bg,bgImg1,bgImg2,gun1,gun2,bgm1,gun2_selected,jokerKnifeImg;
var batmanImg,jokerImg,proceed,settings,proceedImg,settingsImg,robin,back,var3,gun1_selected,knife_selected,sprite5;
var bgImg3,menu,stage,proceed2,gordon,batman1,joker1,batmanImg2,batarangImg,batmanKnifeImg,batarang_selected;
var sprite6bullet,batmanLife,jokerLife,jokerBulletGroup,state,batmanBlock,bulletImg,bulletImg2,reload1,reload2,Ah_sound,variable3;
var jokerGunSound,batmanGunSound,batmanGunSound2,reloaded,bulletImg3,sprite7,laugh,hit,click,whoosh,laugh2,specialAttack,var1,var2;
var batmanKnifeImg2,batarangImg2,batman_specialSound,joker_specialSound,joker_specialAttack,jokerSpecial_var,batmanSpecial_var;
var completed2,sprite9,bulletGroup,pause,resume,win,cloud1,cloud2,cloud3,cloud1S,cloud2S,cloud3S,sprite11,variable,youWin;
var winImg,youLose,loseImg,impact,part2_logoImg,part2_logo,variable2,cloud4,cloud5,cloud6,cloud4S,cloud5S,cloud6S,outro_song;
var jokerBulletGroup2,gameBy,gameByImg,outro_song2,profile,promolink;

function preload() {
    bgm1 = loadSound("sound/bgm1.m4a");
    outro_song = loadSound("sound/outro_song.mp3");
    outro_song2 = loadSound("sound/outro_song2.m4a");
    reload1 = loadSound("sound/reload1.mp3");
    reload2 = loadSound("sound/reload2.mp3");
    click = loadSound("sound/click.mp3");
    whoosh = loadSound("sound/whoosh.m4a");
    Ah_sound = loadSound("sound/Ah!.wav");
    hit = loadSound("sound/hit.wav");
    batman_specialSound = loadSound("sound/batman_specialSound.mp3");
    joker_specialSound = loadSound("sound/joker_specialSound.m4a");
    laugh = loadSound("sound/jokerLaugh.m4a");
    laugh2 = loadSound("sound/jokerLaugh2.m4a");
    jokerGunSound = loadSound("sound/jokerGunSound.mp3");
    batmanGunSound = loadSound("sound/batmanGunSound.m4a");
    batmanGunSound2 = loadSound("sound/batmanGunSound2.m4a");
    impact = loadSound("sound/impact.wav");

    gameByImg = loadImage("images/gameBy.png");
    part2_logoImg = loadImage("images/part2_logo.png");
    cloud1 = loadImage("images/cloud1.png");
    cloud2 = loadImage("images/cloud2.png");
    cloud3 = loadImage("images/cloud3.png");
    cloud4 = loadImage("images/cloud4.png");
    cloud5 = loadImage("images/cloud5.png");
    cloud6 = loadImage("images/cloud6.png");
    pause = loadImage("images/pause.png");
    winImg = loadImage("images/YouWin.png");
    loseImg = loadImage("images/YouLose.png");
    resume = loadImage("images/resume.png");
    bulletImg = loadImage("images/bullet.png");
    bulletImg2 = loadImage("images/bullets.png");
    bulletImg3 = loadImage("images/bullet2.png");
    loading1 = loadImage("images/loading1.png");
    loading2 = loadImage("images/loading2.png");
    completed = loadImage("images/completed.png");
    completed2 = loadImage("images/completed2.png");
    bgImg1 = loadImage("images/background1.jpg");
    bgImg2 = loadImage("images/background2.jpg");
    bgImg3 = loadImage("images/background3.jpg");
    gun1 = loadImage("images/gun1.png");
    gun2 = loadImage("images/gun2.png");
    batmanBlock = loadImage("images/batman_block.png");
    batmanImg = loadImage("images/batman_main.png");
    batmanImg2 = loadImage("images/batman_main2.png");
    jokerImg = loadImage("images/joker_main.png");
    proceedImg = loadImage("images/Proceed.png");
    settingsImg = loadImage("images/settings.png");
    batarangImg = loadImage("images/batarang.png");
    batarangImg2 = loadImage("images/batarangs.png");
    batmanKnifeImg = loadImage("images/batmanKnife.png");
    batmanKnifeImg2 = loadImage("images/batmanKnives.png");
    jokerKnifeImg = loadImage("images/jokerKnife.png");
    robin = loadImage("images/robin2.png");
    gordon = loadImage("images/CommissionerGordon.png");
    batman1 = loadImage("images/batman6.png");
    joker1 = loadImage("images/joker4.png");
}

function setup() {
    createCanvas(1500,700);

    bgm1.loop();

    whoosh.setVolume(1.2);
    click.setVolume(0.3);
    batman_specialSound.setVolume(0.4);
    joker_specialSound.setVolume(0.3);
    jokerGunSound.setVolume(0.06);
    batmanGunSound.setVolume(0.25);
    batmanGunSound2.setVolume(0.25);
    Ah_sound.setVolume(0.5);
    hit.setVolume(0.55);
    laugh.setVolume(0.3);
    laugh2.setVolume(0.4);
    bgm1.setVolume(0.15);
    outro_song.setVolume(0.3);
    outro_song2.setVolume(0.3);

    gameState = "loading";
    state = "normal";
    reloaded = "true";
    var1 = 1;
    var2 = 1;
    var3 = 1;
    variable = 20;
    variable2 = 15;
    variable3 = 15;
    batmanLife = 1000;
    jokerLife = 1000;
    jokerSpecial_var = 2;
    batmanSpecial_var = 2;

    part2_logo = createSprite(210,465,10,10);
    part2_logo.visible = false;
    part2_logo.addImage(part2_logoImg);

    back = createButton("BACK");
    back.position(1450,20);
    back.mousePressed(goBack);
    menu = createButton("MENU");
    menu.position(1390,20);
    menu.mousePressed(goToMenu);

    batman = createSprite(340,550,20,100);
    batman.visible = false;

    cloud1S = createSprite(180,370,10,10);
    cloud1S.addImage(cloud1);
    cloud1S.visible = false;
    cloud1S.scale = 0.4;

    cloud2S = createSprite(1100,370,10,10);
    cloud2S.addImage(cloud2);
    cloud2S.visible = false;
    cloud2S.scale = 0.4;

    cloud3S = createSprite(500,370,10,10);
    cloud3S.addImage(cloud3);
    cloud3S.visible = false;
    cloud3S.scale = 0.4;

    cloud4S = createSprite(180,370,10,10);
    cloud4S.addImage(cloud4);
    cloud4S.visible = false;
    cloud4S.scale = 0.4;

    cloud5S = createSprite(1100,370,10,10);
    cloud5S.addImage(cloud5);
    cloud5S.visible = false;
    cloud5S.scale = 0.4;

    cloud6S = createSprite(500,370,10,10);
    cloud6S.addImage(cloud6);
    cloud6S.visible = false;
    cloud6S.scale = 0.4;
    
    //batman.debug = true;
    //batman = createSprite(340,560,20,100);
    //batman.visible = false;
    //batman.addImage(batmanImg);

    joker = createSprite(1000,560,20,100);
    joker.visible = false;
    joker.addImage(jokerImg);
    joker.scale = 0.22;

    proceed = createSprite(300,470,10,10);
    proceed.addImage(proceedImg);
    proceed.visible = false;
    proceed.scale = 0.3;
    proceed2 = createSprite(300,470,10,10);
    proceed2.addImage(proceedImg);
    proceed2.lifetime = 2;
    proceed2.scale = 0.3;

    settings = createSprite(1200,470,10,10);
    settings.addImage(settingsImg);
    settings.visible = false;
    settings.scale = 0.3;
    
    sprite4 = createSprite(675,350,20,20);
    sprite4.velocityX = -12;
    sprite4.visible = false;

    sprite5 = createSprite(700,350,20,20);
    sprite5.visible = false;
    sprite6 = createSprite(800,350,20,20);
    sprite6.visible = false;

    sprite7 = createSprite(1400,350,20,20);
    sprite7.visible = false;

    sprite11 = createSprite(1000,350,20,20);
    sprite11.visible = false;

    sprite9 = createSprite(1375,110,150,50);
    sprite9.visible = false;
    sprite9.addImage(pause);
    sprite9.scale = 0.25;

    gun1_selected = createSprite(200,120,270,90);
    gun1_selected.visible = false;
    gun2_selected = createSprite(550,120,270,90);
    gun2_selected.visible = false;

    batarang_selected = createSprite(200,320,270,125);
    batarang_selected.visible = false;
    knife_selected = createSprite(550,320,270,125);
    knife_selected.visible = false;

    bullet = createSprite(480,525,10,10);
    bullet.addImage(bulletImg2);
    bullet.scale = 0.1;
    bullet.visible = false;

    specialAttack = createSprite(300,525,10,10);
    specialAttack.visible = false;

    joker_specialAttack = createSprite(1100,525,50,50);
    joker_specialAttack.visible = false;
    joker_specialAttack.addImage(jokerKnifeImg);
    joker_specialAttack.scale = 0.1;

    youWin = createSprite(700,200,10,10);
    youWin.addImage(winImg);
    youWin.visible = false;
    youLose = createSprite(700,200,10,10);
    youLose.addImage(loseImg);
    youLose.visible = false;

    gameBy = createSprite(1260,550,10,10);
    gameBy.addImage(gameByImg);
    gameBy.visible = false;

    profile = createInput("https://community.whitehatjr.com/profile/e834b39f-43e8-43d6-8900-e3094a440cfa");
    profile.position(50,470);
    promolink = createInput("https://community.whitehatjr.com/project/5a738cb9-da87-4125-8798-7c50ec22f837");
    promolink.position(880,660);
    
    jokerBulletGroup = createGroup();
    jokerBulletGroup2 = createGroup();
    bulletGroup= createGroup();
}

function draw() {
    if(gameState === "settings") {
        profile.show();
    }
    else {
        profile.hide();
    }

    if(gameState === "end" && sprite11.x >= 2080) {
        promolink.show();
    }
    else {
        promolink.hide();
    }
    
    if(batmanLife <= 0) {
        batmanLife = 0;
    }
    if(jokerLife <= 0) {
        jokerLife = 0;
    }

    if(variable < 1) {
        variable = 1;
    }
    if(variable2 < 1.6) {
        variable2 = 1.6;
    }

    if(variable3 < 1) {
        variable3 = 1;
    }

    if(keyDown(RIGHT_ARROW) && gameState === "play") {
        batman.x =  batman.x+10;
    }
    if(keyDown(LEFT_ARROW) && gameState === "play") {
        batman.x =  batman.x-10;
    }

    if(batman.x > 670) {
        batman.x = 670;
    }
    if(batman.x < 50) {
        batman.x = 50;
    }

    if(var1 === 1) {
        if(gameState === "settings") {
           gun1_selected.visible = true;
           gun2_selected.visible = false;
        }
        else {
            gun1_selected.visible = false;
            gun2_selected.visible = false;
        }
        batman.addImage(batmanImg);
        batman.scale = 0.2;

        if(state === "blocked") {
            batman.setCollider("rectangle",0,0,670,1000);
        }
        else {
            batman.setCollider("rectangle",-50,0,670,1000);
        }
    }
    else if(var1 === 2) {
        if(gameState === "settings") {
            gun1_selected.visible = false;
            gun2_selected.visible = true;
        }
        else {
            gun1_selected.visible = false;
            gun2_selected.visible = false;
        }
        batman.addImage(batmanImg2);
        batman.scale = 0.95;

        if(state === "blocked") {
            batman.setCollider("rectangle",0,0,670,1000);
        }
        else {
            batman.setCollider("rectangle",0,0,170,200);
        }
    }

    if(var2 === 1) {
        specialAttack.addImage(batarangImg2);
        specialAttack.scale = 0.07;
        if(gameState === "settings") {
            batarang_selected.visible = true;
            knife_selected.visible = false;
        }
        else {
            batarang_selected.visible = false;
            knife_selected.visible = false;
        }
        specialAttack.setCollider("rectangle",-1200,0,2000,2000);
    }
    else if(var2 === 2) {
        specialAttack.addImage(batmanKnifeImg2);
        specialAttack.scale = 0.27;
        if(gameState === "settings") {
            batarang_selected.visible = false;
            knife_selected.visible = true;
        }
        else {
            batarang_selected.visible = false;
            knife_selected.visible = false;
        }
        specialAttack.setCollider("rectangle",-200,0,500,500);
    }

    /*if(var3 === 1) {
        bgm2.stop();
        if(gameState === "settings") {
            music1_selected.visible = true;
            music2_selected.visible = false;
        }
        else {
            music1_selected.visible = false;
            music2_selected.visible = false;
        }
    }
    else if(var3 === 2) {
        bgm1.stop();
        if(gameState === "settings") {
            music1_selected.visible = false;
            music2_selected.visible = true;
        }
        else {
            music1_selected.visible = false;
            music2_selected.visible = false;
        }
    }*/

    if(sprite7.x > 1500 && gameState === "play") {
        sprite7.velocityX = 0;
        sprite7.x = 1400;
    }

    if(specialAttack.velocityX === 4 || joker_specialAttack.velocityX === -4) {
        bgm1.setVolume(0);
    }
    else {
        bgm1.setVolume(0.25);
    }

    if(gameState === "loading" || gameState === "menu" || gameState === "play" || gameState === "paused" || gameState === "end") {
        back.hide();
        menu.hide();
    }
    else {
        back.show();
        menu.show();
    }

    if(gameState === "settings") {
        menu.hide();
    }

    if(mousePressedOver(proceed)) {
        click.play();
        if(gameState === "menu") {
            gameState = "initial1";
        }
        if(gameState === "initial2") {
            gameState = "initial3";
        }
        if(gameState === "initial4") {
            gameState = "instructions";
        }
    }

    if(gameState === "menu") {
        if(mousePressedOver(settings)) {
            click.play();
            gameState = "settings";
            stage = 1;
        }
    }
    else if(gameState === "instructions") {
        if(mousePressedOver(settings)) {
            click.play();
            gameState = "settings";
            stage = 2;
        }
    }
    
    if(gameState === "loading") {
        bgm1.stop();

        var sprite3 = createSprite(750,350,1500,700);
        sprite3.lifetime = 3;
        var sprite2 = createSprite(750,350,1500,700);
        sprite2.addImage(loading2);
        sprite2.lifetime = 3;
        var sprite1 = createSprite(750,350,1500,700);
        sprite1.addImage(loading1);
        sprite1.lifetime = 3;
        var sprite8 = createSprite(695,565,100,40);
        sprite8.lifetime = 2;
        sprite8.visible = false;
        if(mouseIsOver(sprite8)) {
            sprite3.addImage(completed2);
        }
        else {
            sprite3.addImage(completed);
        }

         //Destroying sprite 1 and 2 as per sprite4's x position.
        if(sprite4.x < 250) {
            sprite1.destroy();
        }
        if(sprite4.x < 0) {
            sprite2.destroy();
        }

        if(mouseWentDown("leftButton") && mouseIsOver(sprite8) && sprite4.x < 0) {
            click.play();
            gameState = "menu";
            sprite4.destroy();
            sprite3.destroy();
            bgm1.play();
        }
    }

    if(gameState === "menu") {
        background(bgImg1);
        proceed.x = 300;
        proceed.y = 470;
        proceed.scale = 0.3;
        settings.x = 1200;
        settings.y = 470;
        settings.scale = 0.3;
        settings.visible = true;
        proceed.visible = true;
    }

    if(gameState === "settings") {
        background(bgImg3);
        proceed.x = -300;
        settings.x = -1200;

        fill("red");
        textFont("cursive");
        textSize(20);
        textStyle(NORMAL);
        text("1. Select Batman's primary weapon:",10,50);
        fill("white");
        text("2. Select Batman's special weapon:",10,220);
        text("[Click the 'BACK' button on the top-right",1100,650);
        text(" of the screen after making the changes]",1100,680);
        fill("lightGreen");
        text("3. My WhitehatJr Community Profile link:",10,440);

        var gun1S = createSprite(200,120,10,10);
        gun1S.addImage(gun1);
        gun1S.lifetime = 2;
        gun1S.scale = 0.1;
        var gun2S = createSprite(550,130,10,10);
        gun2S.addImage(gun2);
        gun2S.lifetime = 2;
        gun2S.scale = 0.5;
        if(mouseIsOver(gun1S) && mouseWentDown("leftButton")) {
            click.play();
            var1 = 1;
        }
        if(mouseIsOver(gun2S) && mouseWentDown("leftButton")) {
            click.play();
            var1 = 2;
        }

        var batarangS = createSprite(200,320,10,10);
        batarangS.addImage(batarangImg);
        batarangS.lifetime = 2;
        batarangS.scale = 0.23;
        var batmanKnifeS = createSprite(550,320,10,10);
        batmanKnifeS.addImage(batmanKnifeImg);
        batmanKnifeS.lifetime = 2;
        batmanKnifeS.scale = 1;
        if(mouseIsOver(batarangS) && mouseWentDown("leftButton")) {
            click.play();
            var2 = 1;
        }
        if(mouseIsOver(batmanKnifeS) && mouseWentDown("leftButton")) {
            click.play();
            var2 = 2;
        }

        /*var music1S = createSprite(190,570,10,10);
        music1S.addImage(music1);
        music1S.lifetime = 2;
        music1S.scale = 0.5;
        var music2S = createSprite(550,570,10,10);
        music2S.addImage(music2);
        music2S.lifetime = 2;
        music2S.scale = 0.5;
        if(mouseIsOver(music1S) && mouseWentDown("leftButton")) {
            click.play();
            bgm2.stop();
            var3 = 1;
            sprite6.x = 800;
            if(sprite5.x === 700) {
                bgm1.play();
                sprite5.x = 600;
            }
        }
        if(mouseIsOver(music2S) && mouseWentDown("leftButton")) {
            click.play();
            bgm1.stop();
            var3 = 2;
            sprite5.x = 700;
            if(sprite6.x === 800) {
                bgm2.play();
                sprite6.x = 900;
            }
        }*/
    }

    if(gameState === "initial1") {
        background(bgImg3);
        image(robin,130,-5);
        proceed.x = -300;
        settings.x = -1200;
        
        var proceed2 = createSprite(70,45,10,10);
        proceed2.addImage(proceedImg);
        proceed2.lifetime = 2;
        proceed2.scale = 0.2;
        if(mousePressedOver(proceed2)) {
            click.play();
            gameState = "initial2";
        }

        fill("red");
        textFont("cursive");
        textSize(20);
        textStyle(BOLD);
        text("Few Months ago:",1050,50);
        textStyle(NORMAL);
        text("(Robin enters Batcave (Batman's workplace), badly injured)",800,90);
        text("Robin: Batman!! The Joker is creating chaos in Gotham city.",800,120);
        text("You must stop him!!!",800,150);
        text("Batman: What happened Robin, why are you looking so injured? Who did",800,180);
        text("this to you?",800,210);
        fill("white")
        text("Robin: Who else? That Psychopath, Joker!! I went to stop him from doing",800,240);
        text("the crimes; but instead I was defeated. And I escaped!! I am ashamed of",800,270);
        text("my cowardice, but he was about to kill me.",800,300);
        text("Batman (angrily): Don't worry Robin, he will pay for his mistakes!!",800,330);
        text("(Seeing Robin's bad condition, Batman sets out to defeat The Joker",800,360);
        text("and free Gotham from his crimes)",800,390);
        fill("lightGreen");
        text("After a few hours:",800,470);
        textStyle(NORMAL);
        text("(Robin gets a call from Commissioner Gordon)",800,500);
        text("Gordon: Robin, the Joker is finally dead!!!!",800,530);
        text("Batman has killed him.",800,560);
        text("Robin: OH! that's great news, I'm coming.",800,590);
        fill("white");
        text("Robin, Batman's adopted son. As well as being",10,560);
        text("Batman's crime-fighting partner, he established",10,590);
        text("himself as the leader of the Teen Titans, a team",10,620);
        text("of teenage superheroes. His real name is Richard",10,650);
        text("John Grayson.",10,680);
        text("[Click the 'Proceed' button on the top-left of the screen to continue]",800,650);
    }

    if(gameState === "initial2") {
        background(bgImg3);
        image(batman1,320,5);
        proceed.x = 70;
        proceed.y = 160;
        proceed.scale = 0.2;
        settings.x = -1200;

        fill("red");
        textFont("cursive");
        textSize(20);
        textStyle(NORMAL);
        text("(Robin meets Batman after the Joker is killed)",800,90)
        text("Robin: It's a huge achievement, Batman!! See, the whole",800,120);
        text("Gotham city is cheering you and is grateful to you for",800,150);
        text("killing that Joker and establishing peace in Gotham.",800,180);
        fill("white");
        text("Batman(looking a little worried): Thanks Robin...",800,230);
        text("Robin: What happened Batman, why do you look so worried?",800,260);
        text("Batman: Uh.. Robin,  do you think the Joker is really dead..",800,290);
        text("or is this some trick he is using to fool us?",800,320)
        text("Robin: Huh..?? He is definitely dead. What makes you think",800,350);
        text("that?",800,380);
        fill("lightGreen");
        text("Batman: Actually, I am worried about the last words he said",800,430);
        text('to me before dying... he said, "Batman! Even if you kill me',800,460);
        text("now, I will return. I won't give up on you until you realize",800,490);
        text("your mistakes. Remember, THE JOKER WILL RISE! AND YOU WILL",800,520)
        text('WATCH IT WITH YOUR OWN EYES!! One day, you will bow before me',800,550);
        text('and regret your mistakes. HAHAHAHA"',800,580);
        text("Robin: You killed him with your hands, right? The truth is in",800,610);
        text("front of you. Now, forget about that Psycho killer. He is dead.",800,640);
        fill("white");
        text('"Batman- A Silent Guardian, A Watchful',10,500);
        text('Protector, A Dark Knight"',10,530);
        text("He is a symbol of Justice and defends",10,560);
        text("Gotham city from the threat of",10,590);
        text("criminals. He may not have",10,620);
        text("superpowers; but his skills, his inventiveness and his unique",10,650);
        text("gadgets make him a great hero. His real name is Bruce Wayne.",10,680);
    }

    if(gameState === "initial3") {
        background(bgImg3);
        image(gordon,-50,60);
        proceed.x = -300;
        settings.x = -1200;
        var proceed3 = createSprite(70,45,10,10);
        proceed3.addImage(proceedImg);
        proceed3.lifetime = 2;
        proceed3.scale = 0.2;
        if(mousePressedOver(proceed3)) {
            click.play();
            gameState = "initial4";
        }

        fill("white");
        textFont("cursive");
        textSize(20);
        textStyle(NORMAL);
        text("[James Gordon, the police commissioner of Gotham City.",10,590);
        text("He is somewhat doubtful of Batman's vigilante methods,",10,620);
        text("but nevertheless believes that Gotham needs Batman. The ",10,650);
        text("two have a mutual respect and tacit friendship.]",10,680);

        fill("red");
        textFont("cursive");
        textSize(20);
        textStyle(BOLD);
        text("Present Day:",1050,50);
        textStyle(NORMAL);
        text("(Batman gets a phone call from Commissioner Gordon)",800,90);
        text("Gordon: Batman!! There is an extremely bad news.",800,120);
        text("Batman: What happened Commissioner Gordon, what's the matter?",800,150);
        text("Gordon: You won't believe, but.. but that Joker is back!!!!!!!",800,180);
        text("Batman: What!? But.. How it's even possible, I killed him with",800,210);
        text("my own hands! You saw it too Commissioner.",800,240);
        fill("white")
        text("Gordon: Yes Batman, but when I watched him doing crimes on the streets",800,280);
        text("of Gotham, I had to believe that he is really back! And one more thing,",800,310);
        text("After seeing him again after so many months, the public is stunned and",800,340);
        text("they are blaming you for bringing that maniac back. They are saying that",800,370);
        text("Joker was never killed, Batman fooled us. The public is divided into 2",800,400);
        text("parts - one which supports you and the other which stands against you!!",800,430);
        fill("lightGreen");
        text("Batman: Oh God!! He told me that he will come back, I should have taken",800,470);
        text("his words seriously. I haven't fooled anyone. Don't you believe me",800,500);
        text("Commissioner?",800,530);
        text("Gordon: I believe you Batman. But right now the important thing is that",800,560);
        text("you should go and interrogate him. Ask him how has he come back from",800,590);
        text("death!!",800,620);
        text("Batman: Yes, I'll not let him live now. I'll find the truth!!",800,650);
        text("(Batman sets out to find the truth!!)",800,680);
    }

    if(gameState === "initial4") {
        background(bgImg3);
        image(joker1,100,0);
        proceed.x = 70;
        proceed.y = 160;
        settings.x = -1200;

        fill("white");
        textFont("cursive");
        textSize(20);
        textStyle(NORMAL);
        text("[Joker, a psychopath, with a warped,",10,360);
        text("sadistic sense of humor, is one of the",10,390);
        text("greatest threats Batman has ever faced. Not",10,420);
        text("only because of his evil laughter is he famous",10,450);
        text("for, his ideology makes him a threat to",10,480);
        text("humanity. According to him, the Joker",10,510);
        text("represents the evil side of the society. He",10,540);
        text("believes that everyone in this world is",10,570);
        text("corrupted, evil; everyone is a Joker here and",10,600);
        text("no one is a good person. And so he opposes Batman's",10,630);
        text("belief of bringing Justice for all. But Batman never lets him",10,660);
        text("succeed in his missions. No one knows Joker's true identity!!]",10,690);

        fill("red");
        textFont("cursive");
        textSize(20);
        textStyle(NORMAL);
        text('Batman gets a message from an unknown number: "Robin is with me. If',800,70);
        text('you want him alive, find me. HAHAHAHAHA - from The Joker"',800,100);
        text("(After few hours, Batman finally finds the Joker)",800,150);
        text("Joker: Welcome Batsy... or should I say, The Dark Knight... HAHAHAHA",800,180);
        text("Batman: You aren't him!! You are not the Joker. Tell me who are",800,210);
        text("you, where's Robin????",800,240);
        fill("white")
        text("Joker: Yes, I am not the one you killed!! Do you think you can defeat",800,290);
        text("The Joker?? NEVER!!!!!",800,320);
        text("Batman (angrily): Then why are you dressed up like him???? Why are you",800,350);
        text("creating chaos in Gotham? What's your problem?",800,380);
        text("Joker: My problem is you and Robin!!",800,410);
        text("Batman: Enough Nonsense!!!! Right now tell me where's Robin, or prepare",800,440);
        text("to die!!",800,470);
        fill("lightGreen");
        text("Joker: Don't worry Batsy, have patience!! I'll soon tell you where's Robin...",800,520);
        text("..You'll soon get to know my secret...but before that, let's have some fun!",800,550);
        text("HIHIHAHAHAHAHAHA!",800,580);
        text("(Joker suddenly attacks Batman; Batman dodges his attack)",800,610);
        text("Batman: You FOOL!! You need to be taught a lesson.",800,640);
    }

    if(gameState === "instructions") {
        background(bgImg3);
        proceed.x = -300;
        settings.x = 1250;
        settings.y = 340;
        settings.scale = 0.4
        var proceed4 = createSprite(1250,580,10,10);
        proceed4.addImage(proceedImg);
        proceed4.lifetime = 2;
        proceed4.scale = 0.4;
        if(mousePressedOver(proceed4)) {
            click.play();
            gameState = "play";
        }

        fill("black");
        textFont("forte");
        textSize(40);
        textStyle(NORMAL);
        text("Instructions:",600,40);
        textFont("cursive");
        textSize(20);
        textStyle(BOLD);
        text("Aim/Objective:",10,60);
        text("Controls:",10,245);
        textStyle(NORMAL);
        fill("red");
        text("~ You will be playing this game as Batman.",10,90)
        text("~ Reduce Joker's lifeline to 0 by using your primary and special attacks to win the game.",10,120);
        text("~ Batman and Joker both have a lifeline of 1000. You'll lose as soon as your lifeline reduces to 0.",10,150);
        text("~ Batman's and Joker's primary attacks are unlimited. However, both can use their special attacks only 2 times in the game.",10,180);
        text("~ Both primary attacks will reduce opponent's lifeline by 20. Both special attacks will reduce opponent's lifeline by 160.",10,210);
        fill("white");
        text("~ 'Enter' key to perform a primary attack.",10,275);
        text("~ 'Space' key to perform a special attack.",10,305);
        text("~ Your primary weapon needs to be reloaded after each primary attack. Press 'Shift' key to reload.",10,335);
        text("~ Press 'Ctrl'(Control) key to block Joker's primary attacks. You can't block Joker's special attacks.",10,365);
        text("~ Joker can automatically use his primary and special attacks in the game.",10,395);
        text("~ Click the 'Pause' button visible on the screen to pause the game. You can also the view the Controls",10,425);
        text("anytime by clicking the 'Pause' button.",10,455);
        fill("lightGreen");
        text("* Click the Settings button on the right of the screen to change Batman's Primary and Special attacks.",10,570);
        text("* Click the Proceed button to start with the game.",10,600);
    }
 
    if(gameState === "play") {
        background(bgImg2);
        proceed.x = -300;
        settings.x = -1200;
        batman.visible = true;
        joker.visible = true;
        sprite9.visible = true;
        if(specialAttack.velocityX === 0 && joker_specialAttack.velocityX === 0) {
            sprite9.x = 1375;
        }
        else {
            sprite9.x = 2000;
        }

        if(keyDown("ctrl")) {
            if(specialAttack.velocityX != 4 && joker_specialAttack.velocityX != -4) {
                state = "blocked";
                batman.addImage(batmanBlock);
                batman.scale = 0.28;
            }
        }
        else {
            state = "normal";
            if(var1 === 1) {
                batman.addImage(batmanImg);
            }
            else if(var1 === 2) {
                batman.addImage(batmanImg2);
            }
        }

        if(state === "blocked") {
            bulletDodged();
        }

        if(sprite7.velocityX === 0 && sprite7.x === 1400 && specialAttack.velocityX != 4 && joker_specialAttack.velocityX != -4) {
            jokerBullet();
        }

        if(batman.isTouching(jokerBulletGroup)) {
            jokerBulletGroup.destroyEach();
            if(state === "normal") {
                hit.play();
                laugh.play();
                batmanLife = batmanLife - 20;
            }
        }

        if(batman.isTouching(jokerBulletGroup2)) {
            jokerBulletGroup2.destroyEach();
            if(state === "normal") {
                hit.play();
                laugh.play();
                batmanLife = batmanLife - 20;
            }
        }

        if(keyWentDown("shift") && reloaded === "false") {
            if(specialAttack.velocityX != 4 && joker_specialAttack.velocityX != -4) {
                reloaded = "true";
                reload1.play();
            }
        }

        if(keyWentDown("enter")  && state === "normal" && reloaded === "true") {
            if(specialAttack.velocityX != 4 && joker_specialAttack.velocityX != -4) {
                reloaded = "false"
                bullet.visible = true;
                bullet.x = batman.x + 140;
                bullet.velocityX = 21;
                if(var1 === 1) {
                    batmanGunSound.play();
                }
                else if(var1 === 2) {
                    batmanGunSound2.play();
                }
            }
        }

        if(keyWentDown("space") && batmanSpecial_var > 0 && specialAttack.velocityX === 0) {
            batman_specialSound.play();
            whoosh.play();
            specialAttack.visible = true;
            specialAttack.x = batman.x + 140;
            specialAttack.velocityX = 4;
            reload1.stop();
            reload2.stop();
            Ah_sound.stop();
            hit.stop();
            laugh.stop();
            laugh2.stop();
            jokerGunSound.stop();
            batmanGunSound.stop();
            batmanGunSound2.stop();
            jokerBulletGroup.destroyEach();
            jokerBulletGroup2.destroyEach();
        }

        if(jokerLife === 600 && keyWentDown("shift") && reloaded === "true" && jokerSpecial_var > 0 && jokerSpecial_var === 2 && joker_specialAttack.velocityX === 0) {
            joker_specialSound.play();
            laugh2.play();
            whoosh.play();
            joker_specialAttack.visible = true;
            joker_specialAttack.x = joker.x - 140;
            joker_specialAttack.velocityX = -4;
            reload1.stop();
            reload2.stop();
            Ah_sound.stop();
            hit.stop();
            laugh.stop();
            jokerGunSound.stop();
            batmanGunSound.stop();
            batmanGunSound2.stop();
            jokerBulletGroup.destroyEach();
            jokerBulletGroup2.destroyEach();
        }

        if(jokerLife === 580 && keyWentDown("shift") && reloaded === "true" && jokerSpecial_var > 0 && jokerSpecial_var === 2 && joker_specialAttack.velocityX === 0) {
            joker_specialSound.play();
            laugh2.play();
            whoosh.play();
            joker_specialAttack.visible = true;
            joker_specialAttack.x = joker.x - 140;
            joker_specialAttack.velocityX = -4;
            reload1.stop();
            reload2.stop();
            Ah_sound.stop();
            hit.stop();
            laugh.stop();
            jokerGunSound.stop();
            batmanGunSound.stop();
            batmanGunSound2.stop();
            jokerBulletGroup.destroyEach();
            jokerBulletGroup2.destroyEach();
        }

        if(jokerLife === 500 && keyWentDown("shift") && reloaded === "true" && jokerSpecial_var > 0 && jokerSpecial_var === 2 && joker_specialAttack.velocityX === 0) {
            joker_specialSound.play();
            laugh2.play();
            whoosh.play();
            joker_specialAttack.visible = true;
            joker_specialAttack.x = joker.x - 140;
            joker_specialAttack.velocityX = -4;
            reload1.stop();
            reload2.stop();
            Ah_sound.stop();
            hit.stop();
            laugh.stop();
            jokerGunSound.stop();
            batmanGunSound.stop();
            batmanGunSound2.stop();
            jokerBulletGroup.destroyEach();
            jokerBulletGroup2.destroyEach();
        }

        if(jokerLife === 480 && keyWentDown("shift") && reloaded === "true" && jokerSpecial_var > 0 && jokerSpecial_var === 2 && joker_specialAttack.velocityX === 0) {
            joker_specialSound.play();
            laugh2.play();
            whoosh.play();
            joker_specialAttack.visible = true;
            joker_specialAttack.x = joker.x - 140;
            joker_specialAttack.velocityX = -4;
            reload1.stop();
            reload2.stop();
            Ah_sound.stop();
            hit.stop();
            laugh.stop();
            jokerGunSound.stop();
            batmanGunSound.stop();
            batmanGunSound2.stop();
            jokerBulletGroup.destroyEach();
            jokerBulletGroup2.destroyEach();
        }

        if(jokerLife === 400 && keyWentDown("shift") && reloaded === "true" && jokerSpecial_var > 0 && jokerSpecial_var === 2 && joker_specialAttack.velocityX === 0) {
            joker_specialSound.play();
            laugh2.play();
            whoosh.play();
            joker_specialAttack.visible = true;
            joker_specialAttack.x = joker.x - 140;
            joker_specialAttack.velocityX = -4;
            reload1.stop();
            reload2.stop();
            Ah_sound.stop();
            hit.stop();
            laugh.stop();
            jokerGunSound.stop();
            batmanGunSound.stop();
            batmanGunSound2.stop();
            jokerBulletGroup.destroyEach();
            jokerBulletGroup2.destroyEach();
        }

        if(jokerLife === 380 && keyWentDown("shift") && reloaded === "true" && jokerSpecial_var > 0 && jokerSpecial_var === 2 && joker_specialAttack.velocityX === 0) {
            joker_specialSound.play();
            laugh2.play();
            whoosh.play();
            joker_specialAttack.visible = true;
            joker_specialAttack.x = joker.x - 140;
            joker_specialAttack.velocityX = -4;
            reload1.stop();
            reload2.stop();
            Ah_sound.stop();
            hit.stop();
            laugh.stop();
            jokerGunSound.stop();
            batmanGunSound.stop();
            batmanGunSound2.stop();
            jokerBulletGroup.destroyEach();
            jokerBulletGroup2.destroyEach();
        }

        if(jokerLife === 300 && keyWentDown("shift") && reloaded === "true" && jokerSpecial_var > 0 && jokerSpecial_var === 2 && joker_specialAttack.velocityX === 0) {
            joker_specialSound.play();
            laugh2.play();
            whoosh.play();
            joker_specialAttack.visible = true;
            joker_specialAttack.x = joker.x - 140;
            joker_specialAttack.velocityX = -4;
            reload1.stop();
            reload2.stop();
            Ah_sound.stop();
            hit.stop();
            laugh.stop();
            jokerGunSound.stop();
            batmanGunSound.stop();
            batmanGunSound2.stop();
            jokerBulletGroup.destroyEach();
            jokerBulletGroup2.destroyEach();
        }

        if(jokerLife === 280 && keyWentDown("shift") && reloaded === "true" && jokerSpecial_var > 0 && jokerSpecial_var === 2 && joker_specialAttack.velocityX === 0) {
            joker_specialSound.play();
            laugh2.play();
            whoosh.play();
            joker_specialAttack.visible = true;
            joker_specialAttack.x = joker.x - 140;
            joker_specialAttack.velocityX = -4;
            reload1.stop();
            reload2.stop();
            Ah_sound.stop();
            hit.stop();
            laugh.stop();
            jokerGunSound.stop();
            batmanGunSound.stop();
            batmanGunSound2.stop();
            jokerBulletGroup.destroyEach();
            jokerBulletGroup2.destroyEach();
        }

        if(jokerLife === 200 && keyWentDown("shift") && reloaded === "true" && jokerSpecial_var > 0 && joker_specialAttack.velocityX === 0) {
            joker_specialSound.play();
            laugh2.play();
            whoosh.play();
            joker_specialAttack.visible = true;
            joker_specialAttack.x = joker.x - 140;
            joker_specialAttack.velocityX = -4;
            reload1.stop();
            reload2.stop();
            Ah_sound.stop();
            hit.stop();
            laugh.stop();
            jokerGunSound.stop();
            batmanGunSound.stop();
            batmanGunSound2.stop();
            jokerBulletGroup.destroyEach();
            jokerBulletGroup2.destroyEach();
        }

        if(jokerLife === 180 && keyWentDown("shift") && reloaded === "true" && jokerSpecial_var > 0 && joker_specialAttack.velocityX === 0) {
            joker_specialSound.play();
            laugh2.play();
            whoosh.play();
            joker_specialAttack.visible = true;
            joker_specialAttack.x = joker.x - 140;
            joker_specialAttack.velocityX = -4;
            reload1.stop();
            reload2.stop();
            Ah_sound.stop();
            hit.stop();
            laugh.stop();
            jokerGunSound.stop();
            batmanGunSound.stop();
            batmanGunSound2.stop();
            jokerBulletGroup.destroyEach();
            jokerBulletGroup2.destroyEach();
        }

        if(jokerLife === 60 && keyWentDown("shift") && reloaded === "true" && jokerSpecial_var > 0 && joker_specialAttack.velocityX === 0) {
            joker_specialSound.play();
            laugh2.play();
            whoosh.play();
            joker_specialAttack.visible = true;
            joker_specialAttack.x = joker.x - 140;
            joker_specialAttack.velocityX = -4;
            reload1.stop();
            reload2.stop();
            Ah_sound.stop();
            hit.stop();
            laugh.stop();
            jokerGunSound.stop();
            batmanGunSound.stop();
            batmanGunSound2.stop();
            jokerBulletGroup.destroyEach();
            jokerBulletGroup2.destroyEach();
        }

        if(jokerLife === 40 && keyWentDown("shift") && reloaded === "true" && jokerSpecial_var > 0 && joker_specialAttack.velocityX === 0) {
            joker_specialSound.play();
            laugh2.play();
            whoosh.play();
            joker_specialAttack.visible = true;
            joker_specialAttack.x = joker.x - 140;
            joker_specialAttack.velocityX = -4;
            reload1.stop();
            reload2.stop();
            Ah_sound.stop();
            hit.stop();
            laugh.stop();
            jokerGunSound.stop();
            batmanGunSound.stop();
            batmanGunSound2.stop();
            jokerBulletGroup.destroyEach();
            jokerBulletGroup2.destroyEach();
        }

        if(jokerLife === 20 && keyWentDown("shift") && reloaded === "true" && jokerSpecial_var > 0 && joker_specialAttack.velocityX === 0) {
            joker_specialSound.play();
            laugh2.play();
            whoosh.play();
            joker_specialAttack.visible = true;
            joker_specialAttack.x = joker.x - 140;
            joker_specialAttack.velocityX = -4;
            reload1.stop();
            reload2.stop();
            Ah_sound.stop();
            hit.stop();
            laugh.stop();
            jokerGunSound.stop();
            batmanGunSound.stop();
            batmanGunSound2.stop();
            jokerBulletGroup.destroyEach();
            jokerBulletGroup2.destroyEach();
        }

        if(specialAttack.velocityX === 4 ) {
            state = "special";
        }

        if(joker_specialAttack.velocityX === -4) {
            state = "joker_special";
        }

        if(specialAttack.isTouching(joker)) {
            Ah_sound.play();
            specialAttack.visible = false;
            specialAttack.velocityX = 0;
            specialAttack.x = batman.x + 140;
            jokerLife = jokerLife - 160;
            state = "normal";
            batmanSpecial_var = batmanSpecial_var - 1;
        }

        if(joker_specialAttack.isTouching(batman)) {
            Ah_sound.play();
            joker_specialAttack.visible = false;
            joker_specialAttack.velocityX = 0;
            joker_specialAttack.x = joker.x - 140;
            batmanLife = batmanLife - 160;
            state = "normal";
            jokerSpecial_var = jokerSpecial_var - 1;
        }

        if(bullet.isTouching(joker)) {
            hit.play();
            bullet.visible = false;
            bullet.velocityX = 0;
            bullet.x = batman.x + 140;
            jokerLife = jokerLife - 20;
        }

        if(mouseIsOver(sprite9) && mouseWentDown("leftButton")) {
            gameState = "paused";
            bulletGroup.destroyEach();
            bullet.visible = false;
            click.play();
        }

        if(jokerLife === 0) {
            bgm1.stop();
            gameState = "end";
            joker_specialAttack.visible = false;
            joker_specialAttack.velocityX = 0;
            joker_specialAttack.x = joker.x - 140;
            specialAttack.visible = false;
            specialAttack.velocityX = 0;
            specialAttack.x = batman.x + 140;
            sprite11.velocityX = 2;
            Ah_sound.play();
            laugh.stop();
            batman_specialSound.stop();
            joker_specialSound.stop();
            whoosh.stop();
            laugh2.stop();
        }
        if(batmanLife === 0) {
            bgm1.stop();
            gameState = "end";
            joker_specialAttack.visible = false;
            joker_specialAttack.velocityX = 0;
            joker_specialAttack.x = joker.x - 140;
            specialAttack.visible = false;
            specialAttack.velocityX = 0;
            specialAttack.x = batman.x + 140;
            sprite11.velocityX = 2;
            batman_specialSound.stop();
            joker_specialSound.stop();
            whoosh.stop();
            Ah_sound.play();
        }
    }

    if(gameState === "paused") {
        background(bgImg3);
        batman.visible = false;
        joker.visible = false;
        sprite9.visible = false;
        
        var sprite10 = createSprite(1375,610,150,50);
        sprite10.lifetime = 2;
        sprite10.addImage(resume);
        sprite10.scale = 0.25;    
        if(mouseIsOver(sprite10) && mouseWentDown("leftButton")) {
            gameState = "play";
            click.play();
        }

        fill("black");
        textFont("forte");
        textSize(90);
        textStyle(NORMAL);
        text("Game paused",480,100);
        fill("white");
        textSize(40);
        textFont("cursive");
        text("~ 'Enter' key to fire bullets (Primary attack) ",20,340);
        text("~ 'Shift' key to reload Batman's gun",20,390);
        text("~ 'Ctrl' (Control) key to block Joker's Primary attack",20,440);
        text("~ 'Space' key to use Batarangs/Knives (Special attack)",20,490);
        fill("red");
        textStyle(BOLD);
        textFont("segoe print");
        textSize(50);
        text("Controls:",10,260);
        fill("lightGreen");
        textStyle(NORMAL);
        textSize(20);
        textFont("cursive");
        text("~ Your gun (Primary weapon) needs to be reloaded after each use.",10,620);
        text("~ Special attacks can be used only 2 times. Primary attacks are unlimited.",10,650);
        text("~ Both primary attacks will reduce opponent's lifeline by 20. Both special attacks will reduce opponent's lifeline by 160.",10,680);
    }

    if(gameState === "end") {
        background(bgImg2);
        youWin.scale = variable;
        youLose.scale = variable;
        bgm1.stop();

        if(sprite11.x >= 2050) {
            fill("black");
            textSize(30);
            textFont("cursive");
            textStyle(BOLD);
            text("(Press 'R' to restart)",550,345);
            if(keyDown("r")) {
                outro_song.stop();
                outro_song2.stop();
                bgm1.play();
                laugh2.setVolume(0.4);
                gameState = "instructions";
                batman.setVelocity(0,0);
                joker.setVelocity(0,0);
                sprite11.setVelocity(0,0);
                sprite11.x = 1000;
                joker.x = 1000;
                joker.y = 560;
                batman.x = 340;
                batman.y = 550;
                state = "normal";
                reloaded = "true";
                variable = 20;
                variable2 = 15;
                variable3 = 15;
                batmanLife = 1000;
                jokerLife = 1000;
                jokerSpecial_var = 2;
                batmanSpecial_var = 2;
                part2_logo.visible = false;
                gameBy.visible = false;
                youLose.visible = false;
                youWin.visible = false;
                batman.visible = false;
                joker.visible = false;
            }
        }

        if(jokerLife === 0) {
            if(sprite11.x >= 1710) {
                batman.velocityX = 15;
                batman.velocityY = 10;
            }
            else {
                batman.x = 340;
                batman.y = 550;
            }

            if(sprite11.x === 1020) {
                cloud1S.visible = true;
                outro_song.play();
            }

            if(sprite11.x === 1200) {
                cloud2S.visible = true;
            }
            if(sprite11.x === 1390) {
                joker.velocityX = 15;
                joker.velocityY = 3;
            }
            if(sprite11.x === 1560) {
                cloud3S.visible = true;
            }
            if(sprite11.x >= 1900) {
                variable = variable - 0.5;
            }
            if(sprite11.x === 1900) {
                youWin.visible = true;
            }
            if(variable === 9) {
                impact.play();
            }
            if(sprite11.x === 2110) {
                impact.play();
            }
            if(sprite11.x === 2290) {
                impact.play();
            }
            if(sprite11.x === 2100) {
                cloud1S.visible = false;
                cloud2S.visible = false;
                cloud3S.visible = false;
            }
            if(sprite11.x >= 2260) {
                variable3 = variable3 - 0.5;
                gameBy.visible = true;
                gameBy.scale = variable3;
            }
        }

        if(batmanLife === 0) {
            if(sprite11.x >= 1710) {
                batman.velocityX = 15;
                batman.velocityY = 10;
            }
            else {
                batman.x = 340;
                batman.y = 550;
            }

            if(sprite11.x === 1020) {
                cloud4S.visible = true;
                outro_song2.play();
            }

            if(sprite11.x === 1200) {
                cloud5S.visible = true;
            }
            if(sprite11.x === 1390) {
                joker.velocityX = 15;
                joker.velocityY = 3;
            }
            if(sprite11.x === 1560) {
                cloud6S.visible = true;
            }
            if(sprite11.x >= 1900) {
                variable = variable - 0.5;
            }
            if(sprite11.x === 1900) {
                youLose.visible = true;
            }
            if(variable === 5) {
                laugh2.setVolume(0.3);
                laugh2.play();
                impact.play();
            }
            if(sprite11.x === 2110) {
                impact.play();
            }
            if(sprite11.x === 2290) {
                impact.play();
            }
            if(sprite11.x === 2100) {
                cloud4S.visible = false;
                cloud5S.visible = false;
                cloud6S.visible = false;
            }    
            if(sprite11.x >= 2260) {
                variable3 = variable3 - 0.5;
                gameBy.visible = true;
                gameBy.scale = variable3;
            }
        }
        
        bulletGroup.destroyEach();
        bullet.visible = false;
        sprite9.visible = false;
        reload1.stop();
        reload2.stop();
    }

    drawSprites();

    if(gameState === "play") {
        textStyle(BOLD);
        textFont("cursive");
        textSize(20);
        fill("white");
        text("Batman's Special Attacks left: " + batmanSpecial_var,10,100);
        text("Joker's Special Attacks left: " + jokerSpecial_var,910,100);
        if(joker_specialAttack.velocityX === -4) {
            fill("red");
            textStyle(BOLD);
            textFont("segoe print");
            textSize(20);
            text("Joker is using his Special Attack!!",910,130);
        }
        if(specialAttack.velocityX === 4) {
            fill("lightGreen");
            textStyle(BOLD);
            textFont("segoe print");
            textSize(20);
            text("Batman is using his Special Attack!!",10,160);
        }
        if(reloaded === "false") {
            fill("red");
            textStyle(BOLD);
            textFont("cursive");
            textSize(20);
            text("Gun is unloaded. Reload your gun by pressing 'Shift' button.",10,130);
        }
    }

    if(gameState === "loading") {
        fill("white");
        textFont("cursive");
        textStyle(BOLD);
        textSize(20);
        text("Minimum 4 GB RAM is required for smooth functioning of this game and to avoid crashing.",40,650);
        fill("red");
        text("Use Headphones/Earphones for a better experience.",40,680);
    }

    if(gameState === "play" || gameState === "end") {
        textFont("forte");
        textSize(35);
        fill("red");
        text("Batman's lifeline: " + batmanLife,150,50);
        fill("lightGreen");
        text("Joker's lifeline: " + jokerLife,1050,50);
    }

    if(gameState === "end" && sprite11.x >= 2080) {
        fill("white");
        textStyle(BOLD);
        textFont("cursive");
        textSize(20);
        text("To be Continued in:",120,360);
        fill("lightGreen");
        textSize(25);
        textFont("cursive");
        //text("{A PROMO for Batman: The Joker's Secret will be released on 30th October, 2021 at 7:30 pm on the",140,660);
        //text("WhitehatJr Community!!!}",600,690);
        text("Play Batman: The Joker's Secret :-",410,670);

        variable2 = variable2 - 0.5;
        part2_logo.visible = true;
        part2_logo.scale = variable2;
    }
}

function goBack() {
    click.play();
    if(gameState === "initial1") {
        gameState = "menu";
        proceed.x = 300;
        settings.x = 1200;
    }
    if(gameState === "initial2") {
        gameState = "initial1";
    }
    if(gameState === "initial3") {
        gameState = "initial2";
    }
    if(gameState === "initial4") {
        gameState = "initial3";
    }
    if(gameState === "instructions") {
        gameState = "initial4";
    }
    if(gameState === "settings") {
        if(stage === 1) {
            gameState = "menu";
            settings.x = 1200;
        }
        if(stage === 2) {
            gameState = "instructions";
            settings.x = 1200;
        }
    }
}

function goToMenu() {
    click.play();
    gameState = "menu";
}

function jokerBullet() {
    if(frameCount % 10 === 0 && frameCount % 210 != 0) {
        var joker_bullet = createSprite(925,530,10,10);
        joker_bullet.addImage(bulletImg);
        joker_bullet.scale = 0.1;
        joker_bullet.velocityX = -21;
        joker_bullet.depth = joker.depth;
        joker.depth = joker.depth + 1;
        
        jokerGunSound.play();
        jokerBulletGroup.add(joker_bullet);
        bulletGroup.add(joker_bullet);
    }
    if(frameCount % 5.5 === 0 && frameCount % 10 != 0 && frameCount % 210 != 0) {
        var joker_bullet2 = createSprite(1010,530,10,10);
        joker_bullet2.addImage(bulletImg);
        joker_bullet2.scale = 0.1;
        joker_bullet2.velocityX = -21;

        jokerGunSound.play();
        jokerBulletGroup2.add(joker_bullet2);
        bulletGroup.add(joker_bullet2);
    }
    
    if(frameCount % 210 === 0) {
        reload2.play();
        sprite7.velocityX = 3;
    }
}

function bulletDodged() {
    if(frameCount % 15 === 0 ) {
        var randomNumber = Math.round(random(1,2));
        var dodgedBullet = createSprite(random(batman.x+130,batman.x+180),random(batman.y+50,batman.y+100),10,10);
        dodgedBullet.scale = 0.1;
        dodgedBullet.lifetime = 200;
        if(randomNumber === 1) {
            dodgedBullet.addImage(bulletImg);
        }
        else if(randomNumber === 2) {
            dodgedBullet.addImage(bulletImg3);
        }

        bulletGroup.add(dodgedBullet);

        dodgedBullet.depth = batman.depth;
        batman.depth = batman.depth + 1;
    }
}
