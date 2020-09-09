const gQuests = [{ id: 0, opts: ["dog", "cat"], correctOptIndex: 1, link: "https://png2.cleanpng.com/sh/36ed8a918d7198985b893baaa7e09ce3/L0KzQYq3UcI6N6t4h5H0aYP2gLBuTfRia5l4gOd3ZD32frF8lL1xfaF1kZ98aXLogrrojr1pfaRwkZ9tb3ewd8P2jB1qdpgyhAd7LX3ycrrzhb1ld5gyfAR4b33ogsS0gvx2bV58gNdubHX1g368g8UxOGcAfaRtOXK3QXA7UMAyQWE8TaMANEi6RIm7VMYyQGc9RuJ3Zx==/kisspng-dachshund-snout-puppy-siberian-husky-dog-grooming-our-mobile-dog-groomers-blue-wheelers-5c50069e2d9b41.4001907515487484461868.png" },
{ id: 1, opts: ["table", "chair"], correctOptIndex: 2, link: "https://cliparting.com/wp-content/uploads/2017/03/Cartoon-chairs-clipart-clipartfest.png" },
{ id: 2, opts: ["house", "tree"], correctOptIndex: 1, link: "https://easydraweverything.com/wp-content/uploads/2020/05/easy-to-draw-house-cartoon-0.png" }];

let gCurrQuestIdx = 0;

let img = document.getElementById("addImage");
let answer1 = document.getElementById("addAnswer1");
let answer2 = document.getElementById("addAnswer2");
let headline = document.querySelector('.headline button');
let answer1Background = document.querySelector(".answer1")
let answer2Background = document.querySelector(".answer2")
let hasStarted = 0;
let clicked = 0;

answer1.addEventListener("click", function () {
    if (clicked === 0) {
        clicked = 1;
        checkAnswer(1);
    }
});

answer2.addEventListener("click", function () {
    if (clicked === 0) {
        clicked = 1;
        checkAnswer(2);
    }
});

const initGame = () => {
    let pic = document.querySelector('.pic');
    let answers = document.querySelector('.answers');

    headline.addEventListener("click", function () {
        if (hasStarted === 0) {
            hasStarted = 1;
            pic.classList.toggle("hide");
            answers.classList.toggle("hide");
        } else  if (clicked === 1){
            clicked = 0;
            if (gCurrQuestIdx < gQuests.length) {
                createQuests(gCurrQuestIdx)
            }
            else {
                finish();
            }
        }
        createQuests(gCurrQuestIdx);
    });
}

const createQuests = (i) => {
    headline.innerHTML = "Pick the correct answer";
    img.src = gQuests[i].link;
    answer1.innerHTML = gQuests[i].opts[0];
    answer2.innerHTML = gQuests[i].opts[1];
    answer1Background.style.backgroundColor = "rgb(70, 160, 200)";
    answer2Background.style.backgroundColor = "rgb(70, 160, 200)";
    answer1.style.color = "rgb(222, 47, 108)";
    answer2.style.color = "rgb(222, 47, 108)";
}

const checkAnswer = (ans) => {
    if (ans === 1){
        if (ans === gQuests[gCurrQuestIdx].correctOptIndex) {
            answer1.innerHTML = "correct";
            answer1.style.color = "black";
            answer1Background.style.backgroundColor = "rgb(10, 181, 115)";
        }
        else {
            answer1.innerHTML = "incorrect";
            answer1.style.color = "black";
            answer1Background.style.backgroundColor = "rgb(237, 75, 89)";
        }
    } else {
        if (ans === gQuests[gCurrQuestIdx].correctOptIndex) {
            answer2.innerHTML = "correct";
            answer2.style.color = "black";
            answer2Background.style.backgroundColor = "rgb(10, 181, 115)";
        }
        else {
            answer2.innerHTML = "incorrect";
            answer2.style.color = "black";
            answer2Background.style.backgroundColor = "rgb(237, 75, 89)";
        }
    }

    gCurrQuestIdx++;

    if (gCurrQuestIdx < gQuests.length) {
        headline.innerHTML = "next question";
    } else {
        headline.innerHTML = "finish";
    }

}

const finish = () =>{
    let body = document.querySelector("body");
    let httml = document.querySelector("html");
    body.style.opacity = 0;
    httml.style.backgroundImage = "url('https://value-first.be/wp-content/uploads/2017/08/project-done.png')";
} 

initGame();
