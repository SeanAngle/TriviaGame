var right = 0;
var wrong = 0;
var totalScore = 0;
var unanswered = 0;



//Setting timer interval to 1 second
var timeVar = setInterval(function(){
    quizTimer()
}, 1000);

//Making the timer stop at 0


//Setting starting time to 90 seconds
var time = 100;

//Calling function to start timer
function quizTimer() {
    document.getElementById("timer").innerHTML = ("Finish before time runs out! <br>" + time--);
    if (time === 0){
        clearInterval(timeVar);
        $("#correct").text(right);
        $("#incorrect").text(wrong);
        unanswered = 10-(right+wrong);
        $("#unanswered").text("Unanswered: " + unanswered);

        
    }
};




//When timer hits zero clear page
//When timer hits zero show results
//Create function that holds results 
//Then .text them to a div you make to display resutls

//Results function
function getResults(){
    var input = $('input[name="answerChoice"]:checked').val(); 
    
    if (input === "1" ){
        right++;
    }else{
        wrong++;
    }
    console.log(input);
   
    

    // var rightChoice = document.getElementsByClassName();
    // var wrongChoice = 0;
    // var userGuess = "";

};


function finish(){
    var answersChecked = $(".answers:checked");

    for (var i = 0; i < answersChecked.length; i++){
        if(answersChecked[i].value === "1"){
            right++;
        }else if (answersChecked[i].value === "0"){
            wrong++;
        }console.log(answersChecked);
    }
    clearInterval(timeVar);
    
    
    $("#correct").text("Correct: " + right);
    $("#incorrect").text("Incorrect: " + wrong);
    unanswered = 10-(right+wrong);
    $("#unanswered").text("Unanswered: " + unanswered);


};



$("document").on("click" , ".answers",function(){
    getResults();
    console.log(right);
});


$("#finished").on("click", function(){
    finish();
    
});






