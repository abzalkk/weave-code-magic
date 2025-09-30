export type TermCode = '2025FA' | '2025SP' | '2024FA' | '2024SP';

export interface Charge {
  id: string;
  date: string;
  description: string;
  category: 'Tuition' | 'Fees' | 'Housing' | 'Meal Plan' | 'Other';
  amount: number;
}

export interface Payment {
  id: string;
  date: string;
  method: 'Card' | 'ACH' | 'Scholarship' | 'Grant';
  amount: number;
}

export interface TuitionData {
  term: TermCode;
  charges: Charge[];
  payments: Payment[];
}

export interface CourseGrade {
  term: TermCode;
  courseId: string;
  title: string;
  credits: number;
  gradingBasis: 'Letter' | 'Pass/Fail';
  finalGrade: 'A' | 'A-' | 'B+' | 'B' | 'B-' | 'C+' | 'C' | 'C-' | 'D+' | 'D' | 'F' | 'S' | 'U' | 'IP' | 'W';
  instructor: string;
  meeting: string;
}

export interface Profile {
  bannerId: string;
  name: { first: string; last: string; middle?: string };
  dobMasked: string;
  residency: 'In-State' | 'Out-of-State' | 'International';
  contact: {
    email: string;
    phone: string;
    address1: string;
    address2?: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  program: {
    college: string;
    major: string[];
    minor?: string[];
    catalogYear: string;
  };
  holds: {
    code: string;
    description: string;
    impact: 'Info' | 'Advising' | 'Registration';
  }[];
}

export interface DashboardTile {
  id: string;
  title: string;
  description: string;
  icon: string;
  route?: string;
  isPlaceholder: boolean;
  category: 'academic' | 'financial' | 'personal';
}
