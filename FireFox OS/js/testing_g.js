
function onBodyLoad(){
	//onDeviceReady();
	document.addEventListener("deviceready",onDeviceReady,false);

}

function onDeviceReady(){
	
	$("#resultado").html("PhoneGap en marcha");
}