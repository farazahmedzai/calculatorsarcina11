export interface PregnancyCalculationInput {
  lastMenstrualPeriod: string; // ISO date string
  cycleLength: number; // days, default 28
  calculationType: 'lmp' | 'conception' | 'ultrasound';
  conceptionDate?: string; // ISO date string for conception method
  ultrasoundDate?: string; // ISO date string
  ultrasoundWeeks?: number; // weeks from ultrasound
  ultrasoundDays?: number; // additional days
}

export interface PregnancyCalculationResult {
  dueDate: string; // ISO date string
  currentWeek: number;
  currentDay: number;
  daysRemaining: number;
  trimester: 1 | 2 | 3;
  conceptionDate: string;
  details: string;
  milestones: PregnancyMilestone[];
}

export interface PregnancyMilestone {
  week: number;
  date: string;
  title: string;
  description: string;
  category: 'development' | 'appointment' | 'symptom' | 'preparation';
}

const PREGNANCY_WEEKS = 40;
const DAYS_IN_WEEK = 7;

export function calculatePregnancy(input: PregnancyCalculationInput): PregnancyCalculationResult {
  const today = new Date();
  let lmpDate: Date;
  let conceptionDate: Date;
  let dueDate: Date;

  switch (input.calculationType) {
    case 'lmp':
      lmpDate = new Date(input.lastMenstrualPeriod);
      conceptionDate = new Date(lmpDate.getTime() + (14 * 24 * 60 * 60 * 1000)); // +14 days
      dueDate = new Date(lmpDate.getTime() + (PREGNANCY_WEEKS * DAYS_IN_WEEK * 24 * 60 * 60 * 1000));
      break;

    case 'conception':
      conceptionDate = new Date(input.conceptionDate!);
      lmpDate = new Date(conceptionDate.getTime() - (14 * 24 * 60 * 60 * 1000)); // -14 days
      dueDate = new Date(conceptionDate.getTime() + ((PREGNANCY_WEEKS - 2) * DAYS_IN_WEEK * 24 * 60 * 60 * 1000));
      break;

    case 'ultrasound':
      const ultrasoundDate = new Date(input.ultrasoundDate!);
      const ultrasoundTotalDays = (input.ultrasoundWeeks! * 7) + (input.ultrasoundDays || 0);
      const daysSinceUltrasound = Math.floor((today.getTime() - ultrasoundDate.getTime()) / (24 * 60 * 60 * 1000));
      const currentTotalDays = ultrasoundTotalDays + daysSinceUltrasound;
      
      lmpDate = new Date(today.getTime() - (currentTotalDays * 24 * 60 * 60 * 1000));
      conceptionDate = new Date(lmpDate.getTime() + (14 * 24 * 60 * 60 * 1000));
      dueDate = new Date(lmpDate.getTime() + (PREGNANCY_WEEKS * DAYS_IN_WEEK * 24 * 60 * 60 * 1000));
      break;

    default:
      throw new Error('Invalid calculation type');
  }

  // Calculate current pregnancy week and day
  const daysSinceLMP = Math.floor((today.getTime() - lmpDate.getTime()) / (24 * 60 * 60 * 1000));
  const currentWeek = Math.floor(daysSinceLMP / 7);
  const currentDay = daysSinceLMP % 7;

  // Calculate days remaining
  const daysRemaining = Math.floor((dueDate.getTime() - today.getTime()) / (24 * 60 * 60 * 1000));

  // Determine trimester
  let trimester: 1 | 2 | 3;
  if (currentWeek <= 12) {
    trimester = 1;
  } else if (currentWeek <= 26) {
    trimester = 2;
  } else {
    trimester = 3;
  }

  // Generate milestones
  const milestones = generatePregnancyMilestones(lmpDate);

  return {
    dueDate: dueDate.toISOString(),
    currentWeek: Math.max(0, currentWeek),
    currentDay: Math.max(0, currentDay),
    daysRemaining: Math.max(0, daysRemaining),
    trimester,
    conceptionDate: conceptionDate.toISOString(),
    details: `Sarcina calculată pe baza ${getCalculationMethodName(input.calculationType)}`,
    milestones: milestones.filter(m => m.week <= 40)
  };
}

function getCalculationMethodName(type: string): string {
  switch (type) {
    case 'lmp': return 'ultimei menstruații';
    case 'conception': return 'datei concepției';
    case 'ultrasound': return 'ecografiei';
    default: return 'datelor introduse';
  }
}

