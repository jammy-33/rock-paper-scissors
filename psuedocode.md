Set userScore to 0
Set computerScore to 0
Get input from user (r/p/s)
Assign input to a number (1=rock 2=paper 3=scissors)
Create random integer between 1 and 3
CASE1 userinput=1 random=1 -> Call draw function
CASE2 userinput=1 random=2 -> Call user loses function
CASE3 userinput=1 random=3 -> Call user wins function
CASE4 userinput=2 random=1 -> Call user wins function
CASE5 userinput=2 random=2 -> Call draw function
CASE6 userinput=2 random=3 -> Call user loses function
CASE7 userinput=3 random=1 -> Call user loses function
CASE8 userinput=3 random=2 -> Call user wins function
CASE9 userinput=3 random=3 -> Call draw function

Win function
Tell user "computer chose" x "you win"
Increase userScore by 1
If userScore < 3 repeat from line 3
Else Tell user you beat the computer 3 - computerScore


Lose function
Tell user "computer chose" x "you lose"
Increase computerScore by 1
If computerScore < 3 repeat from line 3
Else Tell user the computer beat you 3 - userScore


Draw function
Tell user "computer chose" x "you drew"
Repeat from line 3

