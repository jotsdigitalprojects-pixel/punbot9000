import React from 'react';

interface BotIconProps extends React.SVGProps<SVGSVGElement> {}

const BotIcon: React.FC<BotIconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12 2a2 2 0 0 1 2 2v2h-4V4a2 2 0 0 1 2-2zM6 8v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V8H6zm6 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm8 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-4 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM4 6h16v2H4V6z" />
  </svg>
);

export default BotIcon;
