/*
Using this script from here on out to handle projectiles.  Takes rigid body physics
into account, unlike the previously used script, Projectile.cs.  This pretty much 
follows the same methodology but it's a lot simpler.  This script is attached to 
the ProjectileLauncher prefab.  Attach the prefab to Player, zero out the position,
and then set the Dodgeball prefab (or any other projectile prefab) as the value for
the Projectile variable in the Inspector view.
*/

var projectile:Rigidbody;
var speed = 5;
var lastShot = -1.0f;

function Update () {
	if ((Time.time - lastShot) < 0.5) {
			return;	
	}

	if (Input.GetButton("Fire1") && !(Input.GetKey("mouse 0"))) {
		lastShot = Time.time;
		clone = Instantiate(projectile, transform.position, transform.rotation);
		clone.velocity = transform.TransformDirection(Vector3(0,1.5,speed));
		
		Destroy(clone.gameObject,3);
	}

}

function GUIShot() {
if ((Time.time - lastShot) < 0.5) {
			return;	
	}

	
		lastShot = Time.time;
		clone = Instantiate(projectile, transform.position, transform.rotation);
		clone.velocity = transform.TransformDirection(Vector3(0,1.5,speed));
		
		Destroy(clone.gameObject,3);
	

}