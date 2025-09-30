import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import * as Icons from 'lucide-react';

interface PlaceholderCardProps {
  title: string;
  description: string;
  icon: string;
}

export const PlaceholderCard = ({ title, description, icon }: PlaceholderCardProps) => {
  const Icon = (Icons as any)[icon] || Icons.HelpCircle;

  const handleClick = () => {
    {/* TODO: Wire to real route/link once available */}
    toast.info('Placeholder: link to be added');
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <Icon className="h-6 w-6 text-primary" />
          <CardTitle>{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          variant="outline" 
          className="w-full" 
          disabled
          onClick={handleClick}
        >
          Access {title}
        </Button>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          Feature coming soon
        </p>
      </CardContent>
    </Card>
  );
};
