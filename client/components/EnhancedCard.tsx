import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface EnhancedCardProps {
  children?: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
  glow?: boolean;
  icon?: ReactNode;
  badge?: string;
  title?: string;
  description?: string;
  content?: ReactNode;
}

export function EnhancedCard({ 
  children, 
  className, 
  hover = true, 
  gradient = false,
  glow = false,
  icon,
  badge,
  title,
  description,
  content
}: EnhancedCardProps) {
  return (
    <Card 
      className={cn(
        "relative overflow-hidden border-0 shadow-lg backdrop-blur-sm",
        hover && "hover:shadow-2xl hover:-translate-y-1 transition-all duration-300",
        gradient && "bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/50",
        glow && "before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500/10 before:to-purple-500/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
        className
      )}
    >
      {badge && (
        <Badge className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-500 border-0 text-white">
          {badge}
        </Badge>
      )}
      
      {(icon || title || description) && (
        <CardHeader className="space-y-3">
          {icon && (
            <div className="w-fit p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-200/50">
              {icon}
            </div>
          )}
          {title && <CardTitle className="text-xl font-bold">{title}</CardTitle>}
          {description && <CardDescription className="text-base">{description}</CardDescription>}
        </CardHeader>
      )}
      
      {(content || children) && (
        <CardContent>
          {content || children}
        </CardContent>
      )}
    </Card>
  );
}
