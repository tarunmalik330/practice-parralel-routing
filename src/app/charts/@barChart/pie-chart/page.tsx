import Link from "next/link";

export default function BarChart() {
    return (
        <div className="flex">
            <p className="p-3 w-[200px] border border-solid border-black">bar chart</p> <Link className="border border-black border-solid p-3 max-w-[300px]" href="/charts">chart</Link>
        </div>
    )
}