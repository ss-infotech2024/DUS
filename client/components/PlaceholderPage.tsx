import { Button } from './ui/button';
import { Construction } from 'lucide-react';

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-md">
        <Construction className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-muted-foreground mb-8">{description}</p>
        <p className="text-sm text-muted-foreground mb-6">
          This page is coming soon! Continue prompting to have us build out the full content for this section.
        </p>
        <Button variant="outline">Back to Home</Button>
      </div>
    </div>
  );
}
