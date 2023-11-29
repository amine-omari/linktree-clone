import Image from "next/image";
import data from "../data.json";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto w-full mt-16">
      <Image
        className="rounded-full"
        src={data.avatar}
        alt={data.name}
        width={96}
        height={96}
      />
      <h1 className="font-bold mt-4 text-xl">{data.name}</h1>
    </div>
  );
}

function LinkCard({ href, title, image}) {
  return (
    <a href={href}>
      <div>
        <h2 className="font-bold text-lg">{title}</h2>
      </div>
    </a>
  )
}