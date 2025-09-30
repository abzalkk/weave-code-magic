import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TermSelect } from '@/components/TermSelect';
import { tuitionData } from '@/data/mockData';
import { formatCurrency, formatDate, termCodeToLabel } from '@/utils/formatters';
import { TermCode } from '@/types';
import { Download, CreditCard } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from 'sonner';

export default function TuitionFees() {
  const [selectedTerm, setSelectedTerm] = useState<TermCode>('2025FA');
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);

  const currentTermData = tuitionData.find(t => t.term === selectedTerm);
  const allCharges = currentTermData?.charges || [];
  const allPayments = currentTermData?.payments || [];

  const totalCharges = allCharges.reduce((sum, c) => sum + c.amount, 0);
  const totalPayments = Math.abs(allPayments.reduce((sum, p) => sum + p.amount, 0));
  const balance = totalCharges - totalPayments;

  const generatePDF = () => {
    toast.success('Statement PDF would be generated here (client-side implementation)');
  };

  const handlePayment = () => {
    setPaymentModalOpen(false);
    toast.success('Payment processed successfully (mock)');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">Tuition & Fees</h2>
          <p className="text-muted-foreground mt-1">View your account balance and transaction history</p>
        </div>
        <TermSelect 
          value={selectedTerm} 
          onChange={setSelectedTerm}
          terms={tuitionData.map(t => t.term)}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Account Summary - {termCodeToLabel(selectedTerm)}</CardTitle>
          <CardDescription>Current charges and payments for the selected term</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-lg border p-4 bg-muted/50">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-muted-foreground">Current Balance</p>
                <p className={`text-3xl font-bold ${balance > 0 ? 'text-destructive' : 'text-green-600'}`}>
                  {formatCurrency(balance)}
                </p>
              </div>
              <div className="flex gap-2">
                <Button onClick={generatePDF} variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download Statement
                </Button>
                <Dialog open={paymentModalOpen} onOpenChange={setPaymentModalOpen}>
                  <DialogTrigger asChild>
                    <Button disabled={balance <= 0}>
                      <CreditCard className="mr-2 h-4 w-4" />
                      Make a Payment
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Make a Payment</DialogTitle>
                      <DialogDescription>
                        You are about to make a payment of {formatCurrency(balance)}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Payment Method</label>
                        <select className="w-full p-2 border rounded-md">
                          <option>Credit/Debit Card</option>
                          <option>ACH Transfer</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Amount</label>
                        <input 
                          type="text" 
                          value={formatCurrency(balance)}
                          readOnly
                          className="w-full p-2 border rounded-md bg-muted"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" onClick={() => setPaymentModalOpen(false)}>Cancel</Button>
                      <Button onClick={handlePayment}>Process Payment</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Charges</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allCharges.map((charge) => (
                  <TableRow key={charge.id}>
                    <TableCell>{formatDate(charge.date)}</TableCell>
                    <TableCell>{charge.description}</TableCell>
                    <TableCell>{charge.category}</TableCell>
                    <TableCell className="text-right font-medium">{formatCurrency(charge.amount)}</TableCell>
                  </TableRow>
                ))}
                <TableRow className="font-semibold bg-muted/50">
                  <TableCell colSpan={3}>Total Charges</TableCell>
                  <TableCell className="text-right">{formatCurrency(totalCharges)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Payments</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allPayments.map((payment) => (
                  <TableRow key={payment.id}>
                    <TableCell>{formatDate(payment.date)}</TableCell>
                    <TableCell>{payment.method}</TableCell>
                    <TableCell className="text-right font-medium text-green-600">
                      {formatCurrency(Math.abs(payment.amount))}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow className="font-semibold bg-muted/50">
                  <TableCell colSpan={2}>Total Payments</TableCell>
                  <TableCell className="text-right text-green-600">{formatCurrency(totalPayments)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between items-center text-xl font-bold">
              <span>Account Balance:</span>
              <span className={balance > 0 ? 'text-destructive' : 'text-green-600'}>
                {formatCurrency(balance)}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
