import React, { useState, useEffect } from 'react';
import { 
  BookOpen, FlaskConical, Calculator, Trophy, Menu, X, ChevronRight, Lightbulb, 
  Zap, Layout, RefreshCcw, Droplets, MoveHorizontal, Sun, Layers, Magnet, 
  Apple, Hash, Scale, AlertCircle, Leaf, Thermometer, Car, Triangle, Bug,
  Activity, BarChart, LineChart
} from 'lucide-react';

// ==========================================
// --- CLASS 6 SIMULATIONS ---
// ==========================================

const ElectricCircuitSim = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBattery, setHasBattery] = useState(false);
  const [hasBulb, setHasBulb] = useState(false);
  const [isConducting, setIsConducting] = useState(false);

  useEffect(() => { setIsConducting(hasBattery && hasBulb && !isOpen); }, [hasBattery, hasBulb, isOpen]);

  return (
    <div className="bg-slate-900 p-6 rounded-xl text-white h-full flex flex-col animate-in fade-in zoom-in-95 duration-300">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Zap className="text-yellow-400" /> Circuit Builder</h3>
      <div className="relative h-48 bg-slate-800 rounded-lg border-2 border-dashed border-slate-600 flex items-center justify-center overflow-hidden mb-4 shrink-0">
        <svg viewBox="0 0 400 200" className="w-full h-full">
          <path d="M 100 100 L 100 50 L 300 50 L 300 100" fill="none" stroke={isConducting ? "#facc15" : "#475569"} strokeWidth="4" />
          <path d="M 100 100 L 100 150 L 300 150 L 300 100" fill="none" stroke={isConducting ? "#facc15" : "#475569"} strokeWidth="4" />
          <rect x="180" y="130" width="40" height="40" fill={hasBattery ? "#ef4444" : "#1e293b"} className="cursor-pointer transition-colors" onClick={() => setHasBattery(!hasBattery)} />
          <text x="185" y="155" fill="white" className="text-[10px] pointer-events-none select-none">{hasBattery ? "9V" : "+ Add"}</text>
          <line x1="140" y1="50" x2={isOpen ? "160" : "180"} y2={isOpen ? "30" : "50"} stroke="white" strokeWidth="6" strokeLinecap="round" className="cursor-pointer transition-all" onClick={() => setIsOpen(!isOpen)} />
          <circle cx="300" cy="100" r="25" fill={isConducting ? "#fef08a" : "#1e293b"} stroke="#94a3b8" strokeWidth="2" className="cursor-pointer transition-colors" onClick={() => setHasBulb(!hasBulb)} />
          {isConducting && <circle cx="300" cy="100" r="35" fill="yellow" opacity="0.2" className="animate-pulse pointer-events-none" />}
          <text x="285" y="105" fill={isConducting ? "black" : "white"} className="text-[8px] pointer-events-none select-none">Bulb</text>
        </svg>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-4 shrink-0">
        <div className={`p-2 rounded border text-xs text-center ${hasBattery ? 'border-green-500 bg-green-500/10' : 'border-slate-700'}`}>Battery: {hasBattery ? "ON" : "OFF"}</div>
        <div className={`p-2 rounded border text-xs text-center ${!isOpen ? 'border-green-500 bg-green-500/10' : 'border-slate-700'}`}>Switch: {isOpen ? "CLOSED" : "OPEN"}</div>
      </div>
      <p className="text-xs text-blue-200 mt-auto bg-blue-900/30 p-2 rounded"><strong>Goal:</strong> Complete the loop for current to flow!</p>
    </div>
  );
};

const SortingLab = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [feedback, setFeedback] = useState("");
  const items = [
    { name: "Glass Window", type: "Transparent", color: "bg-blue-200/50", border: "border-blue-300" },
    { name: "Wooden Board", type: "Opaque", color: "bg-amber-800", border: "border-amber-900" },
    { name: "Butter Paper", type: "Translucent", color: "bg-yellow-100", border: "border-yellow-200" }
  ];

  const handleSort = (type) => {
    if (items[activeItem].type === type) {
      setFeedback(`✅ Correct! ${items[activeItem].name} is ${type}.`);
      setTimeout(() => { setActiveItem((prev) => (prev + 1) % items.length); setFeedback(""); }, 1500);
    } else { setFeedback("❌ Try again! Think about light passing."); }
  };

  return (
    <div className="bg-slate-900 p-6 rounded-xl text-white h-full flex flex-col animate-in fade-in zoom-in-95 duration-300">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Layers className="text-purple-400" /> Sorting Materials</h3>
      <div className="flex-1 flex flex-col items-center justify-center mb-4">
        <div className={`w-32 h-32 rounded-lg border-4 flex items-center justify-center shadow-lg transition-all duration-500 ${items[activeItem].color} ${items[activeItem].border}`}>
          <span className="text-slate-900 font-bold bg-white/80 px-2 py-1 rounded text-sm text-center">{items[activeItem].name}</span>
        </div>
        <div className="h-8 mt-4 flex items-center justify-center text-sm font-medium text-purple-200">{feedback}</div>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-auto">
        <button onClick={() => handleSort("Transparent")} className="bg-slate-700 hover:bg-slate-600 text-xs py-3 rounded-lg font-bold">Transparent</button>
        <button onClick={() => handleSort("Translucent")} className="bg-slate-700 hover:bg-slate-600 text-xs py-3 rounded-lg font-bold">Translucent</button>
        <button onClick={() => handleSort("Opaque")} className="bg-slate-700 hover:bg-slate-600 text-xs py-3 rounded-lg font-bold">Opaque</button>
      </div>
    </div>
  );
};

