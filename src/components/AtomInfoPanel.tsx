import { useAtomStore } from '../store/atomStore';
import { periodicTable } from '../utils/periodicTable';

export function AtomInfoPanel() {
  const { protons, neutrons, electrons, reset } = useAtomStore();
  const element = periodicTable[protons];
  const charge = protons - electrons;
  const mass = protons + neutrons;

  return (
    <div className="bg-white rounded shadow p-4 w-full max-w-xs mx-auto mt-4">
      <h2 className="text-lg font-bold mb-2">Atom Info</h2>
      <div>Element: {element ? `${element.name} (${element.symbol})` : '-'}</div>
      <div>Atomic Number: {protons}</div>
      <div>Mass Number: {mass}</div>
      <div>Charge: {charge > 0 ? `+${charge}` : charge}</div>
      <button className="mt-4 px-3 py-1 bg-blue-500 text-white rounded" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
