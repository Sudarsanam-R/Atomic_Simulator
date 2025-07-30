import { AtomControls } from "./components/AtomControls";
import { AtomInfoPanel } from "./components/AtomInfoPanel";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-yellow-100 flex flex-col items-center justify-start p-4">
      <h1 className="text-3xl font-bold mt-6 mb-4">Build an Atom</h1>
      <AtomControls />
      <AtomInfoPanel />
    </div>
  );
}