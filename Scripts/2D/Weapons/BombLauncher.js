var projectile:Rigidbody;
var speed = 1;
var lastShot = -1.0f;

function Update () {
	if ((Time.time - lastShot) < 4) {
			return;	
	} else {
		lastShot = Time.time;
		clone = Instantiate(projectile, transform.position, transform.rotation);
		clone.velocity = transform.TransformDirection(Vector3(0,4,speed));
		
		Destroy(clone.gameObject,2);
	}

}