import PropTypes from 'prop-types';
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

function RadarComponent({ data }) {
    if (!data || !data.data || !data.kind) {
        return <div>Chargement...<span className="loading loading-spinner loading-md"></span></div>;
    }

    // Traduction des catégories en français
    const translations = {
        'cardio': 'Cardio',
        'energy': 'Energie',
        'endurance': 'Endurance',
        'strength': 'Force',
        'speed': 'Vitesse',
        'intensity': 'Intensité'
    };

    // Ordre d'affichage souhaité
    const order = ['intensity', 'speed', 'strength', 'endurance', 'energy', 'cardio'];

    // Formater et réorganiser les données
    const formattedData = order.map(category => {
        const item = data.data.find(d => data.kind[d.kind].toLowerCase() === category);
        return {
            subject: translations[category],
            value: item ? item.value : 0,
            fullMark: 150
        };
    });

    return (
        <div className="bg-[#282D30] rounded-md w-[258px] h-[263px] p-4">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="65%"
                    data={formattedData}
                >
                    <PolarGrid
                        gridType="polygon"
                        radialLines={false}
                        stroke="white"
                        strokeOpacity={0.7}
                    />
                    <PolarAngleAxis
                        dataKey="subject"
                        stroke="white"
                        tickLine={false}
                        tick={{
                            fill: 'white',
                            fontSize: 12,
                            opacity: 0.7
                        }}
                    />
                    <Radar
                        name="Performance"
                        dataKey="value"
                        stroke="#FF0101"
                        fill="#FF0101"
                        fillOpacity={0.7}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

RadarComponent.propTypes = {
    data: PropTypes.shape({
        userID: PropTypes.number,
        kind: PropTypes.objectOf(PropTypes.string).isRequired,
        data: PropTypes.arrayOf(
            PropTypes.shape({
                value: PropTypes.number.isRequired,
                kind: PropTypes.number.isRequired,
            })
        ).isRequired,
    }).isRequired,
};

export default RadarComponent;
