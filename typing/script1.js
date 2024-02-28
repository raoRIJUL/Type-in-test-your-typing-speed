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
    let x=0;
    textarea.addEventListener('click',()=>{
        if(x==0){
            console.log("your time begins "); //i have to comment this latter
            const date=new Date();
            startTime=date.getTime();
            x++;
        }
    })
    
    console.log(arr[random]);
    if(document.getElementById("textarea").value==arr[random]){
        textarea.ariaDisabled=true;
        btn.innerHTML="Start";
        endGame();
    }
    // let y=
    document.onkeydown = function (e) {
        if(e.key=="Enter"){
            let text1=textarea.value;
            const arr1=text1.split(" ");
            let strr1=msg.innerHTML;
            const arr2=strr1.split(" ");
            let cnt1=0;
          console.log("lenght is : ",arr1.length); 
            arr1.forEach(function(item,index){
                if(item==arr2[index]){
                    cnt1++;
                    console.log(index);
                    console.log(item);
                } 
            })
            if(cnt1==arr2.length) {
                textarea.ariaDisabled=true;
                btn.innerHTML="Start";
                endGame();
            }
        }
    };
}

function endGame(){
    const date=new Date();
    endTime=date.getTime();
    let t=endTime-startTime;
    let text=textarea.value;
    
    const ar1=text.split(" ");
    if(ar1[0]==''){
        msg.innerHTML="you donot type any word";
    }
    else{
        let str1=msg.innerHTML;
        const ar2=str1.split(" ");
        let cnt=0;
       
        ar1.forEach(function(item,index){
            if(item==ar2[index]){
                cnt++;
                console.log(item); //comment krna h
            } 
        })
    console.log(t/1000);//i have to comment this latter
    const accuracy=Math.round((cnt/ar1.length)*100);
    msg.innerHTML=" you write "+Math.round(ar1.length/(t/1000)*60) + " words per minute "+ "with "+accuracy+" perrcent accuracy";
    // document.getElementById("textarea").value+=" Game over!";
}
}

btn.addEventListener('click',()=>{
    if(btn.innerHTML=="Start"){
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