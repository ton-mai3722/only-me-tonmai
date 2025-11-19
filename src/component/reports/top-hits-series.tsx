'use client';


import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Label, LabelList } from 'recharts';

const TopMoviesChart = () => {
    // Mock data - คุณสามารถเปลี่ยนเป็นข้อมูลจริงได้
    const movies = [
        { rank: 1, title: "Oppenheimer", views: 2456789, poster: "https://image.tmdb.org/t/p/w200/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg" },
        { rank: 2, title: "Barbie", views: 2234567, poster: "https://image.tmdb.org/t/p/w200/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg" },
        { rank: 3, title: "Dune: Part Two", views: 1987654, poster: "https://image.tmdb.org/t/p/w200/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg" },
        { rank: 4, title: "Wonka", views: 1765432, poster: "https://image.tmdb.org/t/p/w200/qhb1qOilapbapxWQn9jtRCMwXJF.jpg" },
        { rank: 5, title: "The Marvels", views: 1543210, poster: "https://image.tmdb.org/t/p/w200/9GBhzXMFjgcZ3FdkqeUbtRpQ6Nf.jpg" },
        { rank: 6, title: "Migration", views: 1432198, poster: "https://image.tmdb.org/t/p/w200/jWhVzQLlT8LzAbPKJcG1M3V7HgY.jpg" },
        { rank: 7, title: "Anyone But You", views: 1321987, poster: "https://image.tmdb.org/t/p/w200/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg" },
        { rank: 8, title: "Aquaman 2", views: 1234567, poster: "https://image.tmdb.org/t/p/w200/8xV47NDrjdZDpkVcCFqkdHa3T0C.jpg" },
        { rank: 9, title: "Poor Things", views: 1123456, poster: "https://image.tmdb.org/t/p/w200/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg" },
        { rank: 10, title: "Mean Girls", views: 987654, poster: "https://image.tmdb.org/t/p/w200/fbbj3viSUDEGT1fFFMNpHP1iUjw.jpg" }
    ];

    // const colors = ['#33691e', '#558b2f', '#689f38', '#7cb342', '#8bc34a', '#9ccc65', '#aed581', '#c5e1a5', '#dcedc8', '#33691e'];
    const colors = ['#33691e', '#558b2f', '#689f38', '#7cb342', '#8bc34a'];


    const formatViews = (views: any) => {
        if (views >= 1000000) {
            return (views / 1000000).toFixed(1) + 'M';
        }
        if (views >= 1000) {
            return (views / 1000).toFixed(0) + 'K';
        }
        return views.toString();
    };

    const CustomTooltip = ({ active, payload }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-gray-800 border border-gray-700 rounded-lg p-3 shadow-xl">
                    <p className="text-white font-semibold mb-1">{payload[0].payload.title}</p>
                    <p className="text-purple-400 text-sm">
                        ยอดวิว: <span className="font-bold">{payload[0].value.toLocaleString()}</span>
                    </p>
                </div>
            );
        }
        return null;
    };

    const renderCustomizedLabel = (item: any) => {
        const { x, y, width, value } = item;
        return (
            <text
                x={x + width + 10}
                y={y + 15}
                fill="#263238"
                fontSize="13"
                fontWeight="600"
            >
                {formatViews(value)}
            </text>
        );
    };

    const CustomBar = (props: any) => {
        const { x, y, width, height, payload } = props;
        const movie = movies.find(m => m.rank === payload.rank);
        const barColor = colors[payload.rank - 1];

        return (
            <g>
                {/* Bar */}
                <rect
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    fill={barColor}
                    rx={8}
                />

                {/* Movie Poster */}
                <image
                    x={x + 5}
                    y={y + 5}
                    width={36}
                    height={36}
                    href={movie?.poster}
                    clipPath={`inset(0 0 0 0 round 4px)`}
                    preserveAspectRatio="xMidYMid slice"
                />
            </g>
        );
    };

    return (
        <div className="p-6" >
            {/* Header */}
            <div className="mb-6 pb-4 ">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-green-950 mb-1">Top 10 ซี่รีย์อดนิยม</h2>
                        <p className="text-green-900-400 text-sm">รายเดือน พฤศจิกายน 2025</p>
                    </div>
                    <div className="text-right">
                        <div className="text-3xl font-bold text-purple-900">
                            {(movies.reduce((sum, m) => sum + m.views, 0) / 1000000).toFixed(1)}M
                        </div>
                        <div className="text-gray-800 text-xs">ยอดวิวรวม</div>
                    </div>
                </div>
            </div>

            {/* Chart */}
            <div className="flex gap-6">
                {/* Movie List with Posters */}
                <div className="flex flex-col gap-[18px] pt-2.5">
                    {movies.map((movie, index) => (
                        <div key={movie.rank} className="flex items-center gap-3 h-10">
                            <span className="text-black font-semibold text-sm w-6 text-center">
                                {movie.rank}
                            </span>
                            <span className="text-black text-sm font-medium w-40 truncate">
                                {movie.title}
                            </span>
                            <img
                                src={movie.poster}
                                alt={movie.title}
                                className="w-10 h-10 object-cover rounded shadow-md"
                                onError={(e: any) => {
                                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40"%3E%3Crect width="40" height="40" fill="%23374151"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-size="20"%3E🎬%3C/text%3E%3C/svg%3E';
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* Bar Chart */}
                <div className="flex-1">
                    <ResponsiveContainer width="100%" height={610}>
                        <BarChart
                            data={movies}
                            layout="vertical"
                            margin={{ top: 0, right: 80, bottom: 0, left: 0 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" stroke="#374151" horizontal={false} />
                            <XAxis
                                type="number"
                                stroke="#9ca3af"
                                tick={{ fill: '#263238', fontSize: 12 }}
                                tickFormatter={formatViews}
                            />
                            <YAxis
                                type="category"
                                dataKey="rank"
                                hide
                            />
                            <Tooltip content={<CustomTooltip active={undefined} payload={undefined} />} cursor={{ fill: 'rgba(139, 92, 246, 0.1)' }} />
                            <Bar
                                dataKey="views"
                                radius={[0, 8, 8, 0]}
                                label={renderCustomizedLabel}
                            >
                                {movies.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                                ))}
                            </Bar>
                            {/* <Bar
                                dataKey="views"
                                shape={<CustomBar />}
                                label={renderCustomizedLabel}
                            /> */}
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Footer Stats */}
            {/* <div className="mt-6 pt-4 border-t border-gray-700 grid grid-cols-3 gap-4">
                <div className="text-center">
                    <div className="text-gray-400 text-xs mb-1">ค่าเฉลี่ย</div>
                    <div className="text-white font-semibold text-lg">
                        {formatViews(Math.floor(movies.reduce((sum, m) => sum + m.views, 0) / movies.length))}
                    </div>
                </div>
                <div className="text-center">
                    <div className="text-gray-400 text-xs mb-1">อันดับ 1</div>
                    <div className="text-purple-400 font-semibold text-lg truncate">
                        {movies[0].title}
                    </div>
                </div>
                <div className="text-center">
                    <div className="text-gray-400 text-xs mb-1">ส่วนต่าง</div>
                    <div className="text-white font-semibold text-lg">
                        {formatViews(movies[0].views - movies[movies.length - 1].views)}
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default TopMoviesChart;