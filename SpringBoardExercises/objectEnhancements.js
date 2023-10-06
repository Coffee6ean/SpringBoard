function createAnimal(species, verb, noise) {
    return {
        species, 
        [verb]: noise
    }
} 

const d = createAnimal("dog", "bark", "Woooof!");
const s = createAnimal("sheep", "bleet", "BAAAAaaaa");