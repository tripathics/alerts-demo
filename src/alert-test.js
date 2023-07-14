import { useEffect, useState } from 'react';
import { useAlerts } from './alerts/alerts-context';

export default function AlertTestForm() {
  const initialFormData = { severity: 'info', message: '', timeout: 0 };
  const [formData, setFormData] = useState(initialFormData);
  const { addAlert, clearAlerts } = useAlerts();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let { severity, message, timeout } = formData;
    addAlert({ severity, message, timeout });
    setFormData(initialFormData);
  }

  useEffect(() => {
    return () => { clearAlerts(); }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form className="App-form" onSubmit={handleSubmit}>
      <label className="block text-sm font-medium text-gray-900 mt-6" htmlFor="severity">Alert severity</label>
      <select className="w-full" onChange={handleChange} value={formData.severity} required name="severity" id="severity">
        <option value="info">Info</option>
        <option value="success">Success</option>
        <option value="warning">Warning</option>
        <option value="error">Error</option>
      </select>

      <label className="block text-sm font-medium text-gray-900 mt-6" htmlFor="message">Alert message</label>
      <input onChange={handleChange} value={formData.message} className="w-full" type="text" name="message" id="message" required placeholder="Alert message" />

      <label className="block text-sm font-medium text-gray-900 mt-6" htmlFor="timeout">Timeout</label>
      <input onChange={handleChange} value={formData.timeout} min={0} className="w-full" type="number" required name="timeout" id="timeout" placeholder="Auto dismiss (in seconds)" />

      <button className="mt-6 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Show alert</button>
    </form>
  );
};