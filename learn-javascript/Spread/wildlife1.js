/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of animal names.
function sightings(...animals) {
  console.log(`Animals in the park: ${animals}`);
}
/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.
const allHabitats = [...forestHabitats, ...savannahHabitats];
console.log(`This is all habitats in the sancutary!: ${allHabitats}`);
/* Task 3: Update Conservation Status */
const rhinoStatus = {
  population: 500,
  status: "Endangered",
};
// TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.
const updatedRhinoStatus = {
  ...rhinoStatus,
  population: 2000,
  status: "thriving",
  habitat: `${savannahHabitats}`,
  diet: "veggie and stuff",
};
console.log(`Updated Rhino Status: ${updatedRhinoStatus}`);
/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
  name: "Leo",
  age: 5,
  species: "Lion",
};
// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.
/*
 * Observations: The object was copied and the new genetics diversity information was adde to the lion profile.
 * TODO: Explain here. The original will update and so will the new copy because the object referenced in the copy has changed.
 */
const lionGeneticProfile = { ...lionProfile, genetics: "good to go" };
console.log(lionGeneticProfile);
/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
  waterQuality: "Good",
  foodSupply: {
    herbivores: "Abundant",
    carnivores: "Sufficient",
  },
};

// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect both the original and the copied object.
/*
 * Observations: Everything from the original ecosystem object was copied and the the original stayed the same.
 * TODO: Explain here. When i copied the object it only changed the updated copy with the new information i provided leaving the original unaltered.
 */
const updatedEcosystemHealth = {
  ...ecosystemHealth,
  foodSupply: {
    herbivores: "Over Abundant",
    carnivores: "More than Sufficient",
  },
};
console.log(updatedEcosystemHealth);
