export interface ElementData {
  atomicNumber: number;
  symbol: string;
  name: string;
  mass: number;
}

export const periodicTable: Record<number, ElementData> = {
  1: { atomicNumber: 1, symbol: 'H', name: 'Hydrogen', mass: 1 },
  2: { atomicNumber: 2, symbol: 'He', name: 'Helium', mass: 4 },
  3: { atomicNumber: 3, symbol: 'Li', name: 'Lithium', mass: 7 },
  4: { atomicNumber: 4, symbol: 'Be', name: 'Beryllium', mass: 9 },
  5: { atomicNumber: 5, symbol: 'B', name: 'Boron', mass: 11 },
  6: { atomicNumber: 6, symbol: 'C', name: 'Carbon', mass: 12 },
  7: { atomicNumber: 7, symbol: 'N', name: 'Nitrogen', mass: 14 },
  8: { atomicNumber: 8, symbol: 'O', name: 'Oxygen', mass: 16 },
  9: { atomicNumber: 9, symbol: 'F', name: 'Fluorine', mass: 19 },
  10: { atomicNumber: 10, symbol: 'Ne', name: 'Neon', mass: 20 },
  // ...add more as needed
};
