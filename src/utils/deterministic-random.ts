/**
 * @file: deterministic-random.ts
 * @responsibility: deterministic pseudo-random number generator for consistent animations
 * @exports: deterministicRandom
 * @imports: none
 * @layer: utils
 */

/**
 * Creates a deterministic pseudo-random number generator
 * Uses a simple linear congruential generator (LCG) algorithm
 * @param seed - Initial seed value
 * @returns A function that generates deterministic random numbers between 0 and 1
 */
export function createDeterministicRandom(seed: number) {
  let currentSeed = seed;
  
  return function random(): number {
    // LCG parameters (from Numerical Recipes)
    const a = 1664525;
    const c = 1013904223;
    const m = Math.pow(2, 32);
    
    currentSeed = (a * currentSeed + c) % m;
    return currentSeed / m;
  };
}

/**
 * Default deterministic random function with a fixed seed
 * This ensures consistent results across all component instances
 */
export const deterministicRandom = createDeterministicRandom(12345);