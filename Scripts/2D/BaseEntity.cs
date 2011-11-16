using UnityEngine;
using System.Collections;

public class BaseEntity : MonoBehaviour {

	protected float beHealth = 100.0f;
	public float currentHealth{get{return beHealth;}}
	
	protected float beMaxHealth = 100.0f;
	public float maxHealth{get{return beMaxHealth;}}
	
	public virtual void takeDamage(float amount) {
		beHealth -= amount;
		
		if (beHealth <= 0) {
			die();	
		}
	}
	
	public virtual void healDamage(float amount) {
		beHealth = Mathf.Min(beHealth + amount, beMaxHealth);	
	}
	
	protected virtual void die() {
		Destroy(gameObject);	
	}
}
