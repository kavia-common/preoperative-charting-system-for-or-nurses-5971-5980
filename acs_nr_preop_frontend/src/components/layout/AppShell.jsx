import React, { useMemo, useState } from 'react';
import PatientContextCard from '../patient/PatientContextCard';
import Assessment from '../../pages/Assessment';
import Investigations from '../../pages/Investigations';
import ConsentsChecks from '../../pages/ConsentsChecks';
import Notes from '../../pages/Notes';

/**
 * PUBLIC_INTERFACE
 * AppShell
 * Classic layout with top nav, breadcrumbs, left vertical tabs, patient context,
 * and a main content area. Provides Save/Submit floating actions.
 */
export default function AppShell() {
  const tabs = useMemo(() => ([
    { key: 'assessment', label: 'Assessment' },
    { key: 'investigations', label: 'Investigations' },
    { key: 'consents', label: 'Consents & Checks' },
    { key: 'notes', label: 'Notes' },
  ]), []);

  const [activeTab, setActiveTab] = useState('assessment');

  // Demo patient context (static placeholder for UI; no backend calls)
  const patient = {
    name: 'John Doe',
    mrn: 'MRN-0023456',
    age: 62,
    sex: 'M',
    allergy: 'Penicillin',
    case: 'Laparoscopic Cholecystectomy',
    surgeon: 'Dr. S. Harper',
    date: '2025-10-01',
    location: 'OR-3',
    asa: 'II',
  };

  const renderTab = () => {
    switch (activeTab) {
      case 'assessment':
        return <Assessment />;
      case 'investigations':
        return <Investigations />;
      case 'consents':
        return <ConsentsChecks />;
      case 'notes':
        return <Notes />;
      default:
        return null;
    }
  };

  const onSave = () => {
    // Placeholder action - no backend connected
    // In real impl, would persist to API.
    alert('Draft saved locally (demo).');
  };
  const onSubmit = () => {
    // Placeholder action
    alert('Submission queued (demo).');
  };

  return (
    <div className="app-shell">
      <nav className="topnav" aria-label="Top Navigation">
        <div className="brand" aria-label="Application Brand">
          <div className="brand-badge" aria-hidden="true" />
          ACS Pre-Op Charting
        </div>
        <div className="breadcrumbs" role="navigation" aria-label="Breadcrumb">
          Home <span className="sep">/</span> Pre-Op <span className="sep">/</span> {tabs.find(t => t.key === activeTab)?.label}
        </div>
      </nav>

      <div className="main">
        <aside className="sidebar" aria-label="Pre-Op Sections">
          <div className="section-title">Sections</div>
          <div className="vtabs" role="tablist" aria-orientation="vertical">
            {tabs.map(t => (
              <button
                key={t.key}
                role="tab"
                aria-selected={activeTab === t.key}
                className={`vtab ${activeTab === t.key ? 'active' : ''}`}
                onClick={() => setActiveTab(t.key)}
              >
                <span className="dot" aria-hidden="true" />
                <span>{t.label}</span>
              </button>
            ))}
          </div>
        </aside>

        <section className="content">
          <PatientContextCard patient={patient} />

          <div className="card" role="region" aria-label={`${tabs.find(t => t.key === activeTab)?.label} Form`}>
            <div className="card-header">
              <div>
                <div className="card-title">{tabs.find(t => t.key === activeTab)?.label}</div>
                <div className="card-subtitle">Complete the fields below as part of the pre-operative workflow.</div>
              </div>
              <div>
                <button className="btn btn-outline" onClick={onSave}>Save Draft</button>
              </div>
            </div>
            {renderTab()}
          </div>
        </section>
      </div>

      <div className="fab-bar" aria-label="Floating Actions">
        <button className="btn btn-outline fab" onClick={onSave}>Save</button>
        <button className="btn btn-primary fab" onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
}
