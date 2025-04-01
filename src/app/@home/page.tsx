import Link from "next/link";

const page = () => {
  // {children}:{children: React.ReactNode}
  return (
    <div>
      <div>
        <Link
          className="text-blue-800 text-2xl font-medium pb-5 underline"
          href="/homepage"
        >
          click here to go homepage
        </Link>
      </div>
      {/* <div>
              {children}
          </div> */}
    </div>
  );
};

export default page;
