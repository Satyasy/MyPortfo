import React from 'react';

// Mendefinisikan tipe props untuk komponen
interface TwoColorPythonIconProps {
  className?: string;
  size?: number; 
}

const TwoColorPythonIcon: React.FC<TwoColorPythonIconProps> = ({ className, size = 24 }) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 448 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Yellow Snake */}
      <path
        fill="currentColor"
        className="text-yellow-400"
        d="M394.1 32H110.1c-14.7 0-26.7 12-26.7 26.7s12 26.7 26.7 26.7h284c14.7 0 26.7 12 26.7 26.7s-12 26.7-26.7 26.7h-284c-44.1 0-80 35.9-80 80s35.9 80 80 80h224c14.7 0 26.7 12 26.7 26.7s-12 26.7-26.7 26.7h-224c-14.7 0-26.7 12-26.7 26.7s12 26.7 26.7 26.7h284c44.1 0 80-35.9 80-80s-35.9-80-80-80h-224c-14.7 0-26.7-12-26.7-26.7s12-26.7 26.7-26.7h224c14.7 0 26.7-12 26.7-26.7s-12-26.7-26.7-26.7z"
      />
      {/* Blue Snake */}
      <path
        fill="currentColor"
        className="text-blue-500"
        d="M53.9 480h284c14.7 0 26.7-12 26.7-26.7s-12-26.7-26.7-26.7h-284c-44.1 0-80-35.9-80-80s35.9-80 80-80h224c14.7 0 26.7-12 26.7-26.7s-12-26.7-26.7-26.7h-224c-14.7 0-26.7-12-26.7-26.7s12-26.7 26.7-26.7h284c44.1 0 80 35.9 80 80s-35.9 80-80 80h-224c-14.7 0-26.7 12-26.7 26.7s12 26.7 26.7 26.7h224c14.7 0 26.7 12 26.7 26.7s-12 26.7-26.7 26.7h-284c-14.7 0-26.7 12-26.7 26.7s12 26.7 26.7 26.7z"
      />
    </svg>
  );
};

export default TwoColorPythonIcon;