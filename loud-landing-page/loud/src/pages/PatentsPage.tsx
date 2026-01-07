import React from 'react';

const PatentsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Virtual Patent Marking</h1>
      <p className="mb-4">
        This page is intended to serve as notice under 35 U.S.C. § 287(a).
      </p>
      <div className="prose">
        <h2 className="text-2xl font-bold mt-8 mb-2">Loud! Products</h2>
        <p>The following U.S. patents apply to Loud! products:</p>
        <ul>
          <li>U.S. Patent No. X,XXX,XXX</li>
          <li>U.S. Patent No. Y,YYY,YYY</li>
        </ul>
        <p>Other U.S. and foreign patents pending.</p>
      </div>
      <div className="mt-8 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
        <p className="font-bold">Disclaimer</p>
        <p>
          I am an AI assistant and not a lawyer. This is not legal advice. Please consult with a legal professional to ensure you are in compliance with all applicable laws and regulations regarding patent marking.
        </p>
      </div>
    </div>
  );
};

export default PatentsPage;