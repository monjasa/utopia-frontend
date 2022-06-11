export interface Slice<T> {
  content: T[];
  size: number;
  number: number;
  numberOfElements: number;
  first: boolean;
  last: boolean;
}
