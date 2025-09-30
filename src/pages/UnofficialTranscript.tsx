import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { courseGrades, studentProfile } from '@/data/mockData';
import { calculateGPA, termCodeToLabel } from '@/utils/formatters';
import { TermCode } from '@/types';
import { Download, FileText } from 'lucide-react';
import { toast } from 'sonner';

export default function UnofficialTranscript() {
  const [showTranscript, setShowTranscript] = useState(false);

  const terms = Array.from(new Set(courseGrades.map(g => g.term))).sort().reverse() as TermCode[];
  
  const generatePDF = () => {
    toast.success('Transcript PDF would be generated here (client-side implementation with watermark)');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">Unofficial Transcript</h2>
          <p className="text-muted-foreground mt-1">Generate and download your academic transcript</p>
        </div>
        {!showTranscript && (
          <Button onClick={() => setShowTranscript(true)}>
            <FileText className="mr-2 h-4 w-4" />
            Generate Transcript
          </Button>
        )}
        {showTranscript && (
          <Button onClick={generatePDF}>
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        )}
      </div>

      {!showTranscript && (
        <Card>
          <CardHeader>
            <CardTitle>About Unofficial Transcripts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              An unofficial transcript provides a comprehensive view of your academic record, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Personal and enrollment information</li>
              <li>All completed coursework organized by term</li>
              <li>Transfer credits and AP/IB credits</li>
              <li>Term and cumulative GPA calculations</li>
              <li>Degrees awarded</li>
            </ul>
            <p className="text-sm text-muted-foreground">
              Note: This transcript is marked as UNOFFICIAL and cannot be used for official purposes. 
              For official transcripts, please contact the Registrar's Office.
            </p>
          </CardContent>
        </Card>
      )}

      {showTranscript && (
        <div className="bg-white text-black p-8 space-y-8 relative">
          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
            <p className="text-9xl font-bold transform -rotate-45">UNOFFICIAL</p>
          </div>

          {/* Header */}
          <div className="text-center border-b-2 border-black pb-4">
            <h1 className="text-3xl font-bold">UNIVERSITY OF SOUTH FLORIDA</h1>
            <p className="text-lg mt-2">UNOFFICIAL ACADEMIC TRANSCRIPT</p>
            <p className="text-sm mt-2">Generated: {new Date().toLocaleDateString()}</p>
          </div>

          {/* Student Information */}
          <div className="grid grid-cols-2 gap-4 border-b pb-4">
            <div>
              <p><strong>Name:</strong> {studentProfile.name.first} {studentProfile.name.middle} {studentProfile.name.last}</p>
              <p><strong>Student ID:</strong> {studentProfile.bannerId}</p>
              <p><strong>Date of Birth:</strong> {studentProfile.dobMasked}</p>
            </div>
            <div>
              <p><strong>College:</strong> {studentProfile.program.college}</p>
              <p><strong>Major:</strong> {studentProfile.program.major.join(', ')}</p>
              {studentProfile.program.minor && (
                <p><strong>Minor:</strong> {studentProfile.program.minor.join(', ')}</p>
              )}
              <p><strong>Catalog Year:</strong> {studentProfile.program.catalogYear}</p>
            </div>
          </div>

          {/* Transfer/AP Credits Example */}
          <div className="border-b pb-4">
            <h3 className="text-xl font-bold mb-3">Transfer & Advanced Placement Credits</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-1">Course</th>
                  <th className="text-left py-1">Title</th>
                  <th className="text-center py-1">Credits</th>
                  <th className="text-center py-1">Grade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-1">AP-CS-A</td>
                  <td className="py-1">AP Computer Science A</td>
                  <td className="text-center">3.0</td>
                  <td className="text-center">T</td>
                </tr>
                <tr>
                  <td className="py-1">AP-CALC-AB</td>
                  <td className="py-1">AP Calculus AB</td>
                  <td className="text-center">4.0</td>
                  <td className="text-center">T</td>
                </tr>
              </tbody>
            </table>
            <p className="text-right mt-2"><strong>Total Transfer Credits: 7.0</strong></p>
          </div>

          {/* Academic History by Term */}
          {terms.map((term) => {
            const termCourses = courseGrades.filter(g => g.term === term);
            const termGPA = calculateGPA(termCourses);
            const termCredits = termCourses.reduce((sum, c) => sum + c.credits, 0);

            return (
              <div key={term} className="border-b pb-4">
                <h3 className="text-xl font-bold mb-3">{termCodeToLabel(term)}</h3>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-1">Course</th>
                      <th className="text-left py-1">Title</th>
                      <th className="text-center py-1">Credits</th>
                      <th className="text-center py-1">Grade</th>
                      <th className="text-left py-1">Instructor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {termCourses.map((course, idx) => (
                      <tr key={idx}>
                        <td className="py-1">{course.courseId}</td>
                        <td className="py-1">{course.title}</td>
                        <td className="text-center">{course.credits}</td>
                        <td className="text-center font-bold">{course.finalGrade}</td>
                        <td className="py-1 text-xs">{course.instructor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex justify-between mt-2 font-semibold">
                  <p>Term Credits: {termCredits}</p>
                  <p>Term GPA: {termGPA.toFixed(2)}</p>
                </div>
              </div>
            );
          })}

          {/* Summary */}
          <div className="border-t-2 border-black pt-4">
            <div className="grid grid-cols-2 gap-4 font-bold text-lg">
              <div>
                <p>Total Credits Earned: {courseGrades.reduce((sum, c) => sum + c.credits, 0) + 7}</p>
              </div>
              <div className="text-right">
                <p>Cumulative GPA: {calculateGPA(courseGrades).toFixed(3)}</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-sm text-gray-600 border-t pt-4">
            <p className="font-bold">*** UNOFFICIAL TRANSCRIPT ***</p>
            <p>This transcript is not valid for official use</p>
            <p>For official transcripts, contact the Office of the Registrar</p>
          </div>
        </div>
      )}
    </div>
  );
}
