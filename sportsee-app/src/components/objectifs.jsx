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
                <div className="bg-white p-0.5">
                    <p style={{
                        fontFamily: 'Roboto',
                        fontSize: '8px',
                        fontWeight: '500',
                        lineHeight: '24px',
                        textAlign: 'center',
                        textUnderlinePosition: 'from-font',
                        textDecorationSkipInk: 'none',
                        color: 'black'
                    }}>
                        {`${payload[0].value} min`}
                    </p>
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

                height={263} // Ajuster la hauteur à 263px
                y={0}  // Position depuis le haut

            />
        );
    };

    return (
        <div className="bg-[#E60000] p-3 rounded-md w-[258px] h-[263px]">
            <h2 className="text-white text-base font-medium opacity-50 mb-1 flex-wrap">
                Durée moyenne des <br /> sessions
            </h2>
            <ResponsiveContainer width="100%" height={200}>
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
                        stroke="rgba(255, 255, 255, 0.4)"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{
                            stroke: "rgba(255, 255, 255, 0.5)",
                            strokeWidth: 2,
                            r: 5,
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
