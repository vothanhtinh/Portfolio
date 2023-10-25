import { TBlockInfo } from "@/types";

export default function BlockInfo(info: TBlockInfo) {
  const { description, period, title } = info;
  return (
    <div className=" flex flex-col gap-1 w-full shadow-md shadow-blue-400 my-10 rounded-md p-4">
      <h3 className=" text-xl font-bold text-blue-400">{period}</h3>
      <h3 className=" text-xl font-bold text-blue-400">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
