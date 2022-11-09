
export interface ServiceProps {
  urlSer?: string;
  content?: string;
  title?: string;
}

export default function ServiceItems({ urlSer, content, title }: ServiceProps) {
  const items = title?.split("");

  return (
    <article style={{backgroundImage: `url(${urlSer})`}} className={`relative h-[180px] bg-contain mx-5 lg:mx-0`}>
      <figure className="absolute text-center text-white uppercase mx-auto w-full h-auto">
        <h3 className="text-sm mt-10">{title}</h3>
        <div>{content}</div>
      </figure>
    </article>
  );
}
