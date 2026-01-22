import React, { useState, useEffect } from 'react';
import Editor from './components/Editor';
import Visualizer from './components/Visualizer';
import { generateSimulation } from './utils/parser';

const DEFAULT_CODE = `int sayi = 10;
char harf = 'A';
sayi = 20;`;

function App() {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [simulation, setSimulation] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);

  const handleRun = () => {
    const result = generateSimulation(code);
    setSimulation(result);
    setCurrentStep(0); // Initialize at start (step_id 1 is at index 0 usually, or maybe we want an empty state 0)
    // Actually, usually "before execution" might be empty stack. 
    // The parser returns steps. Step 1 has code executed and resulting stack.
    // So let's say index -1 is empty, index 0 is first line executed.
  };

  const nextStep = () => {
    if (!simulation) return;
    if (currentStep < simulation.steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  useEffect(() => {
    handleRun();
  }, []); // Run on mount with default code

  const currentStackState = simulation && simulation.steps[currentStep]
    ? simulation.steps[currentStep].stack_state
    : [];

  const currentLine = simulation && simulation.steps[currentStep]
    ? simulation.steps[currentStep].code_executed
    : "";

  // Get line number from step or default to null
  const activeLineInfo = simulation && simulation.steps[currentStep]
    ? simulation.steps[currentStep].line_number : null;

  const handleReset = () => {
    setSimulation(null);
    setCurrentStep(0);
  };

  return (
    <div className="app-container">
      <header>
        <h1>Visual C Memory Visualizer <span className="beta-tag">MVP</span></h1>
      </header>

      <main className="main-content">
        <section className="left-pane">
          <Editor code={code} setCode={setCode} activeLine={activeLineInfo} />
          <div className="controls">
            <button className="btn run-btn" onClick={handleRun}>► Run / Refresh</button>
            {simulation && <button className="btn nav-btn" style={{ marginTop: '0.5rem', background: '#ef4444' }} onClick={handleReset}>Reset</button>}
          </div>
        </section>

        <section className="right-pane">
          <div className="simulation-controls">
            <button
              className="btn nav-btn"
              onClick={prevStep}
              disabled={!simulation || currentStep === 0}
            >
              Previous
            </button>
            <div className="step-indicator">
              Step {simulation ? currentStep + 1 : 0} / {simulation ? simulation.steps.length : 0}
              <br />
              <code className="current-line">{currentLine}</code>
            </div>
            <button
              className="btn nav-btn"
              onClick={nextStep}
              disabled={!simulation || currentStep === simulation.steps.length - 1}
            >
              Next
            </button>
          </div>

          <Visualizer stackState={currentStackState} />
        </section>
      </main>
    </div>
  );
}

export default App;
