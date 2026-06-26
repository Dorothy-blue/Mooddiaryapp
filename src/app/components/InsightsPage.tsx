export default function InsightsPage() {
  const TEXT = 'rgb(17, 24, 39)';
  const MUTED = 'rgb(107, 114, 128)';
  const PRIMARY = 'rgb(99, 102, 241)';
  const BORDER = 'rgb(229, 231, 235)';
  const ERROR = 'rgb(239, 68, 68)';

  const insights = [
    {
      icon: '▣',
      title: 'Best Days',
      desc: 'You feel happiest on Fridays and weekends.',
      color: 'rgb(20, 184, 166)'
    },
    {
      icon: '♧',
      title: 'Mood Booster',
      desc: 'Social activities have the biggest positive impact.',
      color: PRIMARY
    },
    {
      icon: '⌁',
      title: 'Needs Attention',
      desc: 'Your mood tends to dip on Mondays.',
      color: ERROR
    }
  ];

  const recommendations = [
    { title: 'Keep Connecting', desc: 'Plan 2–3 social activities weekly.' },
    { title: 'Move Your Body', desc: 'Try 20 minutes of daily exercise.' },
    { title: 'Mindful Moments', desc: 'Take 5 minutes to breathe and relax.' }
  ];

  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-2xl mx-auto px-5 pt-[42px] pb-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-[22px]">
          <h1 className="text-[22px] font-bold" style={{ color: TEXT }}>
            Insights
          </h1>
          <div className="text-[20px]" style={{ color: MUTED }}>♧</div>
        </div>

        {/* Hero Card */}
        <div
          className="p-4 rounded-[18px] mb-3"
          style={{ backgroundColor: 'rgb(240, 243, 255)', border: 'none' }}
        >
          <h3 className="text-[16px] font-bold" style={{ color: TEXT }}>
            Today's Suggestion
          </h3>
          <p className="text-[13px] mt-3" style={{ color: TEXT }}>
            Take a 15-minute walk outside.<br />
            Your mood was 2 points higher on days with outdoor activity.
          </p>
          <div className="text-[42px] text-right mt-2" style={{ color: PRIMARY }}>
            🚶  🌳  ☁
          </div>
        </div>

        {/* Your Patterns */}
        <h3 className="text-[17px] font-bold mt-[22px] mb-3" style={{ color: TEXT }}>
          Your Patterns
        </h3>

        {insights.map((insight, index) => (
          <div
            key={index}
            className="p-4 rounded-[18px] border mb-3"
            style={{ backgroundColor: 'white', borderColor: BORDER }}
          >
            <div className="flex gap-[14px]">
              <div
                className="flex items-center justify-center rounded-[12px] text-[25px]"
                style={{
                  backgroundColor: 'rgb(240, 253, 250)',
                  color: insight.color,
                  width: '54px',
                  height: '54px',
                  flexShrink: 0
                }}
              >
                {insight.icon}
              </div>
              <div className="flex-1">
                <h4 className="text-[14px] font-bold" style={{ color: TEXT }}>
                  {insight.title}
                </h4>
                <p className="text-[12px]" style={{ color: TEXT }}>
                  {insight.desc}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Recommended For You */}
        <h3 className="text-[17px] font-bold mt-[22px] mb-3" style={{ color: TEXT }}>
          Recommended For You
        </h3>

        {recommendations.map((rec, index) => (
          <div
            key={index}
            className="p-4 rounded-[18px] border mb-3"
            style={{ backgroundColor: 'white', borderColor: BORDER }}
          >
            <div className="flex items-center gap-3">
              <div className="text-[22px] w-[42px]" style={{ color: 'rgb(20, 184, 166)' }}>
                ♧
              </div>
              <div className="flex-1">
                <h4 className="text-[14px] font-bold" style={{ color: TEXT }}>
                  {rec.title}
                </h4>
                <p className="text-[12px]" style={{ color: TEXT }}>
                  {rec.desc}
                </p>
              </div>
              <div className="text-[28px]" style={{ color: MUTED }}>
                ›
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
