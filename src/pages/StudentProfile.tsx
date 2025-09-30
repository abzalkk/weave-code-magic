import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { studentProfile as initialProfile } from '@/data/mockData';
import { Profile } from '@/types';
import { Edit, Save, X, AlertTriangle } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from 'sonner';
import { Badge } from '@/components/ui/badge';

export default function StudentProfile() {
  const [profile, setProfile] = useState<Profile>(initialProfile);
  const [editMode, setEditMode] = useState(false);
  const [editedContact, setEditedContact] = useState(profile.contact);

  useEffect(() => {
    const saved = localStorage.getItem('studentProfile');
    if (saved) {
      setProfile(JSON.parse(saved));
    }
  }, []);

  const handleSaveContact = () => {
    const updated = { ...profile, contact: editedContact };
    setProfile(updated);
    localStorage.setItem('studentProfile', JSON.stringify(updated));
    setEditMode(false);
    toast.success('Contact information updated successfully');
  };

  const handleCancelEdit = () => {
    setEditedContact(profile.contact);
    setEditMode(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">Student Profile</h2>
        <p className="text-muted-foreground mt-1">View and manage your personal information</p>
      </div>

      {/* Bio/Demographics */}
      <Card>
        <CardHeader>
          <CardTitle>Biographical Information</CardTitle>
          <CardDescription>Personal and demographic details</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="text-muted-foreground">Full Name</Label>
            <p className="text-lg font-medium">
              {profile.name.first} {profile.name.middle} {profile.name.last}
            </p>
          </div>
          <div>
            <Label className="text-muted-foreground">Student ID (Banner ID)</Label>
            <p className="text-lg font-medium">{profile.bannerId}</p>
          </div>
          <div>
            <Label className="text-muted-foreground">Date of Birth</Label>
            <p className="text-lg font-medium">{profile.dobMasked}</p>
          </div>
          <div>
            <Label className="text-muted-foreground">Residency Status</Label>
            <p className="text-lg font-medium">{profile.residency}</p>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>Your current contact details</CardDescription>
          </div>
          <Dialog open={editMode} onOpenChange={setEditMode}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Edit className="mr-2 h-4 w-4" />
                Edit Contact Info
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Edit Contact Information</DialogTitle>
                <DialogDescription>Update your contact details below</DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    value={editedContact.email}
                    onChange={(e) => setEditedContact({ ...editedContact, email: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={editedContact.phone}
                    onChange={(e) => setEditedContact({ ...editedContact, phone: e.target.value })}
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address1">Address Line 1</Label>
                  <Input
                    id="address1"
                    value={editedContact.address1}
                    onChange={(e) => setEditedContact({ ...editedContact, address1: e.target.value })}
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address2">Address Line 2</Label>
                  <Input
                    id="address2"
                    value={editedContact.address2 || ''}
                    onChange={(e) => setEditedContact({ ...editedContact, address2: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    value={editedContact.city}
                    onChange={(e) => setEditedContact({ ...editedContact, city: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    value={editedContact.state}
                    onChange={(e) => setEditedContact({ ...editedContact, state: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">ZIP Code</Label>
                  <Input
                    id="zip"
                    value={editedContact.zip}
                    onChange={(e) => setEditedContact({ ...editedContact, zip: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input
                    id="country"
                    value={editedContact.country}
                    onChange={(e) => setEditedContact({ ...editedContact, country: e.target.value })}
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={handleCancelEdit}>
                  <X className="mr-2 h-4 w-4" />
                  Cancel
                </Button>
                <Button onClick={handleSaveContact}>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="text-muted-foreground">Email</Label>
            <p className="text-lg font-medium">{profile.contact.email}</p>
          </div>
          <div>
            <Label className="text-muted-foreground">Phone</Label>
            <p className="text-lg font-medium">{profile.contact.phone}</p>
          </div>
          <div className="md:col-span-2">
            <Label className="text-muted-foreground">Address</Label>
            <p className="text-lg font-medium">
              {profile.contact.address1}
              {profile.contact.address2 && <>, {profile.contact.address2}</>}
              <br />
              {profile.contact.city}, {profile.contact.state} {profile.contact.zip}
              <br />
              {profile.contact.country}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Program Information */}
      <Card>
        <CardHeader>
          <CardTitle>Academic Program</CardTitle>
          <CardDescription>Your current program of study</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="text-muted-foreground">College</Label>
            <p className="text-lg font-medium">{profile.program.college}</p>
          </div>
          <div>
            <Label className="text-muted-foreground">Catalog Year</Label>
            <p className="text-lg font-medium">{profile.program.catalogYear}</p>
          </div>
          <div>
            <Label className="text-muted-foreground">Major(s)</Label>
            <p className="text-lg font-medium">{profile.program.major.join(', ')}</p>
          </div>
          {profile.program.minor && profile.program.minor.length > 0 && (
            <div>
              <Label className="text-muted-foreground">Minor(s)</Label>
              <p className="text-lg font-medium">{profile.program.minor.join(', ')}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Holds */}
      {profile.holds.length > 0 && (
        <Card className="border-destructive">
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <CardTitle>Active Holds</CardTitle>
            </div>
            <CardDescription>These holds may affect your ability to register or receive services</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {profile.holds.map((hold, idx) => (
              <div key={idx} className="flex items-start justify-between p-3 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold">{hold.code}</p>
                    <Badge variant={hold.impact === 'Registration' ? 'destructive' : 'secondary'}>
                      {hold.impact}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{hold.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* FERPA Notice */}
      <Card>
        <CardHeader>
          <CardTitle>FERPA Privacy Notice</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            The Family Educational Rights and Privacy Act (FERPA) affords students certain rights with respect to their education records. 
            Your personal information is protected under federal law. You have the right to inspect and review your education records, 
            request amendments to records you believe are inaccurate, and control the disclosure of your information, except as permitted by law.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
