var questions=[{
	"question":"বাংলাদেশের রাজধানির নাম কী?",
	"option1":"ঢাকা",
	"option2":"কুমিল্লা",
	"option3":"ফেনি",
	"option4":"চট্টগ্রাম",
	"answer":"1"
},
{
	"question":"পৃথিবীর আকার কেমন?",
	"option1":"লম্বা",
	"option2":"চারকোণা",
	"option3":"বৃত্তাকার",
	"option4":"ত্রিভুজ",
	"answer":"3"
}

]
var currentQuestion=0;
var totalQues=questions.length;
var submitButton= document.getElementById("next-btn")
var score=0;
var container=document.getElementById("question-container");
var ques=document.getElementById("question");
var opt1=document.getElementById("op1");
var opt2=document.getElementById("op2");
var opt3=document.getElementById("op3");
var opt4=document.getElementById("op4");
function startGame() 
{
	var submitButton= document.getElementById("next-btn")
	var startButton = document.getElementById("start-btn")
    var questionContainerElement = document.getElementById("question-container")
	//console.log("startgame")
	startButton.classList.add('hide');
	questionContainerElement.classList.remove('hide');
    submitButton.classList.remove('hide');
 	loadQuestion(currentQuestion);

}
function loadQuestion(questionIndex) 
{
	var ques=document.getElementById("question");
	var opt1=document.getElementById("op1");
	var opt2=document.getElementById("op2");
	var opt3=document.getElementById("op3");
	var opt4=document.getElementById("op4");
	var q=questions[questionIndex];
	ques.innerHTML=(questionIndex+1)+"."+q.question;
	opt1.textContent=q.option1;
	opt2.textContent=q.option2;
	opt3.textContent=q.option3;
	opt4.textContent=q.option4;


}
function loadNextQuestion()
{
	var submitButton= document.getElementById("next-btn");
	submitButton.style.display='block';
	var nextButton= document.getElementById("next");
	nextButton.style.display='none';
	var cBtn=document.getElementById("correctOrNot");
		cBtn.style.display='none';
	var selectOpt=document.querySelector('input[type=radio]:checked')
	selectOpt.checked=false;
	++currentQuestion;
	if(currentQuestion==totalQues-1)
	{
		nextButton.innerHTML='Finish';
	}
	if(currentQuestion==totalQues)
	{
		
		showScore();
		return;
	}
    loadQuestion(currentQuestion);
}


function showCorrect()
{
	var submitButton= document.getElementById("next-btn");
	var selectOpt=document.querySelector('input[type=radio]:checked')
	if(!selectOpt)
	{
		alert("Please select your answer!")
		return;
	}
	var ans=selectOpt.value;
	submitButton.style.display='none';
	var nextButton= document.getElementById("next");
	nextButton.style.display='block';
	var cBtn=document.getElementById("correctOrNot");
	cBtn.innerHTML="Correct";
	if(questions[currentQuestion].answer===ans)
	{
		score+=1;
		//var nextButton= document.getElementById("next");
		var cBtn=document.getElementById("correctOrNot");
		cBtn.style.backgroundColor='rgb(77, 255, 77)';
		cBtn.style.color='rgb(0, 102, 0)';
		cBtn.style.display='block';
		nextButton.addEventListener('click',loadNextQuestion);
	}
	else
	{
		showInCorrect();
		nextButton.addEventListener('click',loadNextQuestion);
	}
	

}
function showInCorrect()
{
	var cBtn=document.getElementById("correctOrNot");
	cBtn.innerHTML="Incorrect";
	cBtn.style.backgroundColor='rgb(255, 77, 77)';
	cBtn.style.color='rgb(153, 0, 0)';
	cBtn.style.display='block';
}
function showScore()
{
	    var container=document.getElementById("question-container");
	    container.innerHTML='';
	    var heading=document.getElementById("head");
		var resultContainer=document.getElementById("result");
		var next=document.getElementById("next-btn");
		next.style.display='none';
		container.style.display='none';
		heading.innerHTML="QUIZ RESULTS";
		resultContainer.style.display='block';
		resultContainer.innerHTML="<b>Your Score "+score+"<br><br></b>"+
		"1) বাংলাদেশের রাজধানীর নাম কী? :- ঢাকা"+"<br><br>"+
		"2) পৃথিবীর আকার কেমন? :- বৃত্তাকার"+"<br><br>";
		var re=document.getElementById("re-btn");
		re.style.display='block';
		re.addEventListener('click',function(){
			window.location.reload();
		})

}
