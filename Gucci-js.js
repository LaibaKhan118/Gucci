//NavBar - On scroll
window.addEventListener("scroll", function(){
	var header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 300);
})

window.addEventListener("scroll", function(){
	var Header = document.querySelector(".for-small-devices");
	Header.classList.toggle("sticky", window.scrollY > 200);
})

	
	// JS For Categories Side-Menu

function openmenu() {
	document.getElementById("menu-list").style.display="block";
	document.getElementById("menu-btn").style.display="none";
	document.getElementById("body").classList.add("disable-scroll");
	document.getElementById("for-small-devices").classList.add("menu-scroll");
}
function closemenu() {
	document.getElementById("menu-list").style.display="none";
	document.getElementById("menu-btn").style.display="block";
	document.getElementById("body").classList.remove("disable-scroll");
	document.getElementById("for-small-devices").classList.remove("menu-scroll");
}


