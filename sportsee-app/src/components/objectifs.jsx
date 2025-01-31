import PropTypes from 'prop-types';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Rectangle } from 'recharts';

function Objectifs({ data }) {
    if (!data || !data.sessions) {
        return <div>Chargement...<span className="loading loading-spinner loading-md"></span></div>;
    }

    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    const formattedData = data.sessions.map(session => ({
        day: days[session.day - 1],
        sessionLength: session.sessionLength
    }));

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-2">
                    <p className="text-black">{`${payload[0].value} min`}</p>
                </div>
            );
        }
        return null;
    };

    const CustomCursor = ({ points }) => {
        return (
            <Rectangle
                fill="rgba(0, 0, 0, 0.1)"
                x={points[0].x}
                width={1000}
                height={300}
            />
        );
    };

    return (
        <div className="bg-red-500 p-4 rounded-md w-[258px] h-[263px]">
            <h2 className="text-white text-base font-medium opacity-50 mb-4">
                Durée moyenne des sessions
            </h2>
            <ResponsiveContainer width="100%" height={180}>
                <LineChart
                    data={formattedData}
                    margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                >
                    <XAxis
                        dataKey="day"
                        stroke="rgba(255, 255, 255, 0.5)"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: 'rgba(255, 255, 255, 0.5)' }}
                    />
                    <YAxis
                        hide={true}
                        domain={['dataMin - 10', 'dataMax + 10']}
                    />
                    <Tooltip
                        content={<CustomTooltip />}
                        cursor={<CustomCursor />}
                    />
                    <Line
                        type="natural"
                        dataKey="sessionLength"
                        stroke="rgba(255, 255, 255, 0.5)"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{
                            stroke: "rgba(255, 255, 255, 0.5)",
                            strokeWidth: 2,
                            r: 4,
                            fill: "white"
                        }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

Objectifs.propTypes = {
    data: PropTypes.shape({
        userID: PropTypes.number,
        sessions: PropTypes.arrayOf(
            PropTypes.shape({
                day: PropTypes.number.isRequired,
                sessionLength: PropTypes.number.isRequired
            })
        ).isRequired,
    }).isRequired,
};

export default Objectifs;
