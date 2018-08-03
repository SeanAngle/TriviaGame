var right = 0;
var wrong = 0;
var totalScore = 0;



//Setting timer interval to 1 second
var timeVar = setInterval(function(){
    quizTimer()
}, 1000);

//Making the timer stop at 0


//Setting starting time to 90 seconds
var time = 10;

//Calling function to start timer
function quizTimer() {
    document.getElementById("timer").innerHTML = ("Finish before time runs out! <br>" + time--);
    if (time === 0){
        clearInterval(timeVar);
        
    }
};




//When timer hits zero clear page
//When timer hits zero show results
//Create function that holds results 
//Then .text them to a div you make to display resutls

//Results function
function getResults(){
    var input = $(".answers").attr("value"); 
    
    if (input == 1 ){
        right++;
    }else{
        wrong++;
    };
    

    // var rightChoice = document.getElementsByClassName();
    // var wrongChoice = 0;
    // var userGuess = "";
};


function finish(){
    var totalScore = right - wrong;
    
    console.log(totalScore);
    


};

$("document").on("click" , ".answers",function(){
    getResults();
});
$("#finished").on("click", function(){
    finish();
});






