import { TuitionData, CourseGrade, Profile, DashboardTile } from '@/types';

export const tuitionData: TuitionData[] = [
  {
    term: '2025FA',
    charges: [
      { id: 'c1', date: '2025-08-15', description: 'In-State Tuition', category: 'Tuition', amount: 3100.50 },
      { id: 'c2', date: '2025-08-15', description: 'Activity & Service Fee', category: 'Fees', amount: 86.42 },
      { id: 'c3', date: '2025-08-15', description: 'Health Fee', category: 'Fees', amount: 89.67 },
      { id: 'c4', date: '2025-08-15', description: 'Athletic Fee', category: 'Fees', amount: 72.18 },
      { id: 'c5', date: '2025-08-20', description: 'Campus Housing - Double Room', category: 'Housing', amount: 2850.00 },
      { id: 'c6', date: '2025-08-20', description: 'Meal Plan - Block 150', category: 'Meal Plan', amount: 1640.00 },
    ],
    payments: [
      { id: 'p1', date: '2025-08-10', method: 'Scholarship', amount: -2500.00 },
      { id: 'p2', date: '2025-08-25', method: 'Card', amount: -3000.00 },
    ],
  },
  {
    term: '2025SP',
    charges: [
      { id: 'c7', date: '2025-01-10', description: 'In-State Tuition', category: 'Tuition', amount: 3100.50 },
      { id: 'c8', date: '2025-01-10', description: 'Activity & Service Fee', category: 'Fees', amount: 86.42 },
      { id: 'c9', date: '2025-01-10', description: 'Health Fee', category: 'Fees', amount: 89.67 },
      { id: 'c10', date: '2025-01-10', description: 'Technology Fee', category: 'Fees', amount: 45.00 },
      { id: 'c11', date: '2025-01-15', description: 'Campus Housing - Double Room', category: 'Housing', amount: 2850.00 },
      { id: 'c12', date: '2025-01-15', description: 'Meal Plan - Block 200', category: 'Meal Plan', amount: 1890.00 },
    ],
    payments: [
      { id: 'p3', date: '2025-01-05', method: 'Grant', amount: -2000.00 },
      { id: 'p4', date: '2025-01-20', method: 'ACH', amount: -4000.00 },
    ],
  },
  {
    term: '2024FA',
    charges: [
      { id: 'c13', date: '2024-08-15', description: 'In-State Tuition', category: 'Tuition', amount: 2985.75 },
      { id: 'c14', date: '2024-08-15', description: 'Activity & Service Fee', category: 'Fees', amount: 83.21 },
      { id: 'c15', date: '2024-08-15', description: 'Health Fee', category: 'Fees', amount: 86.45 },
      { id: 'c16', date: '2024-08-20', description: 'Campus Housing - Double Room', category: 'Housing', amount: 2750.00 },
    ],
    payments: [
      { id: 'p5', date: '2024-08-10', method: 'Scholarship', amount: -2500.00 },
      { id: 'p6', date: '2024-08-28', method: 'Card', amount: -2000.00 },
    ],
  },
  {
    term: '2024SP',
    charges: [
      { id: 'c17', date: '2024-01-12', description: 'In-State Tuition', category: 'Tuition', amount: 2985.75 },
      { id: 'c18', date: '2024-01-12', description: 'Activity & Service Fee', category: 'Fees', amount: 83.21 },
      { id: 'c19', date: '2024-01-12', description: 'Health Fee', category: 'Fees', amount: 86.45 },
    ],
    payments: [
      { id: 'p7', date: '2024-01-08', method: 'Grant', amount: -1800.00 },
      { id: 'p8', date: '2024-01-25', method: 'ACH', amount: -1500.00 },
    ],
  },
];

