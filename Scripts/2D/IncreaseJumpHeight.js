//Attach this script to jetpack upgrade triggers

function OnTriggerEnter(col:Collider) {
	if (col.tag == "Player") {
		//Increase player's extra height on jump
		col.GetComponent(PlatformerController).IncreaseJump();
		
		//Destroy the corresponding collider so that player cannot
		//continually increase jump height
		Destroy(transform.parent.gameObject);
	}
}