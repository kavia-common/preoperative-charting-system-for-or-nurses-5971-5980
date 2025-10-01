import React from 'react';
import './App.css';
import './index.css';
import AppShell from './components/layout/AppShell';

// PUBLIC_INTERFACE
export default function App() {
  /** Root App renders the AppShell which contains navigation, context, and main content areas. */
  return <AppShell />;
}