const FoodComponentsLab = () => {
  const [selectedFood, setSelectedFood] = useState(null);
  const foods = [
    { name: "Potato", nutrient: "Carbohydrates", emoji: "🥔", role: "Energy Giving", color: "bg-amber-100 text-amber-800" },
    { name: "Almonds", nutrient: "Fats", emoji: "🥜", role: "Stored Energy", color: "bg-orange-100 text-orange-800" },
    { name: "Lentils (Dal)", nutrient: "Proteins", emoji: "🍲", role: "Body Building", color: "bg-red-100 text-red-800" },
    { name: "Spinach", nutrient: "Vitamins", emoji: "🥬", role: "Protective Food", color: "bg-green-100 text-green-800" }
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 h-full flex flex-col animate-in fade-in zoom-in-95 duration-300">
      <h3 className="text-xl font-bold mb-4 text-slate-800 flex items-center gap-2"><Apple className="text-red-500" /> Components of Food</h3>
      <div className="grid grid-cols-2 gap-3 mb-4">
        {foods.map((food, i) => (
          <button key={i} onClick={() => setSelectedFood(food)} className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all hover:scale-105 active:scale-95 ${selectedFood?.name === food.name ? 'border-red-400 bg-red-50 shadow-md' : 'border-slate-200 bg-slate-50'}`}>
            <span className="text-3xl">{food.emoji}</span>
            <span className="text-sm font-bold text-slate-700">{food.name}</span>
          </button>
        ))}
      </div>
      <div className="mt-auto h-24 flex items-center justify-center border-2 border-dashed border-slate-200 rounded-xl bg-slate-50 p-2">
        {selectedFood ? (
          <div className="text-center animate-in slide-in-from-bottom-2">
            <p className="text-sm text-slate-500">Major Nutrient</p>
            <p className={`text-lg font-black px-3 py-1 rounded-full inline-block my-1 ${selectedFood.color}`}>{selectedFood.nutrient}</p>
            <p className="text-xs font-bold text-slate-600">({selectedFood.role})</p>
          </div>
        ) : (
          <p className="text-sm text-slate-400 font-medium">Select a food item to test!</p>
        )}
      </div>
    </div>
  );
};

const MagnetLab = () => {
  const [flipLeft, setFlipLeft] = useState(false);
  const [flipRight, setFlipRight] = useState(false);
  const leftPole = flipLeft ? 'S' : 'N';
  const rightPole = flipRight ? 'N' : 'S';
  const isAttracting = leftPole !== rightPole;

  return (
    <div className="bg-slate-900 p-6 rounded-xl text-white h-full flex flex-col animate-in fade-in zoom-in-95 duration-300">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Magnet className="text-red-500" /> Magnetic Poles</h3>
      <div className="flex-1 bg-slate-800 rounded-lg border-2 border-dashed border-slate-600 flex items-center justify-center p-4 overflow-hidden mb-4">
        <div className={`flex items-center transition-all duration-700 ease-in-out ${isAttracting ? 'gap-1' : 'gap-12'}`}>
          <div className={`flex w-24 h-10 rounded shadow-lg cursor-pointer transition-transform duration-500 ${flipLeft ? 'flex-row-reverse' : 'flex-row'}`} onClick={() => setFlipLeft(!flipLeft)}>
            <div className="w-1/2 bg-blue-500 flex items-center justify-center font-bold rounded-l text-white border border-blue-600">S</div>
            <div className="w-1/2 bg-red-500 flex items-center justify-center font-bold rounded-r text-white border border-red-600">N</div>
          </div>
          <div className={`flex w-24 h-10 rounded shadow-lg cursor-pointer transition-transform duration-500 ${flipRight ? 'flex-row-reverse' : 'flex-row'}`} onClick={() => setFlipRight(!flipRight)}>
            <div className="w-1/2 bg-blue-500 flex items-center justify-center font-bold rounded-l text-white border border-blue-600">S</div>
            <div className="w-1/2 bg-red-500 flex items-center justify-center font-bold rounded-r text-white border border-red-600">N</div>
          </div>
        </div>
      </div>
      <div className={`mt-auto p-3 rounded-lg text-center font-bold transition-colors ${isAttracting ? 'bg-green-500/20 text-green-300 border border-green-500/50' : 'bg-red-500/20 text-red-300 border border-red-500/50'}`}>
        {isAttracting ? "Unlike Poles Attract! 🧲" : "Like Poles Repel! ⚡"}
      </div>
      <p className="text-xs text-center text-slate-400 mt-2">Click a magnet to flip its poles.</p>
    </div>
  );
};

const FractionLab = () => {
  const [slices, setSlices] = useState(4);
  const [selected, setSelected] = useState(1);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 h-full flex flex-col animate-in fade-in zoom-in-95 duration-300">
      <h3 className="text-xl font-bold mb-4 text-slate-800 flex items-center gap-2"><Calculator className="text-blue-600" /> Fraction Pizza</h3>
      <div className="flex flex-col items-center gap-6 mb-4 flex-1">
        <div className="relative w-32 h-32 shrink-0">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            {Array.from({ length: slices }).map((_, i) => {
              const angle = (360 / slices);
              const startAngle = i * angle;
              const endAngle = (i + 1) * angle;
              const x1 = 50 + 45 * Math.cos((Math.PI * startAngle) / 180);
              const y1 = 50 + 45 * Math.sin((Math.PI * startAngle) / 180);
              const x2 = 50 + 45 * Math.cos((Math.PI * endAngle) / 180);
              const y2 = 50 + 45 * Math.sin((Math.PI * endAngle) / 180);
              const largeArc = angle > 180 ? 1 : 0;
              return <path key={i} d={`M 50 50 L ${x1} ${y1} A 45 45 0 ${largeArc} 1 ${x2} ${y2} Z`} fill={i < selected ? "#f97316" : "#f1f5f9"} stroke="#fff" strokeWidth="1" className="cursor-pointer hover:opacity-80 transition-colors" onClick={() => setSelected(i + 1)} />;
            })}
          </svg>
        </div>
        <div className="w-full space-y-4 shrink-0">
          <div className="flex justify-between items-center bg-slate-50 p-2 rounded-lg">
             <span className="font-bold text-slate-600 text-sm">Fraction:</span>
             <div className="font-black text-xl text-blue-700">{selected} / {slices}</div>
          </div>
          <input type="range" min="1" max="12" value={slices} onChange={(e) => { const val = parseInt(e.target.value); setSlices(val); if (selected > val) setSelected(val); }} className="w-full accent-blue-600" />
          <input type="range" min="0" max={slices} value={selected} onChange={(e) => setSelected(parseInt(e.target.value))} className="w-full accent-orange-500" />
        </div>
      </div>
    </div>
  );
};

const SymmetryLab = () => {
  const [grid, setGrid] = useState(Array(25).fill(false));
  const toggleCell = (idx) => {
    const row = Math.floor(idx / 5); const col = idx % 5;
    if (col === 2) return;
    const mirrorIdx = row * 5 + (4 - col);
    const newGrid = [...grid];
    const newVal = !newGrid[idx];
    newGrid[idx] = newVal; newGrid[mirrorIdx] = newVal;
    setGrid(newGrid);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 h-full flex flex-col animate-in fade-in zoom-in-95 duration-300">
      <h3 className="text-xl font-bold mb-4 text-slate-800 flex items-center gap-2"><Layout className="text-pink-500" /> Symmetry Grid</h3>
      <div className="flex-1 flex flex-col items-center justify-center mb-4">
        <div className="grid grid-cols-5 gap-1 bg-slate-200 p-1 rounded-lg shadow-inner">
          {grid.map((isActive, idx) => {
            const isCenter = idx % 5 === 2;
            return <div key={idx} onClick={() => toggleCell(idx)} className={`w-10 h-10 rounded-sm cursor-pointer transition-colors duration-300 ${isCenter ? 'bg-slate-800 shadow-md z-10' : isActive ? 'bg-pink-500' : 'bg-white hover:bg-pink-100'}`} />
          })}
        </div>
      </div>
      <div className="mt-auto flex justify-between items-center bg-pink-50 p-3 rounded-lg text-xs text-pink-800">
        <p><strong>Rule:</strong> Click to mirror cells!</p>
        <button onClick={() => setGrid(Array(25).fill(false))} className="bg-pink-200 px-3 py-1 rounded font-bold hover:bg-pink-300">Clear</button>
      </div>
    </div>
  );
};

const KnowingNumbersLab = () => {
  const [digits, setDigits] = useState([3, 1, 4, 2]); // TH, H, T, O
  const adjust = (index, delta) => {
    const newDigits = [...digits];
    newDigits[index] = Math.max(0, Math.min(9, newDigits[index] + delta));
    setDigits(newDigits);
  };
  const number = digits[0]*1000 + digits[1]*100 + digits[2]*10 + digits[3];

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 h-full flex flex-col animate-in fade-in zoom-in-95 duration-300">
      <h3 className="text-xl font-bold mb-4 text-slate-800 flex items-center gap-2"><Hash className="text-indigo-500" /> Knowing Numbers</h3>
      <div className="flex justify-between bg-slate-100 p-4 rounded-xl mb-4">
        {['Thousands', 'Hundreds', 'Tens', 'Ones'].map((label, idx) => (
          <div key={label} className="flex flex-col items-center gap-2">
            <button onClick={() => adjust(idx, 1)} className="text-indigo-600 bg-white shadow rounded px-2 hover:bg-indigo-50 active:scale-95">▲</button>
            <span className="text-3xl font-black text-slate-800">{digits[idx]}</span>
            <button onClick={() => adjust(idx, -1)} className="text-indigo-600 bg-white shadow rounded px-2 hover:bg-indigo-50 active:scale-95">▼</button>
            <span className="text-[10px] font-bold text-slate-400 uppercase">{label}</span>
          </div>
        ))}
      </div>
      <div className="mt-auto space-y-2">
        <div className="bg-indigo-50 p-2 rounded text-sm text-indigo-900 border border-indigo-100 flex justify-between">
          <span className="font-bold">Standard Form:</span>
          <span className="font-black text-lg">{number.toLocaleString('en-IN')}</span>
        </div>
        <div className="bg-indigo-50 p-2 rounded text-xs text-indigo-900 border border-indigo-100">
          <span className="font-bold block mb-1">Expanded Form:</span>
          {digits[0]*1000} + {digits[1]*100} + {digits[2]*10} + {digits[3]}
        </div>
      </div>
    </div>
  );
};

const AlgebraLab = () => {
  const [boxCount, setBoxCount] = useState(3);
  const [rightCount, setRightCount] = useState(8);
  const isSolved = boxCount === 0;
  const tilt = isSolved ? 0 : (boxCount > 0 ? -5 : 5); 

  const subtractBoth = () => { if (boxCount > 0 && rightCount > 0) { setBoxCount(b => b - 1); setRightCount(r => r - 1); } };
  const reset = () => { setBoxCount(3); setRightCount(8); };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 h-full flex flex-col animate-in fade-in zoom-in-95 duration-300">
      <h3 className="text-xl font-bold mb-4 text-slate-800 flex items-center gap-2"><Scale className="text-teal-500" /> Basic Algebra</h3>
      <div className="flex-1 bg-slate-50 rounded-xl mb-4 relative overflow-hidden flex flex-col items-center justify-end pb-8 border border-slate-200">
        <div className="text-lg font-black text-slate-700 mb-8 font-mono bg-white px-4 py-1 rounded shadow-sm border">
          x {boxCount > 0 && `+ ${boxCount}`} = {rightCount}
        </div>
        <div className="relative w-48 h-2">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-16 bg-slate-300 -mt-16 rounded-t-full"></div>
           <div className="w-full h-2 bg-slate-400 rounded-full origin-center transition-transform duration-500" style={{ transform: `rotate(${tilt}deg)` }}>
              <div className="absolute -top-12 left-0 w-16 h-12 border-b-2 border-slate-300 flex items-end justify-center gap-1 pb-1">
                 <div className="w-6 h-6 bg-teal-500 text-white font-bold flex items-center justify-center text-xs shadow-md rounded-sm">x</div>
                 {Array.from({length: boxCount}).map((_, i) => <div key={i} className="w-3 h-3 bg-amber-400 rounded-full shadow-sm"></div>)}
              </div>
              <div className="absolute -top-12 right-0 w-16 h-12 border-b-2 border-slate-300 flex items-end justify-center flex-wrap gap-1 pb-1 px-1">
                {Array.from({length: rightCount}).map((_, i) => <div key={i} className="w-3 h-3 bg-amber-400 rounded-full shadow-sm"></div>)}
              </div>
           </div>
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[15px] border-b-slate-500 mt-2"></div>
        </div>
      </div>
      <div className="mt-auto flex gap-2">
        <button onClick={subtractBoth} disabled={isSolved} className="flex-1 bg-teal-100 text-teal-800 font-bold py-2 rounded-lg disabled:opacity-50 hover:bg-teal-200 active:scale-95 transition-all">
          {isSolved ? "Solved! x = 5" : "-1 from both sides"}
        </button>
        {isSolved && <button onClick={reset} className="bg-slate-200 p-2 rounded-lg hover:bg-slate-300"><RefreshCcw size={18}/></button>}
      </div>
    </div>
  );
};

// ==========================================
// --- CLASS 7 SIMULATIONS ---
// ==========================================

const NutritionPlantsLab = () => {
  const [sun, setSun] = useState(false);
  const [water, setWater] = useState(false);
  const [co2, setCo2] = useState(false);
  const isAlive = sun && water && co2;

  return (
    <div className="bg-emerald-900 p-6 rounded-xl text-white h-full flex flex-col animate-in fade-in zoom-in-95 duration-300">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Leaf className="text-emerald-400" /> Photosynthesis</h3>
      <div className="flex-1 bg-emerald-950 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden border border-emerald-800">
        <div className={`transition-all duration-1000 ${isAlive ? 'scale-125' : 'scale-75 opacity-50 grayscale'}`}>
          <div className="text-6xl">🪴</div>
        </div>
        {sun && <div className="absolute top-2 right-2 text-3xl animate-spin-slow">☀️</div>}
        {water && <div className="absolute bottom-2 left-2 text-2xl animate-bounce">💧</div>}
        {co2 && <div className="absolute top-4 left-4 text-xs font-bold text-slate-400 animate-pulse">CO₂</div>}
      </div>
      <div className="mt-auto flex justify-between gap-2">
        <button onClick={() => setSun(!sun)} className={`flex-1 py-2 rounded-lg text-xs font-bold ${sun ? 'bg-yellow-500 text-slate-900' : 'bg-slate-700'}`}>Sunlight</button>
        <button onClick={() => setWater(!water)} className={`flex-1 py-2 rounded-lg text-xs font-bold ${water ? 'bg-blue-500 text-white' : 'bg-slate-700'}`}>Water</button>
        <button onClick={() => setCo2(!co2)} className={`flex-1 py-2 rounded-lg text-xs font-bold ${co2 ? 'bg-slate-400 text-slate-900' : 'bg-slate-700'}`}>CO₂</button>
      </div>
    </div>
  );
};

const AcidBaseLab = () => {
  const [paperColor, setPaperColor] = useState('#e2e8f0');
  const [msg, setMsg] = useState('Select solution to test!');

  const test = (type) => {
    if (type === 'acid') { setPaperColor('#ef4444'); setMsg('Lemon Juice is ACIDIC (Red)'); }
    else if (type === 'base') { setPaperColor('#3b82f6'); setMsg('Soap is BASIC (Blue)'); }
    else { setPaperColor('#a855f7'); setMsg('Water is NEUTRAL (Purple)'); }
  };

  return (
    <div className="bg-slate-900 p-6 rounded-xl text-white h-full flex flex-col animate-in fade-in zoom-in-95 duration-300">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Droplets className="text-cyan-400" /> Acids & Bases</h3>
      <div className="relative h-40 bg-slate-800 rounded-lg border-2 border-dashed border-slate-600 flex items-end justify-center gap-6 pb-4 overflow-hidden mb-4 shrink-0">
        <div className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <div className="w-8 h-12 rounded-sm shadow-lg transition-colors duration-500 border border-white/20" style={{ backgroundColor: paperColor }}></div>
            <span className="text-[10px] mt-1 font-bold text-slate-400">Litmus</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer group" onClick={() => test('acid')}>
          <div className="w-12 h-16 border-x-2 border-b-2 border-white/50 rounded-b-lg relative overflow-hidden"><div className="absolute bottom-0 w-full h-8 bg-yellow-400/60 group-hover:h-10 transition-all"></div></div>
          <span className="text-[10px] mt-1">Lemon</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer group" onClick={() => test('neutral')}>
          <div className="w-12 h-16 border-x-2 border-b-2 border-white/50 rounded-b-lg relative overflow-hidden"><div className="absolute bottom-0 w-full h-10 bg-cyan-400/40 group-hover:h-12 transition-all"></div></div>
          <span className="text-[10px] mt-1">Water</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer group" onClick={() => test('base')}>
          <div className="w-12 h-16 border-x-2 border-b-2 border-white/50 rounded-b-lg relative overflow-hidden"><div className="absolute bottom-0 w-full h-6 bg-green-500/50 group-hover:h-8 transition-all"></div></div>
          <span className="text-[10px] mt-1">Soap</span>
        </div>
      </div>
      <div className="mt-auto bg-slate-800 p-2 rounded-lg text-xs text-center font-bold text-slate-300">{msg}</div>
    </div>
  );
};

const HeatLab = () => {
  const [temp, setTemp] = useState(20);
  return (
    <div className="bg-red-900 p-6 rounded-xl text-white h-full flex flex-col animate-in fade-in zoom-in-95 duration-300">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Thermometer className="text-red-400" /> Heat & Temp</h3>
      <div className="flex-1 flex items-center justify-center mb-4">
        <div className="w-8 h-32 bg-white/20 rounded-full relative p-1 border-2 border-white/40 flex flex-col justify-end overflow-hidden">
          <div className="w-full bg-red-500 rounded-full transition-all duration-300" style={{ height: `${temp}%` }}></div>
        </div>
        <div className="ml-4 text-3xl font-black">{temp}°C</div>
      </div>
      <div className="mt-auto">
        <input type="range" min="0" max="100" value={temp} onChange={(e) => setTemp(e.target.value)} className="w-full accent-red-500" />
      </div>
    </div>
  );
};

const MotionLab = () => {
  const [speed, setSpeed] = useState(2);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => { setTime(t => (t + 1) % 20); }, 500);
    return () => clearInterval(timer);
  }, []);

  const distance = (speed * time) % 100;

  return (
    <div className="bg-slate-900 p-6 rounded-xl text-white h-full flex flex-col animate-in fade-in zoom-in-95 duration-300">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Car className="text-blue-400" /> Motion tracking</h3>
      <div className="flex-1 relative border-b-4 border-slate-600 mb-4 flex items-end">
        <div className="absolute text-3xl transition-all duration-300 ease-linear" style={{ left: `${distance}%` }}>🚗</div>
      </div>
      <div className="mt-auto">
        <div className="flex justify-between text-xs mb-1"><span>Speed: {speed} m/s</span><span>Dist: {speed * time}m</span></div>
        <input type="range" min="1" max="5" value={speed} onChange={(e) => setSpeed(e.target.value)} className="w-full accent-blue-500" />
      </div>
    </div>
  );
};

const IntegerNumberLine = () => {
  const [pos, setPos] = useState(0);
  const move = (amt) => setPos(p => Math.max(-10, Math.min(10, p + amt)));

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 h-full flex flex-col animate-in fade-in zoom-in-95 duration-300">
      <h3 className="text-xl font-bold mb-4 text-slate-800 flex items-center gap-2"><MoveHorizontal className="text-indigo-600" /> Integers</h3>
      <div className="relative h-24 w-full bg-slate-50 rounded-xl mb-4 flex items-center justify-center shrink-0">
          <svg viewBox="0 0 400 100" className="w-full h-full">
              <line x1="20" y1="50" x2="380" y2="50" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
              {Array.from({length: 21}).map((_, i) => (
                  <g key={i}>
                      <line x1={20 + (i * 18)} y1="45" x2={20 + (i * 18)} y2="55" stroke={i===10 ? "#334155" : "#cbd5e1"} strokeWidth={i===10 ? "3" : "2"} />
                      {i % 2 === 0 && <text x={20 + (i * 18)} y="75" textAnchor="middle" fill="#64748b" fontSize="10">{i-10}</text>}
                  </g>
              ))}
              <circle cx={20 + ((pos + 10) * 18)} cy="50" r="8" fill="#4f46e5" className="transition-all duration-500" />
              <text x={20 + ((pos + 10) * 18)} y="30" textAnchor="middle" fill="#4f46e5" fontSize="14" fontWeight="bold" className="transition-all duration-500">{pos}</text>
          </svg>
      </div>
      <div className="grid grid-cols-4 gap-2 mb-2 mt-auto">
          <button onClick={() => move(-5)} className="bg-red-100 text-red-700 py-2 rounded-lg font-bold active:scale-95">-5</button>
          <button onClick={() => move(-1)} className="bg-red-50 text-red-600 py-2 rounded-lg font-bold active:scale-95">-1</button>
          <button onClick={() => move(1)} className="bg-green-50 text-green-600 py-2 rounded-lg font-bold active:scale-95">+1</button>
          <button onClick={() => move(5)} className="bg-green-100 text-green-700 py-2 rounded-lg font-bold active:scale-95">+5</button>
      </div>
    </div>
  );
};

const DecimalsLab = () => {
  const [tenths, setTenths] = useState(2);
  const [hundredths, setHundredths] = useState(5);
  const total = (tenths * 0.1 + hundredths * 0.01).toFixed(2);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 h-full flex flex-col animate-in fade-in zoom-in-95 duration-300">
      <h3 className="text-xl font-bold mb-4 text-slate-800 flex items-center gap-2"><Calculator className="text-orange-500" /> Decimals</h3>
      <div className="flex justify-between items-center bg-slate-50 p-2 rounded-lg mb-4">
        <span className="font-bold text-slate-600 text-sm">Value:</span>
        <div className="font-black text-xl text-orange-600">{total}</div>
      </div>
      <div className="mt-auto space-y-3">
        <div>
          <label className="text-xs font-bold text-slate-500">Tenths (0.1) : {tenths}</label>
          <input type="range" min="0" max="9" value={tenths} onChange={(e) => setTenths(Number(e.target.value))} className="w-full accent-orange-500" />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-500">Hundredths (0.01) : {hundredths}</label>
          <input type="range" min="0" max="9" value={hundredths} onChange={(e) => setHundredths(Number(e.target.value))} className="w-full accent-orange-300" />
        </div>
      </div>
    </div>
  );
};

const SimpleEquationsLab = () => {
  const [x, setX] = useState(0);
  const ans = 2 * x + 5;
  const isCorrect = ans === 15;

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 h-full flex flex-col animate-in fade-in zoom-in-95 duration-300">
      <h3 className="text-xl font-bold mb-4 text-slate-800 flex items-center gap-2"><Scale className="text-teal-500" /> Find 'x'</h3>
      <div className="flex-1 flex flex-col items-center justify-center bg-slate-50 rounded-xl mb-4 border border-slate-200 p-4 text-center">
        <p className="text-sm font-bold text-slate-500 mb-2">Equation:</p>
        <p className="text-2xl font-black font-mono">2x + 5 = 15</p>
        <div className={`mt-4 px-4 py-2 rounded-full text-sm font-bold ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-slate-200 text-slate-600'}`}>
          {isCorrect ? '🎉 Correct! x = 5' : `Currently: 2(${x}) + 5 = ${ans}`}
        </div>
      </div>
      <div className="mt-auto">
        <input type="range" min="0" max="10" value={x} onChange={(e) => setX(Number(e.target.value))} className="w-full accent-teal-500" />
      </div>
    </div>
  );
};

const TrianglesLab = () => {
  const [a, setA] = useState(60);
  const [b, setB] = useState(60);
  const c = 180 - a - b;

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 h-full flex flex-col animate-in fade-in zoom-in-95 duration-300">
      <h3 className="text-xl font-bold mb-4 text-slate-800 flex items-center gap-2"><Triangle className="text-pink-500" /> Angle Sum</h3>
      <div className="flex-1 flex items-center justify-center bg-slate-50 rounded-xl mb-4 border border-slate-200 relative overflow-hidden">
         {c > 0 ? (
           <svg viewBox="0 0 100 100" className="w-24 h-24 stroke-pink-500 stroke-2 fill-pink-100">
             <polygon points="10,90 90,90 50,10" />
           </svg>
         ) : <span className="text-xs font-bold text-red-500">Invalid Triangle!</span>}
      </div>
      <div className="mt-auto space-y-2">
        <div className="flex justify-between text-xs font-bold text-slate-600"><span>∠A: {a}°</span><span>∠B: {b}°</span><span>∠C: {c}°</span></div>
        <input type="range" min="10" max="150" value={a} onChange={(e) => setA(Number(e.target.value))} className="w-full accent-pink-500" />
        <input type="range" min="10" max="150" value={b} onChange={(e) => setB(Number(e.target.value))} className="w-full accent-pink-400" />
      </div>
    </div>
  );
};


// ==========================================
// --- CLASS 8 SIMULATIONS ---
// ==========================================

const MicroorganismsLab = () => {
  const [type, setType] = useState('Bacteria');
  const details = {
    'Bacteria': { icon: '🦠', desc: 'Single-celled, shapes like rods or spheres.' },
    'Fungi': { icon: '🍄', desc: 'Molds and mushrooms, absorb nutrients.' },
    'Virus': { icon: '👾', desc: 'Require a living host cell to multiply.' }
  };

  return (
    <div className="bg-slate-900 p-6 rounded-xl text-white h-full flex flex-col animate-in fade-in zoom-in-95 duration-300">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Bug className="text-green-400" /> Micro Lens</h3>
      <div className="flex-1 bg-black rounded-full border-4 border-slate-700 flex flex-col items-center justify-center mb-4 relative shadow-inner overflow-hidden aspect-square mx-auto w-32">
        <span className="text-6xl animate-pulse">{details[type].icon}</span>
      </div>
      <p className="text-xs text-center text-slate-300 mb-4 h-8">{details[type].desc}</p>
      <div className="mt-auto flex gap-2">
        {['Bacteria', 'Fungi', 'Virus'].map(t => (
          <button key={t} onClick={() => setType(t)} className={`flex-1 py-1 text-xs rounded font-bold ${type === t ? 'bg-green-500 text-slate-900' : 'bg-slate-700'}`}>{t}</button>
        ))}
      </div>
    </div>
  );
};

const LightReflectionLab = () => {
  const [angle, setAngle] = useState(45);
  const cx = 200, cy = 150, r = 140;
  const inRad = (90 + angle) * (Math.PI / 180), outRad = (90 - angle) * (Math.PI / 180);
  const inX = cx - r * Math.cos(inRad), inY = cy - r * Math.sin(inRad);
  const outX = cx + r * Math.cos(outRad), outY = cy - r * Math.sin(outRad);

  return (
    <div className="bg-slate-900 p-6 rounded-xl text-white h-full flex flex-col animate-in fade-in zoom-in-95 duration-300">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Sun className="text-amber-400" /> Reflection</h3>
      <div className="relative h-40 bg-black rounded-lg border border-slate-700 flex items-center justify-center overflow-hidden mb-4 shrink-0">
        <svg viewBox="0 0 400 200" className="w-full h-full">
          <line x1="200" y1="20" x2="200" y2="150" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 4" />
          <line x1="50" y1="150" x2="350" y2="150" stroke="#94a3b8" strokeWidth="6" strokeLinecap="round" />
          <line x1={inX} y1={inY} x2={cx} y2={cy} stroke="#ef4444" strokeWidth="4" />
          <line x1={cx} y1={cy} x2={outX} y2={outY} stroke="#3b82f6" strokeWidth="4" />
          <text x={cx - 35} y={cy - 20} fill="#ef4444" fontSize="12">∠i={angle}°</text>
          <text x={cx + 10} y={cy - 20} fill="#3b82f6" fontSize="12">∠r={angle}°</text>
        </svg>
      </div>
      <div className="mt-auto">
        <input type="range" min="10" max="80" value={angle} onChange={(e) => setAngle(Number(e.target.value))} className="w-full accent-amber-500" />
      </div>
    </div>
  );
};

const ForceLab = () => {
  const [leftF, setLeftF] = useState(10);
  const [rightF, setRightF] = useState(10);
  const net = leftF - rightF;

  return (
    <div className="bg-slate-900 p-6 rounded-xl text-white h-full flex flex-col animate-in fade-in zoom-in-95 duration-300">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><MoveHorizontal className="text-indigo-400" /> Net Force</h3>
      <div className="flex-1 bg-slate-800 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
        {/* Forces */}
        <div className="absolute left-4 flex items-center gap-1 text-red-400 font-bold text-xs"><span className="w-8 h-1 bg-red-400 block"></span> {leftF}N</div>
        <div className="absolute right-4 flex items-center gap-1 text-blue-400 font-bold text-xs">{rightF}N <span className="w-8 h-1 bg-blue-400 block"></span></div>
        {/* Block */}
        <div className="w-16 h-16 bg-slate-400 rounded-md transition-transform duration-500" style={{ transform: `translateX(${net * 2}px)` }}></div>
      </div>
      <div className="mt-auto space-y-2">
        <div className="text-center text-xs font-bold mb-2">Net Force: {Math.abs(net)}N {net > 0 ? 'Right ➡️' : net < 0 ? '⬅️ Left' : 'Balanced'}</div>
        <div className="flex gap-4">
          <input type="range" min="0" max="20" value={leftF} onChange={e=>setLeftF(Number(e.target.value))} className="w-full accent-red-500" />
          <input type="range" min="0" max="20" value={rightF} onChange={e=>setRightF(Number(e.target.value))} className="w-full accent-blue-500" />
        </div>
      </div>
    </div>
  );
};

const SoundLab = () => {
  const [freq, setFreq] = useState(3);
  const points = Array.from({length: 100}).map((_, i) => `${i*4},${50 + Math.sin(i * freq * 0.1) * 30}`).join(' L ');

  return (
    <div className="bg-slate-900 p-6 rounded-xl text-white h-full flex flex-col animate-in fade-in zoom-in-95 duration-300">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Activity className="text-pink-400" /> Sound Waves</h3>
      <div className="flex-1 bg-black rounded-lg mb-4 flex items-center overflow-hidden border border-slate-700">
        <svg viewBox="0 0 400 100" className="w-full h-full">
          <path d={`M 0,50 L ${points}`} stroke="#f472b6" fill="none" strokeWidth="3" />
        </svg>
      </div>
      <div className="mt-auto">
        <label className="text-xs text-slate-400">Frequency (Pitch)</label>
        <input type="range" min="1" max="10" value={freq} onChange={(e) => setFreq(Number(e.target.value))} className="w-full accent-pink-500 mt-1" />
      </div>
    </div>
  );
};

const RationalNumbersLab = () => {
  const [num, setNum] = useState(3);
  const [den, setDen] = useState(4);
  const dec = (num / den).toFixed(2);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 h-full flex flex-col animate-in fade-in zoom-in-95 duration-300">
      <h3 className="text-xl font-bold mb-4 text-slate-800 flex items-center gap-2"><Calculator className="text-purple-600" /> Rational p/q</h3>
      <div className="flex-1 flex flex-col items-center justify-center bg-slate-50 rounded-xl mb-4 border border-slate-200 p-4 text-center">
        <div className="text-3xl font-black text-purple-700 border-b-4 border-purple-700 pb-1 mb-1">{num}</div>
        <div className="text-3xl font-black text-purple-700">{den}</div>
        <div className="mt-4 px-4 py-2 bg-purple-100 rounded-full text-purple-800 font-bold text-sm">= {dec}</div>
      </div>
      <div className="mt-auto flex gap-4">
        <input type="range" min="-5" max="5" value={num} onChange={e=>setNum(Number(e.target.value))} className="w-full accent-purple-500" />
        <input type="range" min="1" max="5" value={den} onChange={e=>setDen(Number(e.target.value))} className="w-full accent-purple-300" />
      </div>
    </div>
  );
};

const LinearEquationsLab = () => {
  const [m, setM] = useState(1);
  const [c, setC] = useState(0);
  
  // y = mx + c. Origin is at 50,50. scale is 10px = 1 unit.
  const y1 = 50 - (m * (-5) + c) * 10;
  const y2 = 50 - (m * (5) + c) * 10;

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 h-full flex flex-col animate-in fade-in zoom-in-95 duration-300">
      <h3 className="text-xl font-bold mb-4 text-slate-800 flex items-center gap-2"><LineChart className="text-blue-500" /> Linear Graphs</h3>
      <div className="relative h-32 bg-slate-50 rounded-xl mb-4 border border-slate-200 overflow-hidden shrink-0">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <line x1="50" y1="0" x2="50" y2="100" stroke="#cbd5e1" strokeWidth="1" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="#cbd5e1" strokeWidth="1" />
          <line x1="0" y1={y1} x2="100" y2={y2} stroke="#3b82f6" strokeWidth="2" />
        </svg>
      </div>
      <div className="text-center font-bold font-mono text-sm mb-2 text-blue-700">y = {m}x + {c}</div>
      <div className="mt-auto flex gap-4">
        <div className="w-full"><label className="text-[10px] text-slate-400 block">Slope (m)</label><input type="range" min="-3" max="3" value={m} onChange={e=>setM(Number(e.target.value))} className="w-full accent-blue-600" /></div>
        <div className="w-full"><label className="text-[10px] text-slate-400 block">Intercept (c)</label><input type="range" min="-3" max="3" value={c} onChange={e=>setC(Number(e.target.value))} className="w-full accent-blue-400" /></div>
      </div>
    </div>
  );
};

