import BlockInfo from "@/components/molecules/BlockInfo";

export default function Information() {
  return (
    <section className="flex flex-col md:flex-row justify-center mt-10 gap-10 px-5 md:px-20">
      <div className="flex-1 ">
        <h2 className="text-center text-3xl font-bold">Education</h2>
        <BlockInfo
          title="Ho Chi Minh City Open University"
          description="GPA : 7.52"
          period="Oct 2020 - Present "
        />
      </div>
      <div className="flex-1">
        <h2 className="text-center text-3xl font-bold">Work Experience</h2>
        <BlockInfo
          title="Ho Chi Minh City Open University"
          description="GPA : 7.52"
          period="Oct 2020 - Present "
        />
      </div>
    </section>
  );
}
