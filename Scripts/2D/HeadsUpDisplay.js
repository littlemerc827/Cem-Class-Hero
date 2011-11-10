

private var marginLeft : double;
private var marginTop : double;

public var BackButton : GUIStyle;
public var ForwardButton : GUIStyle;
public var ThrowButton : GUIStyle;
public var JumpButton : GUIStyle;

var LifeTexture : Texture;

function Awake() {
	marginLeft = Screen.width - 5;
	marginTop = Screen.height - 5;
}

function Update () {
}

function OnGUI() {

	// Backward Arrow Button
	if ( GUI.Button(Rect(20,Screen.height - 90,80,60), null, BackButton)) {
		// move back
	}
	// Forward Arrow Button
	if ( GUI.Button(Rect(110,Screen.height - 90,80,60), null, ForwardButton)) {
		// move forward
	}
	// special button
	if ( GUI.Button(Rect(Screen.width - 200,Screen.height - 90,80,60), null,  ThrowButton )) {
		// move forward
	}
	// jump button
	if ( GUI.Button(Rect(Screen.width - 110,Screen.height - 90,80,60), null, JumpButton)) {
		// move forward
	}
	
	
	// Life Status
	GUI.DrawTexture(Rect(Screen.width - marginLeft, Screen.height - marginTop, 280, 100),LifeTexture,ScaleMode.ScaleToFit, true,10.0f);
}