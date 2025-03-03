import PropTypes from 'prop-types';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

/**
 * Composant Poids affichant un graphique à barres représentant l'activité quotidienne.
 *
 * @param {object} data - Les données à afficher.
 * @param {number} data.userID - L'ID de l'utilisateur.
 * @param {array} data.sessions - Un tableau d'objets représentant les sessions d'activité.
 * @param {string} data.sessions[].day - Le jour de la session.
 * @param {number} data.sessions[].kilogram - Le poids en kilogrammes pour la session.
 * @param {number} data.sessions[].calories - Les calories brûlées pour la session.
 *
 * @returns {JSX.Element} Le composant Poids.
 */
function Poids({ data }) {
    if (!data || !data.sessions) {
        return <div>Chargement...<span className="loading loading-spinner loading-md"></span></div>;
    }

    /**
     * Formate les données pour l'affichage dans le graphique.
     *
     * @param {array} data.sessions - Un tableau d'objets représentant les sessions d'activité.
     * @returns {array} Un tableau d'objets formatés pour le graphique.
     */
    const formattedData = data.sessions.map((session, index) => ({
        name: index + 1,
        kilogram: session.kilogram,
        calories: session.calories
    }));

    /**
     * Composant de tooltip personnalisé pour afficher le poids et les calories.
     *
     * @param {boolean} active - Indique si le tooltip est actif.
     * @param {array} payload - Les données à afficher dans le tooltip.
     * @returns {JSX.Element|null} Le composant de tooltip personnalisé.
     */
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-[#E60000] text-white p-2">
                    <p>{`${payload[0].value}kg`}</p>
                    <p>{`${payload[1].value}Kcal`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="bg-gray-50 p-6 rounded-md w-[835px] h-[320px]">
            <div className="flex justify-between items-center mb-12" >
                <div>
                    <h2 className="text-base font-medium">Activité quotidienne</h2>
                </div>
                <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-black"></div>
                        <span className="text-sm text-gray-500">Poids (kg)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#E60000]"></div>
                        <span className="text-sm text-gray-500">Calories brûlées (kCal)</span>
                    </div>
                </div>
            </div>

            <ResponsiveContainer width="100%" height={200}>
                <BarChart
                    data={formattedData}
                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                    barGap={8}
                    barsize={7}
                    barCategoryGap="0%" // Supprimer l'espace entre les barres
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                        dataKey="name"
                        tickLine={false}
                        tick={{ fill: '#9B9EAC' }}
                        //margin={{ bottom: 20 }}
                        dy={10}
                        padding={{ left: -45, right: -50 }}
                    />

                    <YAxis
                        yAxisId="kilogram"
                        orientation="right"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fill: '#9B9EAC' }}
                        domain={['68', '72']}
                        // Interval={2} // 2 intervallles au lieu de 3
                        ticks={[68, 69, 70]} // Spécifier les ticks
                        dx={10} // Décaler l'axe Y vers la droite
                    />
                    <YAxis
                        yAxisId="calories"
                        orientation="left"
                        hide={true}
                        Interval={2}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar
                        yAxisId="kilogram"
                        dataKey="kilogram"
                        fill="#282D30"
                        radius={[3, 3, 0, 0]}
                        barSize={7}
                    />
                    <Bar
                        yAxisId="calories"
                        dataKey="calories"
                        fill="#E60000"
                        radius={[3, 3, 0, 0]}
                        barSize={7}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

Poids.propTypes = {
    data: PropTypes.shape({
        userID: PropTypes.number,
        sessions: PropTypes.arrayOf(
            PropTypes.shape({
                day: PropTypes.string.isRequired,
                kilogram: PropTypes.number.isRequired,
                calories: PropTypes.number.isRequired,
            })
        ).isRequired,
    }).isRequired,
};

export default Poids;

