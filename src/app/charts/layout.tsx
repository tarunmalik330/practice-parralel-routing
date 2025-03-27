export default function ChartLayout({ barChart, lineChart }: {
      barChart: React.ReactNode,
   lineChart: React.ReactNode,
 }) {
    return (
        <div>
            <div className="">
                {barChart}
                  {lineChart}
            </div>
            {/* <div>
             
            </div> */}
        </div>
    )
}