import React, { useMemo } from 'react';

const getUsageColor = (percent) => {
  if (percent < 60) return 'bg-green-500';
  if (percent < 85) return 'bg-orange-400';
  return 'bg-red-600';
};

const modeBgColors = {
  primordialClarity: 'bg-purple-50',
  truthSeeker: 'bg-blue-50',
  jesterCore: 'bg-pink-50',
  divineLogic: 'bg-green-50',
  sentinelNode: 'bg-gray-100',
  codePulse: 'bg-yellow-50',
  aetherMind: 'bg-teal-50',
};

const modeTextColors = {
  primordialClarity: 'text-purple-700',
  truthSeeker: 'text-blue-700',
  jesterCore: 'text-pink-700',
  divineLogic: 'text-green-700',
  sentinelNode: 'text-gray-700',
  codePulse: 'text-yellow-700',
  aetherMind: 'text-teal-700',
};

const TokenTracker = ({
  tokensUsed,
  maxTokens,
  mode = 'primordialClarity',
  showPercentage = true,
  className = '',
}) => {
  const usagePercent = useMemo(() => {
    if (!maxTokens) return 0;
    return Math.min(100, (tokensUsed / maxTokens) * 100);
  }, [tokensUsed, maxTokens]);

  const usageColor = useMemo(() => getUsageColor(usagePercent), [usagePercent]);

  return (
    <div
      className={`rounded-md p-4 shadow-md w-full max-w-md ${modeBgColors[mode]} ${className} animate-fadeIn`}
      aria-live="polite"
    >
      <div
        className={`flex justify-center space-x-2 text-sm font-semibold ${modeTextColors[mode]} mb-3 animate-pulse`}
      >
        <span>Tokens Used: {tokensUsed}</span>
        {maxTokens && (
          <>
            <span>/</span>
            <span>{maxTokens}</span>
          </>
        )}
      </div>

      {maxTokens && showPercentage && (
        <div
          className="w-full h-5 rounded-full bg-gray-300 dark:bg-gray-700 overflow-hidden"
          role="progressbar"
          aria-valuenow={tokensUsed}
          aria-valuemin={0}
          aria-valuemax={maxTokens}
          aria-label="Token usage progress"
        >
          <div
            className={`${usageColor} h-full transition-all duration-700 ease-out transform origin-left animate-scaleX`}
            style={{ width: `${usagePercent}%` }}
          />
        </div>
      )}
    </div>
  );
};

export default TokenTracker;




