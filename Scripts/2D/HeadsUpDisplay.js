

private var marginLeft : double;
private var marginTop : double;

public var BackButton : GUIStyle;
public var ForwardButton : GUIStyle;
public var ThrowButton : GUIStyle;
public var JumpButton : GUIStyle;

// Holds movement value and needs to be available to PlatformerController
var h : int;
var jump : boolean;

var LifeTexture : Texture;

function Awake() {
	marginLeft = Screen.width - 5;
	marginTop = Screen.height - 5;
}

function Update () {
}

function OnGUI() {

	var forward : boolean;
	var backward : boolean;
	
	// Display the buttons and poll their pushed status
	backward = GUI.RepeatButton(Rect(20,Screen.height - 90,80,60), null, BackButton);
	forward = GUI.RepeatButton(Rect(110,Screen.height - 90,80,60), null, ForwardButton);
	jump = GUI.RepeatButton(Rect(Screen.width - 110,Screen.height - 90,80,60), null, JumpButton);
	

	// Backward Arrow Button
	if ( backward ) {
		h = -1;
	}
	// Forward Arrow Button
	else if ( forward ) {
		h = 1;
	}
	else{
		h = 0;
		
		// For testing purposes, allow the keyboard to also control movement
		if (Input.GetAxisRaw ("Horizontal") != 0)
			h = Input.GetAxisRaw ("Horizontal");
	}
	
	// special button
	if ( GUI.Button(Rect(Screen.width - 200,Screen.height - 90,80,60), null,  ThrowButton )) {
		// move forward
		var shooter = GameObject.FindWithTag("Projectile");
		shooter.GetComponent(ShootingScript).GUIShot();
	}
	
	// For debug purposes, make jump also respond to the jump button
	if (Input.GetButton("Jump") == true)
		jump = true;

	
	// Life Status
	GUI.DrawTexture(Rect(Screen.width - marginLeft, Screen.height - marginTop, 280, 100),LifeTexture,ScaleMode.ScaleToFit, true,10.0f);
}