function generatePregnancyMilestones(lmpDate: Date): PregnancyMilestone[] {
  const milestones: PregnancyMilestone[] = [];

  const pregnancyMilestones = [
    { week: 4, title: 'Primul test de sarcină', description: 'Poți face primul test de sarcină', category: 'appointment' as const },
    { week: 6, title: 'Prima ecografie', description: 'Se poate detecta bătăile inimii', category: 'appointment' as const },
    { week: 8, title: 'Prima consultație prenatală', description: 'Programează prima vizită la medic', category: 'appointment' as const },
    { week: 10, title: 'Sfârșitul perioadei critice', description: 'Riscul de avort spontan scade semnificativ', category: 'development' as const },
    { week: 12, title: 'Sfârșitul primului trimestru', description: 'Grețurile încep să se amelioreze', category: 'symptom' as const },
    { week: 16, title: 'Posibilă determinare a sexului', description: 'Se poate determina sexul bebelușului prin ecografie', category: 'development' as const },
    { week: 18, title: 'Ecografia morfologică', description: 'Ecografia detaliată pentru evaluarea dezvoltării', category: 'appointment' as const },
    { week: 20, title: 'Jumătatea sarcinii', description: 'Ai parcurs jumătate din sarcină!', category: 'development' as const },
    { week: 24, title: 'Viabilitatea fetală', description: 'Bebelușul are șanse de supraviețuire în afara uterului', category: 'development' as const },
    { week: 27, title: 'Începutul celui de-al treilea trimestru', description: 'Ultima etapă a sarcinii', category: 'development' as const },
    { week: 28, title: 'Testul pentru diabet gestațional', description: 'Screening pentru diabetul de sarcină', category: 'appointment' as const },
    { week: 32, title: 'Consultații mai frecvente', description: 'Vizitele la medic devin mai frecvente', category: 'appointment' as const },
    { week: 36, title: 'Bebelușul este considerat la termen', description: 'Nașterea poate avea loc oricând', category: 'development' as const },
    { week: 37, title: 'Sarcina la termen', description: 'Sarcina este considerată la termen complet', category: 'development' as const },
    { week: 39, title: 'Pregătirea pentru naștere', description: 'Bagajul pentru maternitate trebuie să fie gata', category: 'preparation' as const },
    { week: 40, title: 'Data calculată a nașterii', description: 'Data estimată pentru naștere', category: 'development' as const }
  ];

  pregnancyMilestones.forEach(milestone => {
    const milestoneDate = new Date(lmpDate.getTime() + (milestone.week * 7 * 24 * 60 * 60 * 1000));
    milestones.push({
      ...milestone,
      date: milestoneDate.toISOString()
    });
  });

  return milestones;
}

export function validatePregnancyInput(input: Partial<PregnancyCalculationInput>): string[] {
  const errors: string[] = [];

  if (!input.calculationType) {
    errors.push('Tipul calculului este obligatoriu');
    return errors;
  }

  switch (input.calculationType) {
    case 'lmp':
      if (!input.lastMenstrualPeriod) {
        errors.push('Data ultimei menstruații este obligatorie');
      } else {
        const lmpDate = new Date(input.lastMenstrualPeriod);
        const today = new Date();
        const maxDate = new Date(today.getTime() - (20 * 7 * 24 * 60 * 60 * 1000)); // 20 weeks ago
        const minDate = new Date(today.getTime() + (10 * 24 * 60 * 60 * 1000)); // 10 days in future
        
        if (lmpDate > minDate) {
          errors.push('Data ultimei menstruații nu poate fi în viitor');
        }
        if (lmpDate < maxDate) {
          errors.push('Data ultimei menstruații nu poate fi mai veche de 10 luni');
        }
      }
      
      if (input.cycleLength && (input.cycleLength < 21 || input.cycleLength > 35)) {
        errors.push('Ciclul menstrual trebuie să fie între 21 și 35 de zile');
      }
      break;

    case 'conception':
      if (!input.conceptionDate) {
        errors.push('Data concepției este obligatorie');
      } else {
        const conceptionDate = new Date(input.conceptionDate);
        const today = new Date();
        const maxDate = new Date(today.getTime() - (18 * 7 * 24 * 60 * 60 * 1000)); // 18 weeks ago
        const minDate = new Date(today.getTime() + (7 * 24 * 60 * 60 * 1000)); // 1 week in future
        
        if (conceptionDate > minDate) {
          errors.push('Data concepției nu poate fi în viitor');
        }
        if (conceptionDate < maxDate) {
          errors.push('Data concepției nu poate fi mai veche de 9 luni');
        }
      }
      break;

    case 'ultrasound':
      if (!input.ultrasoundDate) {
        errors.push('Data ecografiei este obligatorie');
      }
      if (!input.ultrasoundWeeks || input.ultrasoundWeeks < 4 || input.ultrasoundWeeks > 42) {
        errors.push('Săptămânile de sarcină trebuie să fie între 4 și 42');
      }
      if (input.ultrasoundDays && (input.ultrasoundDays < 0 || input.ultrasoundDays > 6)) {
        errors.push('Zilele suplimentare trebuie să fie între 0 și 6');
      }
      break;
  }

  return errors;
}

export function getWeekInfo(week: number): { title: string; description: string; size: string } {
  const weekInfo: Record<number, { title: string; description: string; size: string }> = {
    4: { title: 'Săptămâna 4', description: 'Implantarea în uter', size: 'mărimea unui grăunte de mac' },
    8: { title: 'Săptămâna 8', description: 'Organele se formează', size: 'mărimea unei zmeură' },
    12: { title: 'Săptămâna 12', description: 'Sfârșitul primului trimestru', size: 'mărimea unei prune' },
    16: { title: 'Săptămâna 16', description: 'Se poate determina sexul', size: 'mărimea unui avocado' },
    20: { title: 'Săptămâna 20', description: 'Jumătatea sarcinii', size: 'mărimea unei banane' },
    24: { title: 'Săptămâna 24', description: 'Viabilitate în afara uterului', size: 'mărimea unui porumb' },
    28: { title: 'Săptămâna 28', description: 'Începutul celui de-al treilea trimestru', size: 'mărimea unui vinete' },
    32: { title: 'Săptămâna 32', description: 'Creșterea în greutate', size: 'mărimea unui nap' },
    36: { title: 'Săptămâna 36', description: 'Considerat la termen', size: 'mărimea unei salate romane' },
    40: { title: 'Săptămâna 40', description: 'Data calculată a nașterii', size: 'mărimea unui pepene galben mic' }
  };

  return weekInfo[week] || { 
    title: `Săptămâna ${week}`, 
    description: 'Dezvoltarea continuă', 
    size: 'în creștere' 
  };
}