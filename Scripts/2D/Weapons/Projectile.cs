using UnityEngine;
using System.Collections;
using System;

[RequireComponent(typeof(SphereCollider))]
public class Projectile : MonoBehaviour {

	protected float pSpeed = 5.0f;
	public float speed{get{return pSpeed;}}
	
	protected float pMaxSpeed = 10.0f;
	public float maxSpeed{get{return pMaxSpeed;}}
	
	protected Vector3 pMovementDirection;
	public Vector3 movementDirection{get{return pMovementDirection;}}
	
	protected float pAcceleration = 1.0f;
	public float acceleration{get{return pAcceleration;}}
	
	protected float pDamage = 10.0f;
	public float damage{get{return pDamage;}}
	
	protected float pLifeSpan = 10.0f;
	public float lifeSpan{get{return pLifeSpan;}}
	
	protected Type pShooter;
	public Type shooter{get{return pShooter;}}
	
	// Use this for initialization
	void Start () {
	
		pMovementDirection = transform.forward;
		gameObject.GetComponent<SphereCollider>().isTrigger = true;
		
		StartCoroutine(kill());
		
	}
	
	// Update is called once per frame
	void Update () {
	
		transform.position += (pMovementDirection * pSpeed * Time.deltaTime);
		
		if (pSpeed < pMaxSpeed) {
			pSpeed += pAcceleration * Time.deltaTime;
		}
		
		if (!renderer.isVisible) {
			Destroy(gameObject);	
		}
		
	}
	
	protected IEnumerator kill() {
		yield return new WaitForSeconds(pLifeSpan);
		Destroy(gameObject);
	}
	
	public void setShooter(BaseEntity shooter) {
		pShooter = shooter.GetType();	
	}
	
	void OnTriggerEnter(Collider other) {
		BaseEntity otherObject = other.gameObject.GetComponent<BaseEntity>();
		
		if(otherObject != null) {
			if (otherObject.GetType() != pShooter) {
				otherObject.takeDamage(pDamage);
				Destroy(gameObject);
			}
		}
	}
	
}
