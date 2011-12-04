var health;
var patrolMin;
var patrolMax;
var direction;

function Start() {
	health = 100;
	patrolMin = transform.position.x - 1;
	patrolMax = transform.position.x + 1;
	direction = "left";
}

function Update() {
	if (direction == "left") {
		if (transform.position.x > patrolMin) {
			transform.position.x = transform.position.x - 0.01;
		} else {
			direction = "right";
		}
	} else { //direction == "right"
		if (transform.position.x < patrolMax) {
			transform.position.x = transform.position.x + 0.01;
		} else {
			direction = "left";
		}
	}
}

function takeDamage() {
	//print(health);
	health = health - 50;
	if (health <= 0) {
		die();
	}
}

function die() {
	Destroy(gameObject);
}
