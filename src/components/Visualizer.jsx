import React from 'react';

const Visualizer = ({ stackState }) => {
    return (
        <div className="visualizer-container">
            <h3>Stack Memory</h3>
            <div className="stack-area">
                {stackState.length === 0 ? (
                    <div className="empty-stack">Stack is empty</div>
                ) : (
                    <div className="stack-entries">
                        {stackState.map((item, index) => (
                            <div key={item.name} className="stack-frame fade-in">
                                <div className="frame-left">
                                    <span className="mem-address">{item.address}</span>
                                </div>
                                <div className="frame-main">
                                    <div className="var-header">
                                        <span className="var-type">{item.type}</span>
                                        <span className="var-size-badge">{item.size}</span>
                                    </div>
                                    <div className="var-body">
                                        <span className="var-name">{item.name}</span>
                                        <span className="var-value">{item.value}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="stack-base">Bottom of Stack</div>
        </div>
    );
};

export default Visualizer;
