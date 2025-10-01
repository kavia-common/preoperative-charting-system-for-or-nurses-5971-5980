import React from 'react';

/**
 * PUBLIC_INTERFACE
 * PatientContextCard
 * Displays patient demographics and case details in a compact, professional card.
 */
export default function PatientContextCard({ patient }) {
  const { name, mrn, age, sex, allergy, case: caseName, surgeon, date, location, asa } = patient || {};

  return (
    <div className="context-card">
      <div className="context-header">
        <div className="context-title">
          Patient Context
          <span className="pill">Pre-Operative</span>
        </div>
      </div>

      <div className="context-grid">
        <div className="context-item col-6">
          <div className="label">Name</div>
          <div className="value">{name}</div>
        </div>
        <div className="context-item col-3">
          <div className="label">MRN</div>
          <div className="value">{mrn}</div>
        </div>
        <div className="context-item col-3">
          <div className="label">Sex / Age</div>
          <div className="value">{sex} / {age}</div>
        </div>

        <div className="context-item col-6">
          <div className="label">Allergy</div>
          <div className="value">{allergy}</div>
        </div>
        <div className="context-item col-6">
          <div className="label">Case</div>
          <div className="value">{caseName}</div>
        </div>

        <div className="context-item col-4">
          <div className="label">Surgeon</div>
          <div className="value">{surgeon}</div>
        </div>
        <div className="context-item col-4">
          <div className="label">Date</div>
          <div className="value">{date}</div>
        </div>
        <div className="context-item col-4">
          <div className="label">Location</div>
          <div className="value">{location}</div>
        </div>

        <div className="context-item col-3">
          <div className="label">ASA</div>
          <div className="value">{asa}</div>
        </div>
      </div>
    </div>
  );
}
