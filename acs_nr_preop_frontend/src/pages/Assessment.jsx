import React, { useState } from 'react';

/**
 * PUBLIC_INTERFACE
 * Assessment
 * Pre-op nursing assessment form with vitals and checklist.
 */
export default function Assessment() {
  const [form, setForm] = useState({
    height: '',
    weight: '',
    bmi: '',
    bpSystolic: '',
    bpDiastolic: '',
    pulse: '',
    fastingSince: '',
    lastOralIntake: '',
    airway: 'Normal',
    mobility: 'Independent',
    npoCompliant: false,
    ivAccess: false,
    valuablesSecured: false,
    comments: '',
  });

  const setField = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  return (
    <div className="form-grid">
      <div className="form-group col-3">
        <label htmlFor="height">Height (cm)</label>
        <input id="height" type="number" value={form.height} onChange={(e) => setField('height', e.target.value)} />
      </div>
      <div className="form-group col-3">
        <label htmlFor="weight">Weight (kg)</label>
        <input id="weight" type="number" value={form.weight} onChange={(e) => setField('weight', e.target.value)} />
      </div>
      <div className="form-group col-3">
        <label htmlFor="bmi">BMI</label>
        <input id="bmi" type="text" value={form.bmi} onChange={(e) => setField('bmi', e.target.value)} />
      </div>

      <div className="form-group col-3">
        <label htmlFor="airway">Airway</label>
        <select id="airway" value={form.airway} onChange={(e) => setField('airway', e.target.value)}>
          <option>Normal</option>
          <option>Difficult</option>
          <option>Restricted</option>
        </select>
      </div>

      <div className="form-group col-3">
        <label htmlFor="bpS">BP Systolic (mmHg)</label>
        <input id="bpS" type="number" value={form.bpSystolic} onChange={(e) => setField('bpSystolic', e.target.value)} />
      </div>
      <div className="form-group col-3">
        <label htmlFor="bpD">BP Diastolic (mmHg)</label>
        <input id="bpD" type="number" value={form.bpDiastolic} onChange={(e) => setField('bpDiastolic', e.target.value)} />
      </div>
      <div className="form-group col-3">
        <label htmlFor="pulse">Pulse (bpm)</label>
        <input id="pulse" type="number" value={form.pulse} onChange={(e) => setField('pulse', e.target.value)} />
      </div>

      <div className="form-group col-3">
        <label htmlFor="mobility">Mobility</label>
        <select id="mobility" value={form.mobility} onChange={(e) => setField('mobility', e.target.value)}>
          <option>Independent</option>
          <option>Assisted</option>
          <option>Wheelchair</option>
        </select>
      </div>

      <div className="form-group col-4">
        <label htmlFor="fasting">Fasting Since</label>
        <input id="fasting" type="text" placeholder="e.g., 6 hours" value={form.fastingSince} onChange={(e) => setField('fastingSince', e.target.value)} />
      </div>
      <div className="form-group col-4">
        <label htmlFor="lastIntake">Last Oral Intake</label>
        <input id="lastIntake" type="text" placeholder="e.g., 08:00 AM" value={form.lastOralIntake} onChange={(e) => setField('lastOralIntake', e.target.value)} />
      </div>

      <div className="card col-12">
        <div className="card-header">
          <div className="card-title">Pre-Op Checks</div>
          <div className="card-subtitle">Confirm pre-operative readiness</div>
        </div>
        <div className="form-grid">
          <div className="form-group col-4">
            <label>
              <input
                type="checkbox"
                checked={form.npoCompliant}
                onChange={(e) => setField('npoCompliant', e.target.checked)}
              />{' '}
              NPO Compliant
            </label>
          </div>
          <div className="form-group col-4">
            <label>
              <input
                type="checkbox"
                checked={form.ivAccess}
                onChange={(e) => setField('ivAccess', e.target.checked)}
              />{' '}
              IV Access Secured
            </label>
          </div>
          <div className="form-group col-4">
            <label>
              <input
                type="checkbox"
                checked={form.valuablesSecured}
                onChange={(e) => setField('valuablesSecured', e.target.checked)}
              />{' '}
              Valuables Secured
            </label>
          </div>
          <div className="form-group col-12">
            <label htmlFor="comments">Comments</label>
            <textarea id="comments" value={form.comments} onChange={(e) => setField('comments', e.target.value)} />
          </div>
        </div>
      </div>
    </div>
  );
}
