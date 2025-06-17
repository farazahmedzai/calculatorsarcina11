export interface PensionCalculationInput {
  currentAge: number;
  monthlySalary: number;
  contributionYears: number;
  pensionType: string;
}

export interface PensionCalculationResult {
  amount: number;
  details: string;
  breakdown: {
    basePension: number;
    contributionBonus: number;
    penalties: number;
  };
}

export function calculatePension(input: PensionCalculationInput): PensionCalculationResult {
  const { currentAge, monthlySalary, contributionYears, pensionType } = input;
  
  // Romanian pension calculation logic based on 2024 regulations
  const averageGrossSalary = 6000; // RON - approximate national average
  const pensionPoint = 87.5; // RON - 2024 pension point value
  const minContributionYears = 15;
  const standardRetirementAge = 65;
  
  // Calculate pension points based on salary ratio
  const salaryRatio = monthlySalary / averageGrossSalary;
  const yearlyPoints = Math.min(salaryRatio, 5); // Max 5 points per year
  const totalPoints = yearlyPoints * contributionYears;
  
  // Base pension calculation
  let basePension = totalPoints * pensionPoint;
  
  // Apply pension type modifiers
  let penalties = 0;
  let contributionBonus = 0;
  
  switch (pensionType) {
    case "Pensie anticipată parțială":
      // Early retirement penalty: 0.5% per month before standard age
      const monthsEarly = (standardRetirementAge - currentAge) * 12;
      penalties = basePension * (monthsEarly * 0.005);
      basePension -= penalties;
      break;
      
    case "Pensie anticipată completă":
      // Full early retirement penalty: 0.75% per month before standard age
      const monthsEarlyFull = (standardRetirementAge - currentAge) * 12;
      penalties = basePension * (monthsEarlyFull * 0.0075);
      basePension -= penalties;
      break;
      
    case "Pensie pentru limită de vârstă":
      // Standard pension, no penalties
      // Bonus for extra contribution years beyond minimum
      if (contributionYears > minContributionYears) {
        contributionBonus = basePension * ((contributionYears - minContributionYears) * 0.01);
        basePension += contributionBonus;
      }
      break;
  }
  
  // Ensure minimum pension
  const minimumPension = 1000; // RON
  const finalAmount = Math.max(basePension, minimumPension);
  
  return {
    amount: Math.round(finalAmount),
    details: `Estimare bazată pe contribuțiile actuale și legislația din 2024`,
    breakdown: {
      basePension: Math.round(basePension),
      contributionBonus: Math.round(contributionBonus),
      penalties: Math.round(penalties),
    }
  };
}

export function validatePensionInput(input: Partial<PensionCalculationInput>): string[] {
  const errors: string[] = [];
  
  if (!input.currentAge || input.currentAge < 18 || input.currentAge > 80) {
    errors.push("Vârsta trebuie să fie între 18 și 80 de ani");
  }
  
  if (!input.monthlySalary || input.monthlySalary < 1000 || input.monthlySalary > 50000) {
    errors.push("Salariul lunar trebuie să fie între 1.000 și 50.000 RON");
  }
  
  if (!input.contributionYears || input.contributionYears < 0 || input.contributionYears > 50) {
    errors.push("Stagiul de cotizare trebuie să fie între 0 și 50 de ani");
  }
  
  if (!input.pensionType) {
    errors.push("Tipul pensiei este obligatoriu");
  }
  
  return errors;
}
