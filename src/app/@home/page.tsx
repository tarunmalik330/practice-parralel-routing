import Link from "next/link"

const page = () => {
    // {children}:{children: React.ReactNode}
  return (
          <div>
       <div>
          <Link href="/home-page">hellow world !</Link>
          </div>
          {/* <div>
              {children}
          </div> */}
      </div>
  )
}

export default page