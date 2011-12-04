

function Start () {
	animation.Stop();
	animation.wrapMode = WrapMode.Loop;
}

function Update () {
	animation.CrossFade ("move", 0.5);
}
