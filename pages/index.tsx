import Image from "next/image";
import data from "../data.json";

function LinkCard({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image?: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center p-1 w-full rounded-md hover:scale-105 transition-all bg-gray-100 mb-3"
    >
      <div className="flex text-center">
        {image && (
          <Image
            className="rounded-sm"
            src={image}
            alt={title}
            width={40}
            height={40}
          />
        )}
        <h2 className="font-semibold w-full text-center text-gray-700">{title}</h2>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto w-full mt-16 px-8">
      <Image
        className="rounded-full"
        src={data.avatar}
        alt={data.name}
        width={96}
        height={96}
      />
      <h1 className="font-bold mt-4 mb-8 text-xl text-white">{data.name}</h1>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
    </div>
  );
}
