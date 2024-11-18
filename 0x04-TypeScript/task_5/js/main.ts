// Define MajorCredits and MinorCredits interfaces
interface MajorCredits {
  credits: number;
  brand: "Major";
}

interface MinorCredits {
  credits: number;
  brand: "Minor";
}

// Define sumMajorCredits function
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, brand: "Major" };
}

// Define sumMinorCredits function
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, brand: "Minor" };
}

// Example usage
const major1: MajorCredits = { credits: 30, brand: "Major" };
const major2: MajorCredits = { credits: 40, brand: "Major" };
const minor1: MinorCredits = { credits: 10, brand: "Minor" };
const minor2: MinorCredits = { credits: 20, brand: "Minor" };

const totalMajorCredits = sumMajorCredits(major1, major2);
const totalMinorCredits = sumMinorCredits(minor1, minor2);

console.log("Total Major Credits:", totalMajorCredits.credits); // Output: 70
console.log("Total Minor Credits:", totalMinorCredits.credits); // Output: 30

