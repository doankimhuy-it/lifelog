import { Search, SlidersIcon } from 'lucide-react';
import { DateRangePicker } from '../../components/date-range-picker';
import { Input } from '../../components/input';
import { Label } from '../../components/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../../components/popover';

export function SearchForm({ ...props }: React.ComponentProps<'form'>) {
  return (
    <form {...props}>
      <Search className="absolute pointer-events-none left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
      <Input placeholder="Search title..." className="pl-12"></Input>
      <Popover>
        <PopoverTrigger className="absolute top-1/2 -translate-y-1/2 right-4">
          <SlidersIcon className="text-muted-foreground"></SlidersIcon>
        </PopoverTrigger>
        <PopoverContent className="w-fit">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Advanced filters</h4>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  placeholder="Blog description..."
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="author">Author's name/email</Label>
                <Input
                  id="author"
                  placeholder="Author's name/email..."
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxWidth">Created from/to</Label>
                <DateRangePicker
                  id="createdAt"
                  className="col-span-2 text-base"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxWidth">Updated from/to</Label>
                <DateRangePicker
                  id="updatedAt"
                  className="col-span-2 text-base"
                />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </form>
  );
}
