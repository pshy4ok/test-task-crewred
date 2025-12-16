export type InputType = 'text' | 'password' | 'number';

export interface InputProps {
  type?: InputType;
  value?: string;
  placeholder?: string;
  clearable?: boolean;
  onChange?: (value: string) => void;
}