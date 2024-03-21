import React from 'react';

export default function ESGRow({ sustainability, social, governance }) {
    const getIcon = (value) => {
        if (value >= 7) {
            return 'high-icon';
        } else if (value >= 4) {
            return 'medium-icon';
        } else {
            return 'low-icon';
        }
    };

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <div>
                    <img src={getIcon(sustainability)} alt="Sustainability Icon" />
                </div>
                <div>
                    <img src={getIcon(social)} alt="Social Icon" />
                </div>
                <div>
                    <img src={getIcon(governance)} alt="Governance Icon" />
                </div>
            </div>
        </div>
    );
};
