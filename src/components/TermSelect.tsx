import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { termCodeToLabel } from '@/utils/formatters';
import { TermCode } from '@/types';

interface TermSelectProps {
  value: TermCode;
  onChange: (value: TermCode) => void;
  terms: TermCode[];
}

export const TermSelect = ({ value, onChange, terms }: TermSelectProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select term" />
      </SelectTrigger>
      <SelectContent>
        {terms.map((term) => (
          <SelectItem key={term} value={term}>
            {termCodeToLabel(term)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
