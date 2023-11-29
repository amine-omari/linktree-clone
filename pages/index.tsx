import Image from "next/image";
import data from "../data.json";

export default function Home() {
  return (
    <div className="flex justify-center mx-auto w-full mt-16">
      <Image className="rounded-full" src={data.avatar} alt={data.name} width={96} height={96} />
    </div>
  );
}
