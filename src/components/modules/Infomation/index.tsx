import BlockInfo from "@/components/BlockInfo";

export default function Information() {
  return (
    <section className="flex flex-col md:flex-row justify-center mt-10 gap-10 px-5">
      <div className="flex-1 ">
        <h2 className="text-center text-3xl font-bold">Education</h2>
        <BlockInfo
          title="Ho Chi Minh City Open University"
          description="GPA : 7.52"
          period="Oct 2020 - Present "
        />
      </div>
      <div className="flex-1">
        <h2></h2>
      </div>
    </section>
  );
}
