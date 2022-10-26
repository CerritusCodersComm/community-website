import Link from "next/link";

const Errorpage = () => {
  return (
    <>
      <div className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
        <h1 className="text-4xl font-extrabold text-white tracking-widest">
          Sorry, currently this page is getting built by the community.
        </h1>
        <button className="mt-5">
          <Link href="/">
            <a className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
              <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

              <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                Go Home
              </span>
            </a>
          </Link>
        </button>
      </div>
    </>
  );
};

export default Errorpage;
