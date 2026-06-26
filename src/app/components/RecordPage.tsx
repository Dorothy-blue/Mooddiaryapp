import { useState } from 'react';

interface RecordPageProps {
  onSave: () => void;
}

export default function RecordPage({ onSave }: RecordPageProps) {
  const [selectedMood, setSelectedMood] = useState('Very Happy');
  const [selectedFactors, setSelectedFactors] = useState<string[]>([]);
  const [note, setNote] = useState('');

  const TEXT = 'rgb(17, 24, 39)';
  const MUTED = 'rgb(107, 114, 128)';
  const PRIMARY = 'rgb(99, 102, 241)';
  const BORDER = 'rgb(229, 231, 235)';

  const moods = [
    { emoji: '😄', label: 'Very Happy' },
    { emoji: '😊', label: 'Happy' },
    { emoji: '😐', label: 'Neutral' },
    { emoji: '😔', label: 'Sad' },
    { emoji: '😢', label: 'Very Sad' },
  ];

  const factors = [
    { label: '▣  Work & Studies', color: 'rgb(22, 163, 74)' },
    { label: '⌂  Family & Home', color: 'rgb(249, 115, 22)' },
    { label: '♡  Health & Wellness', color: PRIMARY },
    { label: '♧  Social & Friends', color: 'rgb(147, 51, 234)' },
  ];

  const toggleFactor = (factor: string) => {
    setSelectedFactors(prev =>
      prev.includes(factor) ? prev.filter(f => f !== factor) : [...prev, factor]
    );
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-2xl mx-auto px-5 pt-[42px] pb-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-[22px]">
          <h1 className="text-[22px] font-bold" style={{ color: TEXT }}>
            Mood Diary
          </h1>
          <button className="text-[22px] w-11 h-11 flex items-center justify-center" style={{ color: MUTED }}>
            ⚙
          </button>
        </div>

        {/* Question */}
        <h2 className="text-[27px] font-bold leading-tight" style={{ color: TEXT }}>
          How are you<br />feeling today?
        </h2>

        {/* Description */}
        <p className="text-[13px] mt-[6px]" style={{ color: MUTED }}>
          Select the mood that best matches your current state.
        </p>

        {/* Mood Grid */}
        <div className="grid grid-cols-3 gap-[10px] mt-[22px] mb-[14px]">
          {moods.map((mood) => (
            <button
              key={mood.label}
              onClick={() => setSelectedMood(mood.label)}
              className="flex flex-col items-center justify-center p-2 rounded-[16px] border transition-all"
              style={{
                backgroundColor: selectedMood === mood.label ? PRIMARY : 'white',
                borderColor: selectedMood === mood.label ? PRIMARY : BORDER,
                height: '86px',
                width: '101px'
              }}
            >
              <div className="text-[24px]">{mood.emoji}</div>
              <div
                className="text-[11px] font-bold text-center mt-1"
                style={{ color: selectedMood === mood.label ? 'white' : TEXT }}
              >
                {mood.label}
              </div>
            </button>
          ))}
        </div>

        {/* Influence Section */}
        <h3 className="text-[18px] font-bold mt-[10px]" style={{ color: TEXT }}>
          What influenced your mood?
        </h3>

        <p className="text-[13px] mt-1" style={{ color: MUTED }}>
          Select all that apply
        </p>

        {/* Factor Grid */}
        <div className="grid grid-cols-2 gap-3 mt-[18px] mb-[18px]">
          {factors.map((factor) => (
            <button
              key={factor.label}
              onClick={() => toggleFactor(factor.label)}
              className="flex items-center justify-center text-[12px] rounded-[14px] border transition-all"
              style={{
                backgroundColor: selectedFactors.includes(factor.label)
                  ? 'white'
                  : 'white',
                borderColor: BORDER,
                color: factor.color,
                height: '54px',
                width: '158px'
              }}
            >
              {factor.label}
            </button>
          ))}
        </div>

        {/* Note Label */}
        <h3 className="text-[15px] font-bold mt-1" style={{ color: TEXT }}>
          Add a note (optional)
        </h3>

        {/* Note Textarea */}
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Share what's on your mind or what affected your mood today..."
          className="w-full mt-3 mb-[18px] p-4 text-[13px] rounded-[16px] border resize-none"
          style={{
            backgroundColor: 'white',
            borderColor: BORDER,
            color: TEXT,
            height: '120px'
          }}
        />

        {/* Save Button */}
        <button
          onClick={onSave}
          className="w-full text-[15px] font-bold text-white rounded-[16px] transition-all hover:opacity-90"
          style={{
            backgroundColor: PRIMARY,
            height: '54px'
          }}
        >
          Save mood entry
        </button>
      </div>
    </div>
  );
}
