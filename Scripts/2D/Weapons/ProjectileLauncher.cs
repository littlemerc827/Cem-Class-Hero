using UnityEngine;
using System.Collections;

public class ProjectileLauncher : MonoBehaviour {
	
	public Projectile dodgeballType;
	public float fireRate = 1.0f;
	public bool lockRotation;
	
	private Quaternion startingRotation;
	private BaseEntity plOwner;
	private float lastShot = -1.0f;
	
	void OnDrawGizmos() {
		Gizmos.DrawSphere(transform.position, 0.02f);
		Gizmos.DrawLine(transform.position, transform.position + transform.right * 0.5f);
	}
	
	// Use this for initialization
	void Start () {
	
		if (dodgeballType == null) {
			Debug.LogError("dodgeballType is set to null");
			Debug.Break();
		}
		
		startingRotation = transform.rotation;
		plOwner = transform.parent.gameObject.GetComponent<BaseEntity>();
		
	}
	
	void Update() {
		if ((Time.time - lastShot) < 0.5) {
			return;	
		}
		if (Input.GetButton("Fire1")) {
					lastShot = Time.time;
					Projectile newDodgeball = (Projectile) GameObject.Instantiate(dodgeballType, transform.position, transform.rotation);
					newDodgeball.setShooter(plOwner);
		}
	}
}
