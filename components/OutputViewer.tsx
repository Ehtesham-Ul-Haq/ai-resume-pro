import React from 'react';

type OutputViewerProps = {
  forwardoutput: string;
};

const OutputViewer = ({ forwardoutput }: OutputViewerProps) => {
  return (
    <div className='w-full overflow-hidden bg-amber-200 mx-auto'>
      {/* Display the output however you want */}
      <pre className='text-wrap'>{forwardoutput}</pre>
    </div>
  );
}

export default OutputViewer;
