export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const calculateGPA = (grades: { finalGrade: string; credits: number }[]): number => {
  const gradePoints: { [key: string]: number } = {
    'A': 4.0, 'A-': 3.67,
    'B+': 3.33, 'B': 3.0, 'B-': 2.67,
    'C+': 2.33, 'C': 2.0, 'C-': 1.67,
    'D+': 1.33, 'D': 1.0,
    'F': 0.0,
  };

  let totalPoints = 0;
  let totalCredits = 0;

  grades.forEach(({ finalGrade, credits }) => {
    if (gradePoints[finalGrade] !== undefined) {
      totalPoints += gradePoints[finalGrade] * credits;
      totalCredits += credits;
    }
  });

  return totalCredits > 0 ? totalPoints / totalCredits : 0;
};

export const termCodeToLabel = (term: string): string => {
  const year = term.substring(0, 4);
  const semester = term.substring(4);
  const semesterMap: { [key: string]: string } = {
    'FA': 'Fall',
    'SP': 'Spring',
    'SU': 'Summer',
  };
  return `${semesterMap[semester] || semester} ${year}`;
};
