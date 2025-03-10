import PropTypes from 'prop-types';
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

/**
 * Composant RadarComponent affichant un graphique radar représentant les performances d'un utilisateur.
 *
 * @param {object} data - Les données à afficher.
 * @param {number} data.userID - L'ID de l'utilisateur.
 * @param {object} data.kind - Un objet associant un identifiant à un type de performance.
 * @param {array} data.data - Un tableau d'objets représentant les données de performance.
 * @param {number} data.data[].value - La valeur de la performance.
 * @param {number} data.data[].kind - L'identifiant du type de performance.
 *
 * @returns {JSX.Element} Le composant RadarComponent.
 */
function RadarComponent({ data }) {
    if (!data || !data.data || !data.kind) {
        return <div>Chargement...<span className="loading loading-spinner loading-md"></span></div>;
    }

    /**
     * Objet de traduction des catégories de performances en français.
     * @type {object}
     */
    const translations = {
        'cardio': 'Cardio',
        'energy': 'Energie',
        'endurance': 'Endurance',
        'strength': 'Force',
        'speed': 'Vitesse',
        'intensity': 'Intensité'
    };

    /**
     * Ordre d'affichage souhaité des catégories de performances.
     * @type {array}
     */
    const order = ['intensity', 'speed', 'strength', 'endurance', 'energy', 'cardio'];

    /**
     * Angles personnalisés pour chaque catégorie de performance.
     * @type {array}
     */
    const angles = [0, 60, 120, 180, 240, 300];

    /**
     * Formate et réorganise les données pour l'affichage dans le graphique radar.
     *
     * @param {array} data.data - Un tableau d'objets représentant les données de performance.
     * @param {object} data.kind - Un objet associant un identifiant à un type de performance.
     * @returns {array} Un tableau d'objets formatés pour le graphique radar.
     */
    const formattedData = order.map(category => {
        const item = data.data.find(d => data.kind[d.kind].toLowerCase() === category);
        return {
            subject: translations[category],
            value: item ? item.value : 0,
            fullMark: 150
        };
    });

    return (
        <div className="bg-[#282D30] rounded-md w-[258px] h-[263px]">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="72%"
                    data={formattedData}
                >
                    <PolarGrid
                        gridType="polygon"
                        radialLines={false}
                        stroke="white"
                    />
                    {formattedData.map((entry, index) => (
                        <PolarAngleAxis
                            key={entry.subject}
                            dataKey="subject"
                            stroke="white"
                            tickLine={false}
                            tick={{
                                fill: 'white',
                                fontSize: 12,
                                dy: {
                                    'Intensité': 0,
                                    'Vitesse': 5,
                                    'Force': 0,
                                    'Endurance': 50,
                                    'Energie': 5,
                                    'Cardio': 10
                                }[entry.subject] || 0
                            }}
                            angle={angles[index]}
                        />
                    ))}
                    <Radar
                        name="Performance"
                        dataKey="value"
                        stroke="#FF0101"
                        fill="#FF0101"
                        fillOpacity={0.7}
                        animationBegin={200}
                        animationDuration={2000}
                        animationEasing="ease-out"
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
