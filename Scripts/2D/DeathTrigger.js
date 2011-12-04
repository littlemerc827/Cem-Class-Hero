//PlayerCharacters entering the area have their jump height set to a certain ammount.
function OnTriggerEnter (other : Collider) {
	other.gameObject.SendMessage ("OnDeath", SendMessageOptions.DontRequireReceiver);

}

// Helper function: Draw an icon in the sceneview so this object gets easier to pick
function OnDrawGizmos () {
	Gizmos.DrawIcon (transform.position, "Skull And Crossbones Icon.tif");
}
