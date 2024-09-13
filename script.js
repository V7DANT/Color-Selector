//Selecting all Elements:
const button1=document.querySelector('#square1')
const button2=document.querySelector('#square2')
const button3=document.querySelector('#square3')
const button4=document.querySelector('#square4')
const centre_guess=document.querySelector('.random-color')
const StartOver=document.querySelector('.buttons');

let answer; //Answer button number

const letters = '0123456789ABCDEF';


function randomColor()
{
    let color='#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function rgbToHex(rgb) 
{
    // Convert rgb color format to hex format to match the baseColor format
    let rgbArray = rgb.match(/\d+/g).map(Number);
    return '#' + rgbArray.map(x => x.toString(16).padStart(2, '0')).join('');
}

//easy increments 5, randomizes edge cases

function easyRandomColor(baseColor)
{
    let easyColor='#'
    for (let i = 1; i<7; i++)
    {
        let charCode = baseColor.charCodeAt(i);
        if((charCode>52 && charCode<58) || (charCode>64 && charCode<71))
        {
            charCode=letters.charCodeAt(Math.floor(Math.random() * 16));
            easyColor += String.fromCharCode(charCode);
        }
        else
        {
        easyColor += String.fromCharCode(baseColor.charCodeAt(i) + 5);
        }
    }
    return easyColor
}

//med increments 2, randomizes edge cases

function medRandomColor(baseColor)
{
    // const baseColor=randomColor()

    let medColor='#'
    for (let i = 1; i<7; i++)
    {
        let charCode = baseColor.charCodeAt(i);
        
        if((charCode>55 && charCode<58) || (charCode>68 && charCode<71))
        {
            charCode=letters.charCodeAt(Math.floor(Math.random() * 16));
            medColor += String.fromCharCode(charCode);
        }
        else
        {
        medColor += String.fromCharCode(baseColor.charCodeAt(i) + 2);
        }
    }
    return medColor
}

//hard increments 2, keeps edge cases same

function hardRandomColor(baseColor)
{
    let hardColor='#'
    for (let i = 1; i<7; i++)
    {
        let charCode = baseColor.charCodeAt(i);
        
        if((charCode>55 && charCode<58) || (charCode>68 && charCode<71))
        {
            hardColor += String.fromCharCode(charCode);
        }
        else
        {
            hardColor += String.fromCharCode(baseColor.charCodeAt(i) + 2);
        }
    }
    return hardColor
}

//superHard increments 1, keeps edge cases same

function superHardRandomColor(baseColor)
{
    let superHardColor='#'
    for (let i = 1; i<7; i++)
    {
        let charCode = baseColor.charCodeAt(i);
        
        if(charCode===57 || charCode===70)
        {
            superHardColor += String.fromCharCode(charCode);
        }
        else
        {
            superHardColor += String.fromCharCode(baseColor.charCodeAt(i) + 1);
        }
    }
    return superHardColor
}


//ROUNDS:

function roundOne()
{
    baseColor=randomColor()
    answer=Math.floor((Math.random()*5))+1
    
    let button_answer = document.querySelector(`.button-container:nth-child(${answer}) .color-square`);
    centre_guess.style.backgroundColor=baseColor
    button_answer.style.backgroundColor=baseColor
    for (let i= 1; i<6; i++) //--->Selects easyColor for all squares except answer
    {
        if(i===answer)
        {
            continue;
        }
        document.querySelector(`#square${i}`).style.backgroundColor=easyRandomColor(baseColor)
    }

}
function roundTwo()
{
    baseColor=randomColor()
    answer=Math.floor((Math.random()*5))+1
    
    let button_answer = document.querySelector(`.button-container:nth-child(${answer}) .color-square`);
    centre_guess.style.backgroundColor=baseColor
    button_answer.style.backgroundColor=baseColor
    for (let i= 1; i<6; i++) 
    {
        if(i===answer)
        {
            continue;
        }
        document.querySelector(`#square${i}`).style.backgroundColor=medRandomColor(baseColor)
    }

}

function roundThree()
{
    baseColor=randomColor()
    answer=Math.floor((Math.random()*5))+1
    
    let button_answer = document.querySelector(`.button-container:nth-child(${answer}) .color-square`);
    centre_guess.style.backgroundColor=baseColor
    button_answer.style.backgroundColor=baseColor
    for (let i= 1; i<6; i++) 
    {
        if(i===answer)
        {
            continue;
        }
        document.querySelector(`#square${i}`).style.backgroundColor=medRandomColor(baseColor)
    }

}

function roundFour()
{
    baseColor=randomColor()
    answer=Math.floor((Math.random()*5))+1
    
    let button_answer = document.querySelector(`.button-container:nth-child(${answer}) .color-square`);
    centre_guess.style.backgroundColor=baseColor
    button_answer.style.backgroundColor=baseColor
    for (let i= 1; i<6; i++) 
    {
        if(i===answer)
        {
            continue;
        }
        document.querySelector(`#square${i}`).style.backgroundColor=hardRandomColor(baseColor)
    }

}

function roundFive()
{
    baseColor=randomColor()
    answer=Math.floor((Math.random()*5))+1
    
    let button_answer = document.querySelector(`.button-container:nth-child(${answer}) .color-square`);
    centre_guess.style.backgroundColor=baseColor
    button_answer.style.backgroundColor=baseColor
    for (let i= 1; i<6; i++) 
    {
        if(i===answer)
        {
            continue;
        }
        document.querySelector(`#square${i}`).style.backgroundColor=superHardRandomColor(baseColor)
    }

}

function createButtonsAndColorSquares() //Brings back the elements deleted after round 5
{
    
    for (let i = 1; i <= 5; i++) 
    {  
        //button container for each square
        let buttonContainerDiv = document.createElement('div');
        buttonContainerDiv.classList.add('button-container');
        buttonContainerDiv.id = `button-container-${i}`;        

        //color square
        let colorSquare = document.createElement('div');
        colorSquare.classList.add('color-square');
        colorSquare.id = `square${i}`;  // Assign unique IDs to color squares (square1, square2, etc.)

        //button
        let button = document.createElement('button');
        button.classList.add('color-button');
        button.id = `color${i}`;  // Assign unique IDs like color1, color2, etc.
        button.textContent = `Color ${i}`;

        // Adding the color square and the button to the button container
        buttonContainerDiv.appendChild(colorSquare);  
        buttonContainerDiv.appendChild(button);    

        const buttons = document.querySelector('.buttons');

        // Adding the button container to the parent buttons div
        buttons.appendChild(buttonContainerDiv);
    }
}



//Initial Conditions:
let playGame=true
let round=1
let score=0

function Start() //Function is called at the end of the code
{
    if(playGame)
    {
        roundOne()
        const buttons = document.querySelectorAll('.color-button');
        buttons.forEach(button => {
            button.addEventListener('click', function(e) //Event listener to all buttons
        {
            let UserGuess=e.target 
            checkGuess(UserGuess)
        });
        });
    }
    else
    {
        gameOver();
    }
}
function checkGuess(UserGuess)//Compares user guess to base color
{
    // Get the background color of the user's guessed button
    let UserGuessColor = rgbToHex(UserGuess.previousElementSibling.style.backgroundColor);
    let buttonContainer=UserGuess.parentNode

    let answer_container = document.querySelector(`.button-container:nth-child(${answer})`);
    if(UserGuessColor.toUpperCase() === baseColor.toUpperCase())
    {
        // alert('Correct!!')
        buttonContainer.style.borderColor="green"; //Applies a green border to the answer

        // Debugging: Log the applied border color
        console.log('Border Color:', buttonContainer.style.borderColor);

        score++;
    }
    else
    {
        // alert('Wrong!');
        buttonContainer.style.borderColor="red"; //Applies red border to clicked button
        answer_container.style.borderColor="green";
    }
    // round++
    setTimeout(()=>{ //Timeout is set to see the correct answer highlighted by green border

        document.getElementById('score').textContent = score;
    if (round === 5)
    {
        gameOver();
    } else {
        round++; //If round is not 5 then it increments otherwise counter remains at 5
        document.getElementById('round').textContent = round; //Displays the round counter
        startNextRound(UserGuess); //Starts new round
    }

    },750)
    


}

function startNextRound(UserGuess)
{
    let buttonContainer=UserGuess.parentNode
    buttonContainer.style.borderColor=""; //Removes border color
    let answer_container = document.querySelector(`.button-container:nth-child(${answer})`);
    answer_container.style.borderColor=""; //Removes border color
    if (round===1) //Calls the round function according to the round counter
    {
        roundOne();
    }
    else if(round===2)
    {
        roundTwo();
    }
    else if(round===3)
    {
        roundThree();
    }
    else if(round===4)
    {
        roundFour();
    }
    else if(round===5)
    {
        roundFive();
    }
}
function gameOver() //After round 5
{
    // Remove all buttons and color squares

    const buttonContainers = document.querySelectorAll('.button-container');

    buttonContainers.forEach(container=>container.remove())

    
    const randomColorDiv=document.querySelector('.random-color')
    
    //Removing the random color div at the top after round 5
    randomColorDiv.style.display = 'none';

    // Create and append the "Play Again" button
    const play_again_button = document.createElement('button');

    //Creating a paragraph to display Score at the end of round 5
    const score_board = document.createElement('p');

    play_again_button.classList.add("play_again_button");
    score_board.classList.add("score_board");

    play_again_button.textContent = "Play Again";
    if(score===5)
    {
        score_board.innerHTML = `Perfect Score!!<br>Score: ${score}`;
        // score_board.textContent=`Perfect Score Score: ${score}`
    }
    else
    {
        score_board.textContent=`Score: ${score}`
    }
    

    //Adding to the main container
    StartOver.appendChild(score_board);
    StartOver.appendChild(play_again_button);

    playGame = false;

    //Event Listener to play again button to start a new game if clicked
    play_again_button.addEventListener('click',NewGame);
}


function NewGame()
{
    score=0 //Initial conditions
    round=1
    //Removing the play again button
    StartOver.removeChild(document.querySelector('.play_again_button'));

    
    // Clear the contents of the button container
    const buttons = document.querySelector('.buttons');
    buttons.innerHTML = '';

    //Displaying the CSS of the random color div which was set to none earlier
    const randomColorDiv = document.querySelector('.random-color');
    randomColorDiv.style.display = 'block';

    //Function called to re-create the div,buttons in the buttons container

    createButtonsAndColorSquares();
    document.getElementById('round').textContent = round;
    document.getElementById('score').textContent = score;

    playGame=true;
    Start();
}

Start(); //To start the game




