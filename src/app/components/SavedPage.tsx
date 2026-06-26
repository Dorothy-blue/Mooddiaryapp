interface SavedPageProps {
  onViewTrends: () => void;
  onAddAnother: () => void;
}

export default function SavedPage({ onViewTrends, onAddAnother }: SavedPageProps) {
  const TEXT = 'rgb(17, 24, 39)';
  const MUTED = 'rgb(107, 114, 128)';
  const PRIMARY = 'rgb(99, 102, 241)';
  const BORDER = 'rgb(229, 231, 235)';

  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-2xl mx-auto px-5 pt-[90px] pb-6 flex flex-col items-center">
        {/* Check Icon */}
        <div
          className="flex items-center justify-center text-[64px] font-bold text-white rounded-[56px]"
          style={{
            backgroundColor: PRIMARY,
            width: '112px',
            height: '112px'
          }}
        >
          ✓
        </div>

        {/* Success Message */}
        <h2 className="text-[24px] font-bold mt-7" style={{ color: TEXT }}>
          Mood saved!
        </h2>

        <p className="text-[14px] text-center mt-1" style={{ color: MUTED }}>
          Your entry has been recorded successfully.
        </p>

        {/* Buttons */}
        <div className="w-full mt-[34px]">
          <button
            onClick={onViewTrends}
            className="w-full text-[15px] font-bold text-white rounded-[16px] transition-all hover:opacity-90"
            style={{
              backgroundColor: PRIMARY,
              height: '54px'
            }}
          >
            View trends
          </button>

          <button
            onClick={onAddAnother}
            className="w-full mt-3 text-[15px] font-bold rounded-[16px] border transition-all hover:bg-gray-50"
            style={{
              backgroundColor: 'white',
              borderColor: BORDER,
              color: PRIMARY,
              height: '54px'
            }}
          >
            Add another entry
          </button>
        </div>
      </div>
    </div>
  );
}
