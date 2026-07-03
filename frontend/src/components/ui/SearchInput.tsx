import { Search } from 'lucide-react';
import { cn } from '@/utils/cn';
import { Input } from './Input';

export interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function SearchInput({ className, ...props }: SearchInputProps) {
  return <Input className={cn('pl-11', className)} startIcon={<Search className="h-4 w-4" />} {...props} />;
}
