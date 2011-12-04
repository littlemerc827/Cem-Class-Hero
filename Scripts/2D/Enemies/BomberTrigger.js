function OnTriggerEnter(col:Collider) {
	if (col.tag == "Projectile") {
		Destroy(col.gameObject);
		//Code to cause damage to enemy
		transform.parent.GetComponent("BomberBase").takeDamage();
		//print(gameObject);
	} else if (col.name == "Player") {
		//Code to cause damage to Player
		col.gameObject.SendMessage ("OnDeath", SendMessageOptions.DontRequireReceiver);
	}
}
