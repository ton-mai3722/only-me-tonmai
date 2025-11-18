'use client';

import DateSelector from '@/src/component/reports/date-picker';
import ContentHitsBarChart from '@/src/component/reports/contents-hits-bar-chart';
import SearchBarChart from '@/src/component/reports/search-bar-chart';
import SubscriptionAndCoinLineChart from '@/src/component/reports/subscription-and-coin-line-chart';
import SubscriptionAndCoinPieChart from '@/src/component/reports/subscription-and-coin-pie-chart';
import { Col, Row } from 'antd';


export default function ReportsPage() {
    return (
<>



 <div className="flex flex-col items-center justify-center rounded-lg border border-zinc-200 p-10 bg-zinc-50">
            {/* <div className="flex flex-row w-full justify-end" > */}
            <Row justify={'end'} style={{display:'flex',padding:'10px'}}>
                <DateSelector />
            </Row>
            {/* </div> */}
            <section className="space-y-6 w-full">
                <h2 className="text-lg font-semibold">Content Hits</h2>
                <div className="rounded-lg border border-zinc-200 bg-white p-6">
                    <ContentHitsBarChart />
                </div>
            </section>
            <div className="grid gap-10 w-full md:grid-cols-2 mt-8">
                <section className="space-y-4">
                    <h2 className="text-lg font-semibold">Engagement</h2>
                    <div className="rounded-lg border border-zinc-200 bg-white p-6 min-h-[500px]"></div>
                </section>
                <section className="space-y-4">
                    <h2 className="text-lg font-semibold">User Visits</h2>
                    <div className="rounded-lg border border-zinc-200 bg-white p-6 min-h-[500px]"></div>
                </section>
            </div>
            <div className='flex flex-col mt-8 w-full'>
                <section className="space-y-6 w-full">
                    <h2 className="text-lg font-semibold">Search</h2>
                    <div className="rounded-lg border border-zinc-200 bg-white p-6 min-h-[500px]">
                        <SearchBarChart />
                    </div>
                </section>
            </div>
            <div className='flex flex-col mt-8 w-full'>
                <h2 className="text-lg font-semibold">Subscription & Coins</h2>
                <div className="flex mt-8 w-full">
                    <div className="flex-1 mr-8">
                        <div className="rounded-lg border border-zinc-200 bg-white p-6 min-h-[300px]">
                            <SubscriptionAndCoinLineChart />
                        </div>
                    </div>
                    <div className="w-full md:w-[360px] flex-none">
                        <div className="rounded-lg border border-zinc-200 bg-white p-6 min-h-[300px] ">
                            <SubscriptionAndCoinPieChart />
                        </div>
                    </div>
                </div>
            </div>

        </div>
</>
    );
}






