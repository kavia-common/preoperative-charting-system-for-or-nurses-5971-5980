import React, { useState } from 'react';

/**
 * PUBLIC_INTERFACE
 * Notes
 * Free-form notes section for pre-op documentation.
 */
export default function Notes() {
  const [note, setNote] = useState('');

  return (
    <div className="form-grid">
      <div className="form-group col-12">
        <label htmlFor="note">Clinical Note</label>
        <textarea id="note" value={note} onChange={(e) => setNote(e.target.value)} />
      </div>
      <div className="form-group col-6">
        <label htmlFor="author">Author</label>
        <input id="author" type="text" placeholder="Nurse Name" />
      </div>
      <div className="form-group col-6">
        <label htmlFor="timestamp">Timestamp</label>
        <input id="timestamp" type="text" placeholder="Auto on submit (demo)" />
      </div>
    </div>
  );
}
