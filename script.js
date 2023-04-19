function viewText1(){
	let extend1 = document.getElementById("para-extend1");
	let seeMore1 = document.getElementById("seeMore1");

	if(extend1.classList.contains("hidden")){
		extend1.classList.remove("hidden");
		seeMore1.innerHTML = "See Less...";
	}else{
		extend1.classList.add("hidden");
		seeMore1.innerHTML = "See More...";
	}

}

function viewText2(){
	let extend2 = document.getElementById("para-extend2");
	let seeMore2 = document.getElementById("seeMore2");

	if(extend2.classList.contains("hidden")){
		extend2.classList.remove("hidden");
		seeMore2.innerHTML = "See Less...";
	}else{
		extend2.classList.add("hidden");
		seeMore2.innerHTML = "See More...";
	}

}

function showGrade(){
	let resultDiv = document.getElementById("result");
	let q1 = document.getElementById("q1");
	let q2 = document.getElementById("q2");
	let q3 = document.getElementById("q3");
	let q4 = document.getElementById("q4");
	let a1 = document.getElementById("a1");
	let a2 = document.getElementById("a2");
	let a3 = document.getElementById("a3");
	let a4 = document.getElementById("a4");
	let correct=0;

	resultDiv.classList.remove("hidden");
	
	if (document.getElementById("sel-one").value == "an1"){
		q1.innerHTML += "correct";
		correct=correct+1;
	}else{
		q1.innerHTML += "incorrect";
	}

	if(document.getElementById("sel-two").value == "an2"){
		q2.innerHTML += "correct";
		correct=correct+1;
	}else{
		q2.innerHTML += "incorrect";
	}

	if(document.getElementById("sel-three").value == "an3"){
		q3.innerHTML += "correct";
		correct=correct+1;
	}else{
		q3.innerHTML += "incorrect";
	}

	if(document.getElementById("sel-four").value == "an4"){
		q4.innerHTML += "correct";
		correct=correct+1;
	}else{
		q4.innerHTML += "incorrect";
	}

	var score="Grade: " + correct+ "/4";
	document.getElementById("grade").innerHTML += score;
	
}

setInterval(changeSlide, 2000);

function changeSlide(){
	if(!document.getElementById("pic1").classList.contains("hidden")){
		pic1.classList.add("hidden");
		pic2.classList.remove("hidden");
	}
	else if(!document.getElementById("pic2").classList.contains("hidden")){
		pic2.classList.add("hidden");
		pic3.classList.remove("hidden");
	}
	else if(!document.getElementById("pic3").classList.contains("hidden")){
		pic3.classList.add("hidden");
		pic4.classList.remove("hidden");
	}
	else{
		pic4.classList.add("hidden");
		pic1.classList.remove("hidden");	
	}
}




























