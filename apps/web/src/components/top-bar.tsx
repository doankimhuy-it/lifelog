import { ChevronLeft } from 'lucide-react';
import { Button } from './button';

export const TopBar = () => {
  return (
    <div className="flex ">
      <Button variant="outline" size="icon">
        <ChevronLeft />
      </Button>
    </div>
  );
};
