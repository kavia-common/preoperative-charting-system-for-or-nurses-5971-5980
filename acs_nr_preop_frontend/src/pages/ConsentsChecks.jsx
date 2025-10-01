import React, { useState } from 'react';

/**
 * PUBLIC_INTERFACE
 * ConsentsChecks
 * Surgical consent and safety checks confirmation.
 */
export default function ConsentsChecks() {
  const [form, setForm] = useState({
    consentSigned: false,
    consentDate: '',
    procedureVerified: false,
    siteMarked: false,
    timeoutPlanned: false,
    prosthesisAvailable: false,
    anticoagulantHeld: false,
    pregnancyTestDone: false,
    comments: '',
  });

  const setField = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  return (
    <div className="form-grid">
      <div className="card col-12">
        <div className="card-header">
          <div className="card-title">Consent</div>
          <div className="card-subtitle">Documentation and verification</div>
        </div>
        <div className="form-grid">
          <div className="form-group col-4">
            <label>
              <input
                type="checkbox"
                checked={form.consentSigned}
                onChange={(e) => setField('consentSigned', e.target.checked)}
              />{' '}
              Consent Signed
            </label>
          </div>
          <div className="form-group col-4">
            <label htmlFor="consentDate">Consent Date</label>
            <input id="consentDate" type="date" value={form.consentDate} onChange={(e) => setField('consentDate', e.target.value)} />
          </div>
          <div className="form-group col-4">
            <label>
              <input
                type="checkbox"
                checked={form.procedureVerified}
                onChange={(e) => setField('procedureVerified', e.target.checked)}
              />{' '}
              Procedure Verified
            </label>
          </div>
        </div>
      </div>

      <div className="card col-12">
        <div className="card-header">
          <div className="card-title">Safety Checks</div>
          <div className="card-subtitle">WHO checklist items</div>
        </div>
        <div className="form-grid">
          <div className="form-group col-4">
            <label>
              <input
                type="checkbox"
                checked={form.siteMarked}
                onChange={(e) => setField('siteMarked', e.target.checked)}
              />{' '}
              Surgical Site Marked
            </label>
          </div>
          <div className="form-group col-4">
            <label>
              <input
                type="checkbox"
                checked={form.timeoutPlanned}
                onChange={(e) => setField('timeoutPlanned', e.target.checked)}
              />{' '}
              Time-out Planned
            </label>
          </div>
          <div className="form-group col-4">
            <label>
              <input
                type="checkbox"
                checked={form.prosthesisAvailable}
                onChange={(e) => setField('prosthesisAvailable', e.target.checked)}
              />{' '}
              Prosthesis/Implants Available
            </label>
          </div>
          <div className="form-group col-4">
            <label>
              <input
                type="checkbox"
                checked={form.anticoagulantHeld}
                onChange={(e) => setField('anticoagulantHeld', e.target.checked)}
              />{' '}
              Anticoagulant Held
            </label>
          </div>
          <div className="form-group col-4">
            <label>
              <input
                type="checkbox"
                checked={form.pregnancyTestDone}
                onChange={(e) => setField('pregnancyTestDone', e.target.checked)}
              />{' '}
              Pregnancy Test Done
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
