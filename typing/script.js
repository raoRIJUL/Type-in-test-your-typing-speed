const h=document.querySelector("h2");
const msg=document.querySelector(".msg");
const textarea=document.querySelector("#textarea");
const btn=document.querySelector(".btn");

const arr=["The sun is shining brightly today.",
"She said, 'I'll be there by 3 PM.'",
"The cat meowed softly in the corner.",
"He exclaimed, 'What a fantastic idea!'",
"After a long day, I sighed, 'Finally, some relaxation.'",
"They chanted, 'Go team, go!'",
"The teacher reminded us, 'Homework is due tomorrow.'",
"In her journal, she wrote, 'Today was full of surprises.'",
"He whispered, 'I love you,' as they embraced.",
"The sign read, 'Keep off the grass.'",
"The rain pattered on the windowpane.",
"She laughed and said, 'You're always making me smile.'",
"The movie started with the line, 'Once upon a time...'",
"He looked around and commented, 'What a beautiful view!'",
"The old man advised, 'Patience is a virtue.'",
"'Where are you going?' she asked with curiosity.",
"The book began with the sentence, 'It was a dark and stormy night.'",
"They sang in unison, 'Happy birthday to you!'",
"The coach yelled, 'Push harder, you've got this!'",
"'Can you pass me the salt?' he requested during dinner."]
let startTime;
let endTime;
function playGame(){
    let random = Math.floor(Math.random()*arr.length);
     
    msg.innerHTML=arr[random];
    
    const date=new Date();
    startTime=date.getTime();
}

function endGame(){
    const date=new Date();
    endTime=date.getTime();
    let t=endTime-startTime;
    
    
    let text=textarea.value;
    // console.log(text);
    const ar1=text.split(" ");
    
    // console.log(ar1);
    if(ar1[0]==''){
        msg.innerHTML="you donot type any word";
    }
    else{
        let str1=msg.innerHTML;
        const ar2=str1.split(" ");
        let cnt=0;
        // console.log(ar1);
        ar1.forEach(function(item,index){
            if(item==ar2[index]){
                cnt++;
                console.log(item);
            } 
        })
    // console.log("fdsfg");
    // console.log(t/1000);
    const accuracy=Math.round((cnt/ar1.length)*100);
    msg.innerHTML=" you write "+Math.round(ar1.length/(t/1000)*60) + " words per minute "+ "with "+accuracy+" perrcent accuracy";
}
}

btn.addEventListener('click',()=>{
    if(btn.innerHTML=="Start"){
        // console.log(textarea.innerHTML);
        document.getElementById("textarea").value="";
        textarea.ariaDisabled=false;
        btn.innerHTML="Done";
        playGame();
    }
    else{
        textarea.ariaDisabled=true;
        btn.innerHTML="Start";
        endGame();
    }
})