function OnTriggerEnter(col:Collider) {
	if (col.name == "Player") {
		//Code to cause damage to Player
		col.gameObject.SendMessage ("OnDeath", SendMessageOptions.DontRequireReceiver);
	}
}