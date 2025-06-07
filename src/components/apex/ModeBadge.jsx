const ModeBadge = ({ mode, glowColor = '#C1A45F' }) => {
  return (
    <div
      className="text-xs italic font-mono opacity-80 select-none"
      style={{
        borderLeft: `2px solid ${glowColor}`,
        paddingLeft: '6px',
        marginTop: '8px',
        marginRight: '4px',
        alignSelf: 'flex-end',
        color: glowColor, // Use antique gold for text color
        textShadow: '0 0 2px rgba(193, 164, 95, 0.5)', // subtle glow for metallic feel
        fontFamily: '"Cormorant Garamond", serif', // scripture vibe font
      }}
    >
      {mode || 'anon'}
    </div>
  );
};

export default ModeBadge;