const ExponentsLab = () => {
  const [exp, setExp] = useState(2);
  const val = Math.pow(2, exp);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 h-full flex flex-col animate-in fade-in zoom-in-95 duration-300">
      <h3 className="text-xl font-bold mb-4 text-slate-800 flex items-center gap-2"><Hash className="text-green-600" /> Exponents</h3>
      <div className="flex-1 flex flex-col items-center justify-center bg-slate-50 rounded-xl mb-4 border border-slate-200 p-2 overflow-hidden">
        <div className="text-2xl font-black text-slate-700 mb-2">2<sup className="text-green-600">{exp}</sup> = {val}</div>
        <div className="flex flex-wrap gap-1 justify-center max-w-[150px]">
          {Array.from({length: val}).map((_, i) => <div key={i} className="w-4 h-4 bg-green-500 rounded-sm shadow-sm animate-in zoom-in"></div>)}
        </div>
      </div>
      <div className="mt-auto">
        <input type="range" min="0" max="5" value={exp} onChange={e=>setExp(Number(e.target.value))} className="w-full accent-green-600" />
      </div>
    </div>
  );
};

const GraphsLab = () => {
  const [d1, setD1] = useState(40);
  const [d2, setD2] = useState(80);
  const [d3, setD3] = useState(60);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 h-full flex flex-col animate-in fade-in zoom-in-95 duration-300">
      <h3 className="text-xl font-bold mb-4 text-slate-800 flex items-center gap-2"><BarChart className="text-red-500" /> Bar Graphs</h3>
      <div className="flex-1 flex items-end justify-center gap-4 bg-slate-50 rounded-xl mb-4 border border-slate-200 p-4 h-32 shrink-0">
        <div className="w-8 bg-red-400 rounded-t transition-all duration-300 relative group" style={{height: `${d1}%`}}><span className="absolute -top-5 left-1 text-xs font-bold text-red-600">{d1}</span></div>
        <div className="w-8 bg-blue-400 rounded-t transition-all duration-300 relative group" style={{height: `${d2}%`}}><span className="absolute -top-5 left-1 text-xs font-bold text-blue-600">{d2}</span></div>
        <div className="w-8 bg-green-400 rounded-t transition-all duration-300 relative group" style={{height: `${d3}%`}}><span className="absolute -top-5 left-1 text-xs font-bold text-green-600">{d3}</span></div>
      </div>
      <div className="mt-auto flex gap-2">
        <input type="range" min="10" max="100" value={d1} onChange={e=>setD1(Number(e.target.value))} className="w-full accent-red-500" />
        <input type="range" min="10" max="100" value={d2} onChange={e=>setD2(Number(e.target.value))} className="w-full accent-blue-500" />
        <input type="range" min="10" max="100" value={d3} onChange={e=>setD3(Number(e.target.value))} className="w-full accent-green-500" />
      </div>
    </div>
  );
};


