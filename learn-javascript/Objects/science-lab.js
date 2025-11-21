/* Task 1: Compile Participant Details with Shorthand Property Names */
const name = "Dr. Ada";
const age = 34;
const studyField = "Quantum Computing";

const participant = {
	name,
	age,
	studyField
};

console.log(`Participant: ${name}, Age: ${age}, Study Field: ${studyField}`);

/* Task 2: Implement a Shorthand Function for Participant Info */
const participantCopy = {
	...participant,
	displayInfo ()
	{
		console.log(`Participant: ${this.name}, Age: ${this.age}, Study Field: ${this.studyField}`);
	}
};

participantCopy.displayInfo();

/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
const participantAnotherCopy = {
	...participant,
	displayInfo: () =>
	{
		console.log(`Participant: ${this.name}, Age: ${this.age}, Study Field: ${this.studyField}`);
	}
};

participantAnotherCopy.displayInfo();

/*
 * Observations:
 * The arrow function does not have its own `this` context, so it cannot access the participant object properties using `this`.
 * Instead, it inherits `this` from the enclosing scope, which in this case is the global scope, leading to undefined values for the properties.
 */

/* Task 4: Using Computed Property Names */
function updateParticipantInfo (participant, key, value)
{
	return {
		...participant,
		[key]: value
	};
}

const updatedParticipant = updateParticipantInfo(participant, "projectTitle", "Quantum Computing Study");
console.log(updatedParticipant);
