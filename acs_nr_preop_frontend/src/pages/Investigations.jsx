import React, { useState } from 'react';

/**
 * PUBLIC_INTERFACE
 * Investigations
 * Pre-op investigations with basic status fields and references.
 */
export default function Investigations() {
  const [form, setForm] = useState({
    labsDate: '',
    ecgDate: '',
    imaging: 'None',
    crossmatchUnits: '0',
    clearance: 'Not Required',
    comments: '',
  });

  const setField = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  return (
    <div className="form-grid">
      <div className="form-group col-4">
        <label htmlFor="labsDate">Labs Date</label>
        <input id="labsDate" type="date" value={form.labsDate} onChange={(e) => setField('labsDate', e.target.value)} />
      </div>
      <div className="form-group col-4">
        <label htmlFor="ecgDate">ECG Date</label>
        <input id="ecgDate" type="date" value={form.ecgDate} onChange={(e) => setField('ecgDate', e.target.value)} />
      </div>
      <div className="form-group col-4">
        <label htmlFor="imaging">Imaging</label>
        <select id="imaging" value={form.imaging} onChange={(e) => setField('imaging', e.target.value)}>
          <option>None</option>
          <option>X-Ray</option>
          <option>Ultrasound</option>
          <option>CT</option>
          <option>MRI</option>
        </select>
      </div>

      <div className="form-group col-4">
        <label htmlFor="crossmatch">Crossmatch Units</label>
        <select id="crossmatch" value={form.crossmatchUnits} onChange={(e) => setField('crossmatchUnits', e.target.value)}>
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>4</option>
        </select>
      </div>
      <div className="form-group col-4">
        <label htmlFor="clearance">Medical Clearance</label>
        <select id="clearance" value={form.clearance} onChange={(e) => setField('clearance', e.target.value)}>
          <option>Not Required</option>
          <option>Pending</option>
          <option>Received</option>
        </select>
      </div>
      <div className="form-group col-12">
        <label htmlFor="comments">Comments</label>
        <textarea id="comments" value={form.comments} onChange={(e) => setField('comments', e.target.value)} />
      </div>
    </div>
  );
}
