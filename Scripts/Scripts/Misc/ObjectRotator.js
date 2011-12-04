
// objectRotater: Rotates the object to which it is attached.
// Useful for collectable items, etc.

function Update () 
{
	transform.Rotate (45 * Time.deltaTime,45 * Time.deltaTime,45 * Time.deltaTime);
}

function OnBecameVisible()
{
	enabled = true;	
}

function OnBecameInvisible()
{
	enabled = false;	
}