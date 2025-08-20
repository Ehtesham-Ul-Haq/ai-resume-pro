import React from 'react';

const OutputViewer = ({ forwardoutput }: { forwardoutput: string }) => {
  return (
    <pre className="p-4 bg-gray-900 rounded-lg overflow-auto text-sm text-green-300 border border-green-700 font-mono leading-relaxed shadow-inner">
      {forwardoutput}
    </pre>
  );
};

export default OutputViewer;
