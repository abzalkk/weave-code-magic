import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { dashboardTiles } from '@/data/mockData';
import { PlaceholderCard } from '@/components/PlaceholderCard';
import * as Icons from 'lucide-react';

export default function Dashboard() {
  const navigate = useNavigate();

  const categorizedTiles = {
    academic: dashboardTiles.filter(t => t.category === 'academic'),
    financial: dashboardTiles.filter(t => t.category === 'financial'),
    personal: dashboardTiles.filter(t => t.category === 'personal'),
  };

  const renderTile = (tile: typeof dashboardTiles[0]) => {
    if (tile.isPlaceholder) {
      return <PlaceholderCard key={tile.id} title={tile.title} description={tile.description} icon={tile.icon} />;
    }

    const Icon = (Icons as any)[tile.icon] || Icons.HelpCircle;

    return (
      <Card key={tile.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => tile.route && navigate(tile.route)}>
        <CardHeader>
          <div className="flex items-center space-x-3">
            <Icon className="h-6 w-6 text-primary" />
            <CardTitle>{tile.title}</CardTitle>
          </div>
          <CardDescription>{tile.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="default" className="w-full">
            Access {tile.title}
          </Button>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Welcome, Test Student</h2>
        <p className="text-muted-foreground">
          Access your academic records, financial information, and personal details from the options below.
        </p>
      </div>

      <section>
        <h3 className="text-xl font-semibold mb-4">Academic Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categorizedTiles.academic.map(renderTile)}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Financial Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categorizedTiles.financial.map(renderTile)}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Personal Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categorizedTiles.personal.map(renderTile)}
        </div>
      </section>
    </div>
  );
}
