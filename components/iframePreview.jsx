'use client';

import { useState } from 'react';

export default function IframePreview() {
  const [iframeError, setIframeError] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto my-8 p-4 bg-dark-card border border-dark-border rounded-lg pixel-border">
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-dark-border">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-neon-pink"></div>
          <div className="w-3 h-3 rounded-full bg-neon-cyan"></div>
          <div className="w-3 h-3 rounded-full bg-neon-green"></div>
          <span className="text-xs text-neon-cyan font-mono ml-2">preview://my-iqscore.com</span>
        </div>
        <a 
          href="https://my-iqscore.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs text-neon-pink hover:underline"
        >
          Open in New Tab ↗
        </a>
      </div>

      <div className="relative w-full h-[500px] bg-dark-bg rounded overflow-hidden">
        {!iframeError ? (
          <iframe 
            src="https://my-iqscore.com" 
            title="My IQ Score Live Preview"
            className="w-full h-full border-0"
            onError={() => setIframeError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center p-6">
            <p className="text-neon-pink mb-2 font-mono">⚠️ Embedding diblokir oleh kebijakan server (X-Frame-Options).</p>
            <p className="text-gray-400 text-sm mb-4">Silakan klik tombol di bawah untuk melihat langsung hasilnya.</p>
            <a 
              href="https://my-iqscore.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-neon-cyan text-dark-bg font-bold rounded hover:bg-neon-pink transition-all"
            >
              Kunjungi My IQ Score
            </a>
          </div>
        )}
      </div>
    </div>
  );
}