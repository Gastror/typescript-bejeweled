import Chip from '../Chip';

export interface IFieldProps {
  onScoreChange(change: number): number;
}

export interface IFieldState {
  chips?: Chip[];
}