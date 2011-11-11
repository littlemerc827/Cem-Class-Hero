var text : String;
private var showMessage = false;
var style : GUIStyle;

function OnGUI () {
	style.normal.textColor = Color.blue;
	style.wordWrap = true;
	if(showMessage){
		text = GUI.TextField (Rect ( (Screen.width-100)/2, (Screen.height-30)/2, 100, 30), text, style);
	}

}

function OnTriggerEnter(){
   showMessage = true;
}

function OnTriggerExit(){
   showMessage = false;
}