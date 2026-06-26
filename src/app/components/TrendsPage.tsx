import { useState } from 'react';
import LineChart from './LineChart';

export default function TrendsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState(0);

  const TEXT = 'rgb(17, 24, 39)';
  const MUTED = 'rgb(107, 114, 128)';
  const PRIMARY = 'rgb(99, 102, 241)';
  const BORDER = 'rgb(229, 231, 235)';

  const periods = ['7 Days', '30 Days', '12 Months'];

  const entries = [
    {
      emoji: '😄',
      date: 'May 20, 2024 • 9:30 PM',
      title: 'Work & Studies',
      desc: 'Completed all tasks ahead of schedule and received positive feedback.'
    },
    {
      emoji: '😊',
      date: 'May 19, 2024 • 7:45 PM',
      title: 'Social & Friends',
      desc: 'Had a wonderful dinner with close friends and shared many laughs.'
    },
    {
      emoji: '😐',
      date: 'May 18, 2024 • 4:20 PM',
      title: 'Family & Home',
      desc: 'Quiet day at home, caught up on rest and personal projects.'
    }
  ];

  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-2xl mx-auto px-5 pt-[42px] pb-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-[22px]">
          <h1 className="text-[22px] font-bold" style={{ color: TEXT }}>
            Mood Trends
          </h1>
          <div className="text-[20px]" style={{ color: MUTED }}>▣</div>
        </div>

        {/* Period Selector */}
        <div
          className="flex items-center p-1 rounded-[16px] border mb-[18px]"
          style={{ backgroundColor: 'white', borderColor: BORDER, height: '46px' }}
        >
          {periods.map((period, index) => (
            <button
              key={index}
              onClick={() => setSelectedPeriod(index)}
              className="flex-1 text-[12px] rounded-[12px] h-full transition-all"
              style={{
                backgroundColor: selectedPeriod === index ? PRIMARY : 'transparent',
                color: selectedPeriod === index ? 'white' : TEXT
              }}
            >
              {period}
            </button>
          ))}
        </div>

        {/* Chart Card */}
        <div
          className="p-4 rounded-[18px] border mb-3"
          style={{ backgroundColor: 'white', borderColor: BORDER }}
        >
          <h3 className="text-[16px] font-bold" style={{ color: TEXT }}>
            Mood Over Time
          </h3>
          <p className="text-[12px]" style={{ color: MUTED }}>
            Average mood score (1–5)
          </p>
          <div className="mt-2">
            <LineChart />
          </div>
        </div>

        {/* Stats Row */}
        <div className="flex gap-[10px] mb-6">
          <div
            className="flex-1 p-4 rounded-[18px] border flex flex-col items-center justify-center"
            style={{ backgroundColor: 'white', borderColor: BORDER, height: '96px' }}
          >
            <div className="text-[26px] font-bold" style={{ color: PRIMARY }}>3.8</div>
            <div className="text-[10px] text-center" style={{ color: TEXT }}>Average Mood</div>
          </div>
          <div
            className="flex-1 p-4 rounded-[18px] border flex flex-col items-center justify-center"
            style={{ backgroundColor: 'white', borderColor: BORDER, height: '96px' }}
          >
            <div className="text-[26px] font-bold" style={{ color: PRIMARY }}>12</div>
            <div className="text-[10px] text-center" style={{ color: TEXT }}>Positive Days<br />(≥ 4/5)</div>
          </div>
          <div
            className="flex-1 p-4 rounded-[18px] border flex flex-col items-center justify-center"
            style={{ backgroundColor: 'white', borderColor: BORDER, height: '96px' }}
          >
            <div className="text-[26px] font-bold" style={{ color: PRIMARY }}>5</div>
            <div className="text-[10px] text-center" style={{ color: TEXT }}>Day Streak</div>
          </div>
        </div>

        {/* Recent Entries Header */}
        <div className="flex items-center justify-between pt-6 pb-[10px]">
          <h3 className="text-[17px] font-bold" style={{ color: TEXT }}>
            Recent Entries
          </h3>
          <button className="text-[12px]" style={{ color: PRIMARY }}>
            View all
          </button>
        </div>

        {/* Entry Cards */}
        {entries.map((entry, index) => (
          <div
            key={index}
            className="p-4 rounded-[18px] border mb-3"
            style={{ backgroundColor: 'white', borderColor: BORDER }}
          >
            <div className="flex gap-3">
              <div className="text-[26px] w-[42px]">{entry.emoji}</div>
              <div className="flex-1">
                <p className="text-[10px]" style={{ color: MUTED }}>{entry.date}</p>
                <p className="text-[13px] font-bold" style={{ color: TEXT }}>{entry.title}</p>
                <p className="text-[12px]" style={{ color: TEXT }}>{entry.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
