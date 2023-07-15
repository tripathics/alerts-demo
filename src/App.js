import './App.css';
import './index.css';
import { useState } from 'react';
import AlertsProvider from './alerts/alerts-context';
import AlertTestForm from './alert-test';

function App() {
  const [showForm, setShowForm] = useState(true);

  return (
    <AlertsProvider>
      <div>
        <header className="App-header">
          <h1>Alerts Demo</h1>
        </header>
        <main className="App-main p-4 m-auto max-w-sm min-w-fit w-full">
          <button
            onClick={() => setShowForm((prev) => !prev)}
            className="mt-6 w-fit bg-gray-200 border-gray-700 border-2 hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded"
            type="button">
            {showForm ? 'Unmount ' : 'Mount '} form
          </button>
          {showForm && <AlertTestForm />}
        </main>
      </div>
    </AlertsProvider>
  );
}

export default App;