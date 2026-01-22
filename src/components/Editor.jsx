import React from 'react';

const Editor = ({ code, setCode, activeLine }) => {
    return (
        <div className="editor-container">
            <h3>Code Editor</h3>
            <div className="editor-wrapper">
                {/* Backdrop for highlighting */}
                <div className="code-backdrop">
                    {code.split('\n').map((line, index) => (
                        <div
                            key={index}
                            className={`code-line ${activeLine === index + 1 ? 'active-line' : ''}`}
                        >
                            <span className="line-number">{index + 1}</span>
                            <span className="line-content">{line}</span>
                            {/* Make invisible, helps sizing */}
                            <span style={{ opacity: 0 }}>{line.length === 0 ? ' ' : ''}</span>
                        </div>
                    ))}
                </div>

                {/* Actual Editor */}
                <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    spellCheck="false"
                    placeholder="// Write your C code here...
int a = 10;
char b = 'X';
a = 20;"
                />
            </div>
        </div>
    );
};

export default Editor;
