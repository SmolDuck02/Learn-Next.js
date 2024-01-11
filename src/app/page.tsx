import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-0 w-0 border-b-[60px] border-r-[80px]  border-r-transparent text-gray-500">
        dee
      </div>
      <div className=" text-white">hol</div>
      <p className={` text-xl text-gray-800 md:text-3xl md:leading-normal`}></p>
      <Image
        src="/pbb.jpg"
        width={500}
        height={5000}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
      <p>Hello</p>
    </>
  );
}
