import { create } from 'zustand';

interface AtomState {
  protons: number;
  neutrons: number;
  electrons: number;
  setProtons: (n: number) => void;
  setNeutrons: (n: number) => void;
  setElectrons: (n: number) => void;
  reset: () => void;
}

export const useAtomStore = create<AtomState>((set) => ({
  protons: 1,
  neutrons: 0,
  electrons: 1,
  setProtons: (n) => set({ protons: n }),
  setNeutrons: (n) => set({ neutrons: n }),
  setElectrons: (n) => set({ electrons: n }),
  reset: () => set({ protons: 1, neutrons: 0, electrons: 1 }),
}));
