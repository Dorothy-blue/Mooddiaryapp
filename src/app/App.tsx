import { useState } from 'react';
import RecordPage from './components/RecordPage';
import SavedPage from './components/SavedPage';
import TrendsPage from './components/TrendsPage';
import InsightsPage from './components/InsightsPage';
import SettingsPage from './components/SettingsPage';

export default function App() {
  const [currentTab, setCurrentTab] = useState(0);
  const [showSaved, setShowSaved] = useState(false);

  const tabs = [
    { icon: '⌂', label: 'Record' },
    { icon: '⌁', label: 'Trends' },
    { icon: '♧', label: 'Insights' },
    { icon: '⚙', label: 'Settings' },
  ];

  const handleSave = () => {
    setShowSaved(true);
  };

  const handleBackToRecord = () => {
    setShowSaved(false);
    setCurrentTab(0);
  };

  const PRIMARY = 'rgb(99, 102, 241)';
  const MUTED = 'rgb(107, 114, 128)';

  return (
    <div className="h-screen flex flex-col" style={{ backgroundColor: 'rgb(247, 248, 252)' }}>
      {/* Content Area */}
      <div className="flex-1 overflow-hidden">
        {currentTab === 0 && !showSaved && <RecordPage onSave={handleSave} />}
        {currentTab === 0 && showSaved && (
          <SavedPage
            onViewTrends={() => { setShowSaved(false); setCurrentTab(1); }}
            onAddAnother={handleBackToRecord}
          />
        )}
        {currentTab === 1 && <TrendsPage />}
        {currentTab === 2 && <InsightsPage />}
        {currentTab === 3 && <SettingsPage />}
      </div>

      {/* Bottom Navigation */}
      <div
        className="flex items-center justify-center px-2 py-2"
        style={{ backgroundColor: 'white', height: '76px' }}
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentTab(index);
              if (index !== 0) setShowSaved(false);
            }}
            className="flex-1 flex flex-col items-center justify-center py-1"
          >
            <div
              className="text-[20px] mb-0.5"
              style={{ color: currentTab === index ? PRIMARY : MUTED }}
            >
              {tab.icon}
            </div>
            <div
              className="text-[10px]"
              style={{ color: currentTab === index ? PRIMARY : MUTED }}
            >
              {tab.label}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}