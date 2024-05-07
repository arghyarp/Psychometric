const qustionDataBase = [
  {
    question: "An Informal Gathering occurs when a group of people get together in a casual, relaxed manner. Which situation below is the best example of an Informal Gathering?",
    option1: "debating club meets on the first Sunday morning of every month.",
    option2: "After finding out about his salary raise, Jay and a few colleagues go out for a quick dinner after work.",
    option3: "Meena sends out 10 invitations for a bachelorette party she is giving for her elder sister.",
    option4: "Whenever she eats at a Chinese restaurant, Roop seems to run into Dibya.",
    ans: "answer3",
  },
  {
    question: "A Tiebreaker is an additional contest carried out to establish a winner among tied contestants. Choose one situation from the options below that best represents a Tiebreaker.",
    option1: "At halftime, the score is tied at 2-2 in a football match.",
    option2: "Serena and Maria have each secured 1 set in the game.",
    option3: "The umpire tosses a coin to decide which team will have bat first.",
    option4: "RCB and KKR each finished at 140 all out.",
    ans: "answer1",
  },
  {
    question: "The car dealer found that there was a tremendous response for the new XYZ’s car booking with long queues of people complaining about the duration of business hours and arrangements. Courses of action: I. People should make their arrangement of lunch and snacks while going for car XYZ’s booking and be ready to spend several hours. II. Arrangement should be made for more booking desks and increase business hours to serve more people in less time.",
    option1: "If only I follows",
    option2: "If only II follows",
    option3: "If either I or II follows",
    option4: "If Neither I or II follows",
    ans: "answer4",
  },
  {
    question: "You are hereby appointed as a programmer with a probation period of one year and your performance will be reviewed at the end of the period for confirmation. - A line in an appointment letter. Assumptions: I. The performance of an individual generally is not known at the time of appointment offer. II. Generally, an individual tries to prove his worth in the probation period.",
    option1: "Only assumption I is implicit",
    option2: "Only assumption II is implicit",
    option3: "Either I or II is implicit",
    option4: "Neither I nor II is implicit",
    option5: "Both I and II are implicit",
    ans: "answer5",
  },
  {
    question: "Unemployment allowance should be given to all unemployed Indian youth above 18 years of age. Assumptions: I. There are unemployed youth in India who needs monetary support. II. The government has sufficient funds to provide allowance to all unemployed youth.",
    option1: "Only assumption I is implicit",
    option2: "Only assumption II is implicit",
    option3: "Either I or II is implicit",
    option4: "Neither I nor II is implicit",
    option5: "Both I and II are implicit",
    ans: "answer5",
  },
  {
    question: "Tanya is older than Eric. Cliff is older than Tanya. Eric is older than Cliff. If the first two statements are true, the third statement is",
    option1: "true",
    option2: "false",
    option3: "uncertain",
    ans: "answer3",
  },
  {
    question: "Apartments in the Riverdale Manor cost less than apartments in The Gaslight Commons. Apartments in the Livingston Gate cost more than apartments in The Gaslight Commons. Of the three apartment buildings, the Livingston Gate costs the most. If the first two statements are true, the third statement is",
    option1: "true",
    option2: "false",
    option3: "uncertain",
    ans: "answer1",
  },
  {
    question: "Yard is to inch as quart is to",
    option1: "gallon",
    option2: "ounce",
    option3: "milk",
    option4: "liquid",
    ans: "answer1",
  },
  {
    question: "Marathon is to race as hibernation is to",
    option1: "winter",
    option2: "bear",
    option3: "dream",
    option4: "sleep",
    ans: "answer4",
  },
  {
    question: "Here are some words translated from an artificial language. gorblflur means fan belt pixngorbl means ceiling fan arthtusl means tile roof Which word could mean 'ceiling tile'?",
    option1: "gorbltusl",
    option2: "flurgorbl",
    option3: "arthflur",
    option4: "pixnarth",
    ans: "answer4",
  },
  {
    question: "Here are some words translated from an artificial language. hapllesh means cloudburst srenchoch means pinball resbosrench means ninepin Which word could mean 'cloud nine'?",
    option1: "leshsrench",
    option2: "ochhapl",
    option3: "haploch",
    option4: "haplresbo",
    ans: "answer3",
  },
  {
    question: "Look at this series: 36, 34, 30, 28, 24, ... What number should come next?",
    option1: "20",
    option2: "22",
    option3: "23",
    option4: "26",
    ans: "answer2",
  },
];

// getting referrence
const questionContainer = document.querySelector("h3");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submitButton = document.querySelector("button");
const usersAnswer = document.querySelectorAll(".answer");
const scoreArea = document.querySelector("#ShowScore");

// This function is rendering all the texts

let questionCount = 0;
let score = 0;
const mainFunc = () => {
  const list = qustionDataBase[questionCount];
  questionContainer.innerText = list.question;
  option1.innerText = list.option1;
  option2.innerText = list.option2;
  option3.innerText = list.option3;
  option4.innerText = list.option4;
};

mainFunc();

// this function is for answer checking

const goCheckAnswer = () => {
  let answers;
  usersAnswer.forEach((data) => {
    if (data.checked) {
      answers = data.id;
    }
  });
  return answers;
};

const deselectAll = () => {
  usersAnswer.forEach((data) => {
    data.checked = false;
  });
};

submitButton.addEventListener("click", () => {
  const checkAnswer = goCheckAnswer();
  console.log(checkAnswer);

  if (checkAnswer === qustionDataBase[questionCount].ans) {
    score++;
  }
  questionCount++;
  deselectAll();
  if (questionCount < qustionDataBase.length) {
    mainFunc();
  } else {
    scoreArea.style.display = "block";
    scoreArea.innerHTML = `
    <h3>Your score is ${score} / ${qustionDataBase.length}</h3>
    <button class='btn' onclick='location.reload()'>Play Again</button>
    `;
  }
});