// --- Placeholder ---
const Placeholder = ({ name }) => (
  <div className="bg-slate-100 p-6 rounded-xl border-2 border-dashed border-slate-300 h-full flex flex-col items-center justify-center text-slate-400 min-h-[300px] animate-in fade-in">
    <AlertCircle size={48} className="mb-4 opacity-50" />
    <p className="font-bold text-center">{name}</p>
    <p className="text-sm">Lab coming soon!</p>
  </div>
);


// ==========================================
// --- MAIN APP COMPONENT ---
// ==========================================

export default function App() {
  const [activeGrade, setActiveGrade] = useState(6);
  const [activeTab, setActiveTab] = useState('home');
  const [activeSim, setActiveSim] = useState("Electricity");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const grades = [6, 7, 8];

  const contentInfo = {
    6: {
      science: ["Components of Food", "Sorting Materials", "Electricity", "Magnets"],
      math: ["Knowing Numbers", "Fractions", "Algebra", "Symmetry"]
    },
    7: {
      science: ["Nutrition in Plants", "Acids & Bases", "Heat", "Motion"],
      math: ["Integers", "Decimals", "Simple Equations", "Triangles"]
    },
    8: {
      science: ["Microorganisms", "Light & Reflection", "Force", "Sound"],
      math: ["Rational Numbers", "Linear Equations", "Exponents", "Graphs"]
    }
  };

  // Switch default simulation when grade changes
  useEffect(() => {
    setActiveSim(contentInfo[activeGrade].science[0]);
  }, [activeGrade]);

  const renderActiveSimulation = () => {
    switch (activeSim) {
      // Grade 6
      case "Electricity": return <ElectricCircuitSim />;
      case "Components of Food": return <FoodComponentsLab />;
      case "Sorting Materials": return <SortingLab />;
      case "Magnets": return <MagnetLab />;
      case "Knowing Numbers": return <KnowingNumbersLab />;
      case "Fractions": return <FractionLab />;
      case "Algebra": return <AlgebraLab />;
      case "Symmetry": return <SymmetryLab />;
      // Grade 7
      case "Nutrition in Plants": return <NutritionPlantsLab />;
      case "Acids & Bases": return <AcidBaseLab />;
      case "Heat": return <HeatLab />;
      case "Motion": return <MotionLab />;
      case "Integers": return <IntegerNumberLine />;
      case "Decimals": return <DecimalsLab />;
      case "Simple Equations": return <SimpleEquationsLab />;
      case "Triangles": return <TrianglesLab />;
      // Grade 8
      case "Microorganisms": return <MicroorganismsLab />;
      case "Light & Reflection": return <LightReflectionLab />;
      case "Force": return <ForceLab />;
      case "Sound": return <SoundLab />;
      case "Rational Numbers": return <RationalNumbersLab />;
      case "Linear Equations": return <LinearEquationsLab />;
      case "Exponents": return <ExponentsLab />;
      case "Graphs": return <GraphsLab />;
      // Fallback
      default: return <Placeholder name={activeSim} />;
    }
  };

  const handleTopicClick = (topicName) => {
    setActiveSim(topicName);
    window.scrollTo({ top: 350, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Mobile Nav */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <BookOpen className="text-white w-5 h-5" />
          </div>
          <h1 className="font-bold text-xl tracking-tight text-blue-950">EduSpark</h1>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <button onClick={() => setActiveTab('home')} className={`text-sm font-semibold transition-colors ${activeTab === 'home' ? 'text-blue-600' : 'text-slate-500 hover:text-blue-400'}`}>Dashboard</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md shadow-blue-200 hover:bg-blue-700 active:scale-95 transition-all">Sign Up</button>
        </div>

        <button className="md:hidden p-2 text-slate-600" onClick={() => setShowMobileMenu(!showMobileMenu)}>
          {showMobileMenu ? <X /> : <Menu />}
        </button>
      </nav>

      {showMobileMenu && (
        <div className="fixed inset-0 z-40 bg-white p-6 pt-20 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4">
          <button onClick={() => {setActiveTab('home'); setShowMobileMenu(false)}} className="text-lg font-bold text-left">Dashboard</button>
          <hr className="border-slate-100" />
          <div className="space-y-4">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Switch Grade</p>
            <div className="flex gap-2">
              {grades.map(g => (
                <button key={g} onClick={() => {setActiveGrade(g); setShowMobileMenu(false);}} className={`flex-1 py-3 rounded-xl font-bold transition-all ${activeGrade === g ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-100 text-slate-600'}`}>
                  Grade {g}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <main className="max-w-5xl mx-auto p-4 md:p-8 space-y-8">
        
        {/* Hero Section */}
        <header className="bg-gradient-to-br from-blue-700 to-indigo-800 rounded-3xl p-8 text-white shadow-xl overflow-hidden relative">
          <div className="relative z-10 space-y-4 max-w-md">
            <div className="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              NCERT Grade {activeGrade}
            </div>
            <h2 className="text-3xl md:text-4xl font-black leading-tight">Interactive Learning Adventure</h2>
            <p className="text-blue-100 text-sm md:text-base opacity-90">Click on any module from the lists below to load its interactive simulation!</p>
          </div>
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 right-20 w-48 h-48 bg-indigo-400/20 rounded-full blur-3xl"></div>
        </header>

        {/* Grade Selector (Desktop) */}
        <div className="hidden md:flex justify-center gap-4">
          {grades.map(g => (
            <button key={g} onClick={() => setActiveGrade(g)} className={`px-8 py-3 rounded-2xl font-bold transition-all ${activeGrade === g ? 'bg-blue-600 text-white scale-105 shadow-lg shadow-blue-200' : 'bg-white text-slate-400 hover:bg-slate-50 border border-transparent hover:border-slate-200'}`}>
              Grade {g}
            </button>
          ))}
        </div>

        {/* Featured Simulation Section */}
        <section className="space-y-4 bg-blue-50 p-6 rounded-3xl border border-blue-100">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-xl font-bold flex items-center gap-2 text-blue-900">
                <Trophy className="text-yellow-500" /> Featured Lab: {activeSim}
            </h3>
          </div>
          <div className="w-full max-w-xl mx-auto items-stretch">
            {/* The dynamically selected component */}
            {renderActiveSimulation()}
          </div>
        </section>

        {/* Topic Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="space-y-4">
            <h4 className="font-bold px-2 flex items-center gap-2 text-slate-700"><BookOpen size={20} className="text-green-500" /> Science Modules</h4>
            <div className="grid grid-cols-1 gap-3">
              {contentInfo[activeGrade].science.map((item, idx) => (
                <div key={idx} onClick={() => handleTopicClick(item)} className={`p-4 rounded-xl border flex items-center justify-between group transition-all cursor-pointer shadow-sm ${activeSim === item ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-md'}`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${activeSim === item ? 'bg-blue-500/50 text-white' : 'bg-green-50 text-green-600'}`}>{idx + 1}</div>
                    <span className={`font-semibold ${activeSim === item ? 'text-white' : 'text-slate-700'}`}>{item}</span>
                  </div>
                  <ChevronRight size={16} className={`transition-all ${activeSim === item ? 'text-white' : 'text-slate-300 group-hover:text-blue-500 translate-x-0 group-hover:translate-x-1'}`} />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold px-2 flex items-center gap-2 text-slate-700"><Calculator size={20} className="text-blue-500" /> Mathematics Modules</h4>
            <div className="grid grid-cols-1 gap-3">
              {contentInfo[activeGrade].math.map((item, idx) => (
                <div key={idx} onClick={() => handleTopicClick(item)} className={`p-4 rounded-xl border flex items-center justify-between group transition-all cursor-pointer shadow-sm ${activeSim === item ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-md'}`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold uppercase ${activeSim === item ? 'bg-blue-500/50 text-white' : 'bg-blue-50 text-blue-600'}`}>{String.fromCharCode(65 + idx)}</div>
                    <span className={`font-semibold ${activeSim === item ? 'text-white' : 'text-slate-700'}`}>{item}</span>
                  </div>
                  <ChevronRight size={16} className={`transition-all ${activeSim === item ? 'text-white' : 'text-slate-300 group-hover:text-blue-500 translate-x-0 group-hover:translate-x-1'}`} />
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 p-8 text-center mt-12">
          <div className="flex justify-center gap-6 text-slate-400 mb-4">
            <RefreshCcw size={18} className="cursor-pointer hover:text-blue-500 transition-colors" />
            <Lightbulb size={18} className="cursor-pointer hover:text-blue-500 transition-colors" />
            <Layout size={18} className="cursor-pointer hover:text-blue-500 transition-colors" />
          </div>
          <p className="text-xs text-slate-400 font-medium tracking-widest uppercase">EduSpark Interactive Lab • Curriculum Based on NCERT</p>
      </footer>
    </div>
  );
}