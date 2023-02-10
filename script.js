const qouteText=document.querySelector(".qoute"),
authorName=document.querySelector(".author .name"), 
qouteBtn=document.querySelector("button"),
soundBtn=document.querySelector(".sound"),
copyBtn=document.querySelector(".copy"),
twitterBtn=document.querySelector(".twitter");

function randomQoute(){
	qouteBtn.classList.add("Loading");
	qouteBtn.innerText="Loading Qoute...";
 var Qoutes=["it always seems imposible until its done. ","positive thinking will let you do everythng better than negative thinking will.", 
 "Many life's failures are people who didnt realize how close they were to success when they gave up.",
 "Failure doesnt mean you are a failure, it means you havent succedded yet."];
 var authors=["Bernard shaw","Ayn Rand", "albert Enestine","Nelson Mandella"];
 var randomQouteNo=Math.floor(Math.random()*Qoutes.length);
 var randomAuthorNo=Math.floor(Math.random()*authors.length);

 var randomQoute=Qoutes[randomQouteNo];
 var randomAuthor=authors[randomAuthorNo];
 qouteText.innerHTML=randomQoute;
 authorName.innerHTML=randomAuthor;

 qouteBtn.innerText="New Qoute";
 qouteBtn.classList.remove("Loading");
}

soundBtn.addEventListener("click",()=>{
	let utterance = new SpeechSynthesisUtterance(`${qouteText.innerHTML} by ${authorName.innerHTML}`);
    speechSynthesis.speak(utterance);
	
});


copyBtn.addEventListener("click",()=>{
	navigator.clipboard.writeText(qouteText.innerHTML);
});


twitterBtn.addEventListener("click",()=>{
	let tweetUrl=`https://twitter.com/intent/tweet?url=${qouteText.innerHTML}`;
	window.open(tweetUrl,"_blank")
});

qouteBtn.addEventListener("click",randomQoute);

