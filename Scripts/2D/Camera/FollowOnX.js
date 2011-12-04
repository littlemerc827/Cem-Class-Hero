var target : Transform;
var smoothTime = 0.3;
var vertOff: float = 2.0;
var cameraTrack: float = 1.0;
private var thisTransform : Transform;
private var velocity : Vector2;
private var platformerController : PlatformerController;
private var tracking : boolean = false;

function Start()
{
	thisTransform = transform;
	platformerController = target.GetComponent("PlatformerController");
}

function Update() 
{
	thisTransform.position.x = Mathf.SmoothDamp( thisTransform.position.x, 
	target.position.x, velocity.x, smoothTime);
	
	if(Mathf.Abs(thisTransform.position.y- (target.position.y+vertOff)) > cameraTrack)
	{
		tracking = true;
	}
	
	if(platformerController.movement.hangTime == 0)
	{
		thisTransform.position.y = Mathf.SmoothDamp( thisTransform.position.y, 
		target.position.y+vertOff, velocity.y, smoothTime);
		tracking = false;
	}
	else if(tracking)
	{
		thisTransform.position.y = Mathf.SmoothDamp( thisTransform.position.y, 
		target.position.y+vertOff, velocity.y, smoothTime);
	}
	
}