export const courseGrades: CourseGrade[] = [
  // 2025 Fall
  { term: '2025FA', courseId: 'COP4710', title: 'Database Design', credits: 3, gradingBasis: 'Letter', finalGrade: 'A', instructor: 'Dr. Smith', meeting: 'MWF 10:00-10:50 AM' },
  { term: '2025FA', courseId: 'CEN4072', title: 'Software Engineering', credits: 3, gradingBasis: 'Letter', finalGrade: 'A-', instructor: 'Dr. Johnson', meeting: 'TR 12:30-1:45 PM' },
  { term: '2025FA', courseId: 'COT4400', title: 'Design & Analysis of Algorithms', credits: 3, gradingBasis: 'Letter', finalGrade: 'B+', instructor: 'Dr. Williams', meeting: 'MWF 1:00-1:50 PM' },
  { term: '2025FA', courseId: 'ISM4300', title: 'Managing Info Resources', credits: 3, gradingBasis: 'Letter', finalGrade: 'A', instructor: 'Prof. Davis', meeting: 'TR 2:00-3:15 PM' },
  { term: '2025FA', courseId: 'MAC2312', title: 'Calculus II', credits: 4, gradingBasis: 'Letter', finalGrade: 'B', instructor: 'Dr. Martinez', meeting: 'MTWRF 9:00-9:50 AM' },
  
  // 2025 Spring
  { term: '2025SP', courseId: 'COP4530', title: 'Data Structures', credits: 3, gradingBasis: 'Letter', finalGrade: 'A', instructor: 'Dr. Brown', meeting: 'MWF 11:00-11:50 AM' },
  { term: '2025SP', courseId: 'CDA3103', title: 'Computer Organization', credits: 3, gradingBasis: 'Letter', finalGrade: 'B+', instructor: 'Dr. Garcia', meeting: 'TR 11:00-12:15 PM' },
  { term: '2025SP', courseId: 'COP3514', title: 'Program Design', credits: 3, gradingBasis: 'Letter', finalGrade: 'A-', instructor: 'Prof. Wilson', meeting: 'MWF 2:00-2:50 PM' },
  { term: '2025SP', courseId: 'STA2023', title: 'Intro to Statistics', credits: 3, gradingBasis: 'Letter', finalGrade: 'B', instructor: 'Dr. Lee', meeting: 'TR 9:30-10:45 AM' },
  
  // 2024 Fall
  { term: '2024FA', courseId: 'COP2510', title: 'Programming Concepts', credits: 3, gradingBasis: 'Letter', finalGrade: 'A', instructor: 'Dr. Thompson', meeting: 'MWF 10:00-10:50 AM' },
  { term: '2024FA', courseId: 'MAC2311', title: 'Calculus I', credits: 4, gradingBasis: 'Letter', finalGrade: 'B+', instructor: 'Dr. Anderson', meeting: 'MTWRF 8:00-8:50 AM' },
  { term: '2024FA', courseId: 'ENC1101', title: 'English Composition I', credits: 3, gradingBasis: 'Letter', finalGrade: 'A-', instructor: 'Prof. Taylor', meeting: 'TR 2:00-3:15 PM' },
  { term: '2024FA', courseId: 'CHM2045', title: 'General Chemistry I', credits: 3, gradingBasis: 'Letter', finalGrade: 'B', instructor: 'Dr. White', meeting: 'MWF 1:00-1:50 PM' },
  
  // 2024 Spring
  { term: '2024SP', courseId: 'COP1000', title: 'Intro to Computer Science', credits: 3, gradingBasis: 'Letter', finalGrade: 'A', instructor: 'Dr. Harris', meeting: 'TR 10:00-11:15 AM' },
  { term: '2024SP', courseId: 'MAC1147', title: 'Precalculus', credits: 3, gradingBasis: 'Letter', finalGrade: 'B+', instructor: 'Prof. Clark', meeting: 'MWF 9:00-9:50 AM' },
  { term: '2024SP', courseId: 'PSY2012', title: 'General Psychology', credits: 3, gradingBasis: 'Letter', finalGrade: 'A', instructor: 'Dr. Lewis', meeting: 'TR 12:30-1:45 PM' },
];

export const studentProfile: Profile = {
  bannerId: 'U12345678',
  name: { first: 'Test', last: 'Student', middle: 'A' },
  dobMasked: '**/**/1998',
  residency: 'In-State',
  contact: {
    email: 'teststudent@usf.edu',
    phone: '(813) 555-0123',
    address1: '4202 E Fowler Ave',
    address2: 'Apt 204',
    city: 'Tampa',
    state: 'FL',
    zip: '33620',
    country: 'United States',
  },
  program: {
    college: 'College of Engineering',
    major: ['Computer Science'],
    minor: ['Mathematics'],
    catalogYear: '2023-2024',
  },
  holds: [
    {
      code: 'ADV',
      description: 'Advising Hold - Schedule appointment before registration',
      impact: 'Registration',
    },
  ],
};

export const dashboardTiles: DashboardTile[] = [
  {
    id: 'tuition',
    title: 'Tuition & Fees',
    description: 'View your account balance, statements, and make payments',
    icon: 'DollarSign',
    route: '/tuition',
    isPlaceholder: false,
    category: 'financial',
  },
  {
    id: 'grades',
    title: 'View My Grades',
    description: 'Check your grades and academic progress',
    icon: 'GraduationCap',
    route: '/student-record/grades',
    isPlaceholder: false,
    category: 'academic',
  },
  {
    id: 'transcript',
    title: 'Unofficial Transcript',
    description: 'Generate and download your unofficial transcript',
    icon: 'FileText',
    route: '/student-record/unofficial-transcript',
    isPlaceholder: false,
    category: 'academic',
  },
  {
    id: 'profile',
    title: 'Student Profile',
    description: 'View and update your personal information',
    icon: 'User',
    route: '/profile',
    isPlaceholder: false,
    category: 'personal',
  },
  {
    id: 'registration',
    title: 'Registration',
    description: 'Register for classes and manage your schedule',
    icon: 'Calendar',
    isPlaceholder: true,
    category: 'academic',
  },
  {
    id: 'financial-aid',
    title: 'Financial Aid',
    description: 'Check your financial aid status and requirements',
    icon: 'HandCoins',
    isPlaceholder: true,
    category: 'financial',
  },
  {
    id: 'personal-info',
    title: 'Personal Information',
    description: 'Update your demographic and contact information',
    icon: 'UserCog',
    isPlaceholder: true,
    category: 'personal',
  },
  {
    id: 'graduation',
    title: 'Graduation & Commencement',
    description: 'Apply for graduation and view commencement details',
    icon: 'Award',
    isPlaceholder: true,
    category: 'academic',
  },
  {
    id: 'degree-audit',
    title: 'Degree Audit',
    description: 'Track your progress toward degree completion',
    icon: 'ClipboardCheck',
    isPlaceholder: true,
    category: 'academic',
  },
  {
    id: 'holds',
    title: 'Holds',
    description: 'View and resolve registration holds',
    icon: 'AlertCircle',
    isPlaceholder: true,
    category: 'personal',
  },
];
