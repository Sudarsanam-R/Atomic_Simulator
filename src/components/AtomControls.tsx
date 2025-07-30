import { useAtomStore } from '../store/atomStore';

export function AtomControls() {
  const { protons, neutrons, electrons, setProtons, setNeutrons, setElectrons } = useAtomStore();

  return (
    <div className="flex flex-col gap-4 items-center mt-6">
      <div className="flex gap-4">
        <Control label="Protons" value={protons} setValue={setProtons} color="bg-red-500" />
        <Control label="Neutrons" value={neutrons} setValue={setNeutrons} color="bg-blue-500" />
        <Control label="Electrons" value={electrons} setValue={setElectrons} color="bg-yellow-400 text-black" />
      </div>
    </div>
  );
}

function Control({ label, value, setValue, color }: { label: string; value: number; setValue: (n: number) => void; color: string }) {
  return (
    <div className={`flex flex-col items-center ${color} rounded p-3 w-24`}>
      <span className="font-bold mb-2">{label}</span>
      <div className="flex items-center gap-2">
        <button className="px-2 py-1 bg-gray-200 rounded" onClick={() => setValue(value - 1)} disabled={value <= 0}>-</button>
        <span className="text-lg font-mono w-6 text-center">{value}</span>
        <button className="px-2 py-1 bg-gray-200 rounded" onClick={() => setValue(value + 1)}>+</button>
      </div>
    </div>
  );
}
