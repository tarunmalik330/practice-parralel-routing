import Link from "next/link";

export default function BarChart() {
    return (
        <div className="flex"><p className="border border-black border-solid p-3 max-w-[300px] ">
            bar chart</p> <Link className="border border-black border-solid p-3 max-w-[300px]" href="/charts/pie-chart">pie chart</Link>
        </div>
    )
}