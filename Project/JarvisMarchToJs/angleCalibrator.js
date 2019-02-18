async function startProgram() {
	// Write code here
	//await delay(0.33);
setBackLed(255);  // Bright
	setStabilization(true);
	await calibrateCompass();
	setCompassDirection(0);
	await delay(0.333);
	//resetAim();
	//setHeading(-72);
	//setSpeed(100);
	//resetAim();
	//await roll(0, 50, 2)
}

