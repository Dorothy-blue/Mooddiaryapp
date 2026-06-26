import { useState } from 'react';

export default function SettingsPage() {
  const [showReminderDialog, setShowReminderDialog] = useState(false);
  const [showAppearanceDialog, setShowAppearanceDialog] = useState(false);
  const [showClearDialog, setShowClearDialog] = useState(false);
  const [selectedReminder, setSelectedReminder] = useState(0);

  const TEXT = 'rgb(17, 24, 39)';
  const MUTED = 'rgb(107, 114, 128)';
  const PRIMARY = 'rgb(99, 102, 241)';
  const PRIMARY_LIGHT = 'rgb(238, 242, 255)';
  const BORDER = 'rgb(229, 231, 235)';
  const ERROR = 'rgb(239, 68, 68)';

  const SettingItem = ({ icon, title, subtitle, onClick, isDanger = false }: any) => (
    <button
      onClick={onClick}
      className="w-full p-4 rounded-[18px] border mb-3 transition-all hover:bg-gray-50"
      style={{ backgroundColor: 'white', borderColor: BORDER }}
    >
      <div className="flex items-center gap-3">
        <div className="text-[20px] w-9" style={{ color: isDanger ? ERROR : MUTED }}>
          {icon}
        </div>
        <div className="flex-1 text-left">
          <div className="text-[14px] font-bold" style={{ color: isDanger ? ERROR : TEXT }}>
            {title}
          </div>
          {subtitle && (
            <div className="text-[11px]" style={{ color: MUTED }}>
              {subtitle}
            </div>
          )}
        </div>
        <div className="text-[24px]" style={{ color: MUTED }}>
          ›
        </div>
      </div>
    </button>
  );

  return (
    <>
      <div className="h-full overflow-y-auto">
        <div className="max-w-2xl mx-auto px-5 pt-[42px] pb-6">
          {/* Header */}
          <div className="mb-[22px]">
            <h1 className="text-[22px] font-bold" style={{ color: TEXT }}>
              Settings
            </h1>
          </div>

          {/* Preferences */}
          <h3 className="text-[14px] font-bold mt-[22px] mb-3" style={{ color: TEXT }}>
            Preferences
          </h3>
          <SettingItem
            icon="♢"
            title="Notifications"
            subtitle="Daily reminder at 8:00 PM"
            onClick={() => setShowReminderDialog(true)}
          />
          <SettingItem
            icon="☼"
            title="Appearance"
            subtitle="Light mode"
            onClick={() => setShowAppearanceDialog(true)}
          />
          <SettingItem icon="◎" title="Language" subtitle="English" />

          {/* Privacy & Data */}
          <h3 className="text-[14px] font-bold mt-[22px] mb-3" style={{ color: TEXT }}>
            Privacy & Data
          </h3>
          <SettingItem icon="⇩" title="Export My Data" subtitle="Download your mood records" />
          <SettingItem
            icon="⌫"
            title="Clear All Data"
            subtitle="Delete all your data permanently"
            onClick={() => setShowClearDialog(true)}
            isDanger
          />

          {/* About */}
          <h3 className="text-[14px] font-bold mt-[22px] mb-3" style={{ color: TEXT }}>
            About
          </h3>
          <SettingItem icon="ⓘ" title="About Mood Diary" subtitle="Version 2.1.0" />
          <SettingItem icon="?" title="Help & Support" subtitle="" />
          <SettingItem icon="▣" title="Privacy Policy" subtitle="" />

          {/* Info Card */}
          <div
            className="p-4 rounded-[18px] mt-3"
            style={{ backgroundColor: PRIMARY_LIGHT }}
          >
            <div className="text-[14px] font-bold mb-2" style={{ color: PRIMARY }}>
              ⌂  Your data is private and secure
            </div>
            <div className="text-[12px]" style={{ color: TEXT }}>
              All data is stored locally on your device and never shared with third parties.
            </div>
          </div>
        </div>
      </div>

      {/* Reminder Dialog */}
      {showReminderDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[18px] p-6 max-w-md w-full">
            <h2 className="text-[18px] font-bold mb-4" style={{ color: TEXT }}>
              Reminder Setting
            </h2>
            <div className="text-[22px] font-bold text-center my-6" style={{ color: TEXT }}>
              Notification Time<br /><br />
              <span className="text-[28px]">8   :   00    PM</span>
            </div>
            <div
              className="flex items-center p-1 rounded-[16px] border mb-4"
              style={{ backgroundColor: 'white', borderColor: BORDER, height: '46px' }}
            >
              {['Every day', 'Weekdays', 'Custom'].map((option, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedReminder(index)}
                  className="flex-1 text-[12px] rounded-[12px] h-full transition-all"
                  style={{
                    backgroundColor: selectedReminder === index ? PRIMARY : 'transparent',
                    color: selectedReminder === index ? 'white' : TEXT
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
            <p className="text-[13px] mb-6" style={{ color: MUTED }}>
              We'll remind you to record your mood every day at 8:00 PM.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowReminderDialog(false)}
                className="flex-1 py-3 rounded-[16px] border"
                style={{ borderColor: BORDER, color: TEXT }}
              >
                Cancel
              </button>
              <button
                onClick={() => setShowReminderDialog(false)}
                className="flex-1 py-3 rounded-[16px] text-white"
                style={{ backgroundColor: PRIMARY }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Appearance Dialog */}
      {showAppearanceDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[18px] p-6 max-w-md w-full">
            <h2 className="text-[18px] font-bold mb-4" style={{ color: TEXT }}>
              Appearance
            </h2>
            {['Light Mode', 'Dark Mode', 'Custom Theme'].map((option, index) => (
              <button
                key={index}
                className="w-full py-3 px-4 text-left border-b"
                style={{ color: TEXT, borderColor: BORDER }}
              >
                {option}
              </button>
            ))}
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowAppearanceDialog(false)}
                className="flex-1 py-3 rounded-[16px] border"
                style={{ borderColor: BORDER, color: TEXT }}
              >
                Cancel
              </button>
              <button
                onClick={() => setShowAppearanceDialog(false)}
                className="flex-1 py-3 rounded-[16px] text-white"
                style={{ backgroundColor: PRIMARY }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Clear Data Dialog */}
      {showClearDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[18px] p-6 max-w-md w-full text-center">
            <div className="text-[56px] mb-4" style={{ color: MUTED }}>
              🗑
            </div>
            <h2 className="text-[22px] font-bold mb-2" style={{ color: TEXT }}>
              Delete all data?
            </h2>
            <p className="text-[14px] mb-6" style={{ color: MUTED }}>
              This action cannot be undone.<br />
              All your mood entries and settings will be permanently deleted.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowClearDialog(false)}
                className="flex-1 py-3 rounded-[16px] border"
                style={{ borderColor: BORDER, color: TEXT }}
              >
                Cancel
              </button>
              <button
                onClick={() => setShowClearDialog(false)}
                className="flex-1 py-3 rounded-[16px] text-white"
                style={{ backgroundColor: ERROR }}
              >
                Delete all data
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
