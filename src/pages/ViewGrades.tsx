import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TermSelect } from '@/components/TermSelect';
import { courseGrades } from '@/data/mockData';
import { calculateGPA, termCodeToLabel } from '@/utils/formatters';
import { TermCode } from '@/types';
import { Download, Printer } from 'lucide-react';
import { toast } from 'sonner';

export default function ViewGrades() {
  const [selectedTerm, setSelectedTerm] = useState<TermCode>('2025FA');

  const terms = Array.from(new Set(courseGrades.map(g => g.term))) as TermCode[];
  const termCourses = courseGrades.filter(g => g.term === selectedTerm);
  const allCourses = courseGrades;

  const termGPA = calculateGPA(termCourses);
  const cumulativeGPA = calculateGPA(allCourses);

  const exportToCSV = () => {
    const headers = ['Term', 'Course', 'Title', 'Credits', 'Grade', 'Instructor'];
    const rows = courseGrades.map(g => [
      termCodeToLabel(g.term),
      g.courseId,
      g.title,
      g.credits,
      g.finalGrade,
      g.instructor,
    ]);
    
    const csvContent = [headers, ...rows].map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'grades.csv';
    a.click();
    toast.success('Grades exported to CSV');
  };

  const handlePrint = () => {
    window.print();
    toast.success('Print dialog opened');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center print:flex-col print:items-start print:space-y-2">
        <div>
          <h2 className="text-3xl font-bold">View My Grades</h2>
          <p className="text-muted-foreground mt-1">Review your academic performance</p>
        </div>
        <div className="flex gap-2 print:hidden">
          <TermSelect 
            value={selectedTerm} 
            onChange={setSelectedTerm}
            terms={terms}
          />
          <Button onClick={exportToCSV} variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export CSV
          </Button>
          <Button onClick={handlePrint} variant="outline">
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Term GPA</CardTitle>
            <CardDescription>{termCodeToLabel(selectedTerm)}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-primary">{termGPA.toFixed(2)}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cumulative GPA</CardTitle>
            <CardDescription>All terms</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-primary">{cumulativeGPA.toFixed(2)}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Course Grades - {termCodeToLabel(selectedTerm)}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Course</TableHead>
                <TableHead>Title</TableHead>
                <TableHead className="text-center">Credits</TableHead>
                <TableHead className="text-center">Grading</TableHead>
                <TableHead className="text-center">Grade</TableHead>
                <TableHead>Instructor</TableHead>
                <TableHead>Meeting Pattern</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {termCourses.map((course, idx) => (
                <TableRow key={idx}>
                  <TableCell className="font-medium">{course.courseId}</TableCell>
                  <TableCell>{course.title}</TableCell>
                  <TableCell className="text-center">{course.credits}</TableCell>
                  <TableCell className="text-center">{course.gradingBasis}</TableCell>
                  <TableCell className="text-center">
                    <span className="font-bold text-lg">{course.finalGrade}</span>
                  </TableCell>
                  <TableCell>{course.instructor}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{course.meeting}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
