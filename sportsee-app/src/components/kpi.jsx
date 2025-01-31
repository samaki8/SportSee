import PropTypes from 'prop-types';
import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts';

function Kpi({ userId, todayScore }) {
    if (!todayScore) {
        return <div>Chargement Kpi...<span className="loading loading-spinner loading-md"></span></div>;
    }

    const score = todayScore * 100;
    const data = [{ value: score }];

    return (
        <div className="bg-[#FBFBFB] w-[258px] h-[263px] rounded-md p-6 relative">
            <h2 className="text-base font-medium text-black mb-4">Score</h2>

            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="70%"
                    outerRadius="80%"
                    barSize={10}
                    data={data}
                    startAngle={90}
                    endAngle={450}
                >
                    <PolarAngleAxis
                        type="number"
                        domain={[0, 100]}
                        angleAxisId={0}
                        tick={false}
                    />
                    <RadialBar
                        background
                        clockWise
                        dataKey="value"
                        cornerRadius={10}
                        fill="#FF0000"
                    />
                </RadialBarChart>
            </ResponsiveContainer>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="text-2xl font-bold text-black">{score}%</p>
                <p className="text-base text-gray-500">
                    de votre<br />objectif
                </p>
            </div>
        </div>
    );
}

Kpi.propTypes = {
    userId: PropTypes.number.isRequired,
    todayScore: PropTypes.number.isRequired
};

export default Kpi;
