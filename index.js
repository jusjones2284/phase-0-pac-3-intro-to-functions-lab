function shout(string){
    return string.toUpperCase();



}

function whisper(string){
    return string.toLowerCase();
}


function logShout(string){
    console.log(string);
    console.log(string.toUpperCase());

}

function logWhisper(string){
    console.log(string);
    console.log(string.toLowerCase());

}
function sayHiToHeadphonedRoommate(string){
    const noAnswer = "I can't hear you!";
    const yesAnswer = "YES INDEED!";
    const loveAnswer = "I would love to!";
    if (string.toLowerCase(string) === string) {
        return noAnswer;
    }
    else if (string.toUpperCase(string) === string)
        return(yesAnswer);
        else if ("Let\'s have dinner together!" === string) {
            return loveAnswer
        }
}