import Image from "next/image";

export default function Skills() {
  return (
    <section className="flex min-h-full  flex-col md:flex-row justify-center  mt-10">
      <div className="flex-1">
        <h2 className="text-center text-3xl font-bold">Technical Skills</h2>
        <div className="grid grid-cols-3 gap-7 mt-10">
          <div className="flex justify-center rounded-full ">
            <div className="flex justify-center flex-col gap-2">
              <div className="flex justify-center items-center">
                <Image
                  src={"/html5.svg"}
                  width={50}
                  height={50}
                  alt="html5"
                  className="rounded-full p-1"
                />
              </div>
              <h2 className="text-center uppercase">Html</h2>
            </div>
          </div>
          <div className="flex justify-center rounded-full">
            <div className="flex justify-center flex-col gap-2">
              <div className="flex justify-center items-center">
                <Image
                  src={"/css3.svg"}
                  width={50}
                  height={50}
                  alt="css3"
                  className="rounded-full p-1"
                />
              </div>
              <h2 className="text-center uppercase">Css</h2>
            </div>
          </div>
          <div className="flex justify-center rounded-full">
            <div className="flex justify-center flex-col gap-2">
              <div className="flex justify-center items-center">
                <Image
                  src={"/reactjs.svg"}
                  width={50}
                  height={50}
                  alt="reactjs"
                  className="rounded-full p-1"
                />
              </div>
              <h2 className="text-center uppercase">Reactjs</h2>
            </div>
          </div>
          <div className="flex justify-center rounded-full">
            <div className="flex justify-center flex-col gap-2">
              <div className="flex justify-center items-center">
                <Image
                  src={"/sass.svg"}
                  width={50}
                  height={50}
                  alt="sass"
                  className="rounded-full p-1"
                />
              </div>
              <h2 className="text-center uppercase">Sass</h2>
            </div>
          </div>
          <div className="flex justify-center rounded-full">
            <div className="flex justify-center flex-col gap-2">
              <div className="flex justify-center items-center">
                <Image
                  src={"/javascript.svg"}
                  width={50}
                  height={50}
                  alt="javascript"
                  className="rounded-full p-1"
                />
              </div>
              <h2 className="text-center uppercase">Javascript</h2>
            </div>
          </div>
          <div className="flex justify-center rounded-full">
            <div className="flex justify-center flex-col gap-2">
              <div className="flex justify-center items-center">
                <Image
                  src={"/typescript.svg"}
                  width={50}
                  height={50}
                  alt="typescript"
                  className="rounded-full p-1"
                />
              </div>
              <h2 className="text-center uppercase">typescript</h2>
            </div>
          </div>
          <div className="flex justify-center rounded-full">
            <div className="flex justify-center flex-col gap-2">
              <div className="flex justify-center items-center">
                <Image
                  src={"/redux.webp"}
                  width={50}
                  height={50}
                  alt="redux"
                  className="rounded-full p-1"
                />
              </div>
              <h2 className="text-center uppercase">redux</h2>
            </div>
          </div>
          <div className="flex justify-center rounded-full">
            <div className="flex justify-center flex-col gap-2">
              <div className="flex justify-center items-center">
                <Image
                  src={"/nextjs.webp"}
                  width={50}
                  height={50}
                  alt="nextjs"
                  className="rounded-full p-1"
                />
              </div>
              <h2 className="text-center uppercase">nextjs</h2>
            </div>
          </div>
          <div className="flex justify-center rounded-full">
            <div className="flex justify-center flex-col gap-2">
              <div className="flex justify-center items-center">
                <Image
                  src={"/nodejs.svg"}
                  width={50}
                  height={50}
                  alt="nodejs"
                  className="rounded-full p-1"
                />
              </div>
              <h2 className="text-center uppercase">nodejs</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 justify-center mt-10 md:mt-0 ">
        <h2 className="text-3xl font-bold text-center">Soft Skills</h2>
        <div className="flex flex-col gap-7 mt-10 ">
          <div className="flex justify-center flex-col gap-2 rounded-full">
            <div className="flex justify-center">
              <Image
                src={"/meeting.png"}
                width={50}
                height={50}
                alt="meeting"
                className="rounded-full p-1"
              />
            </div>
            <h2 className="text-center uppercase ">Teamwork</h2>
          </div>
          <div className="flex justify-center flex-col gap-2 rounded-full">
            <div className="flex justify-center">
              <Image
                src={"/creativity.png"}
                width={50}
                height={50}
                alt="creativity"
              />
            </div>
            <h2 className="text-center uppercase">Creativity</h2>
          </div>
          <div className="flex justify-center flex-col gap-2 rounded-full">
            <div className="flex justify-center ">
              <Image
                src={"/communication.png"}
                width={50}
                height={50}
                alt="communication"
                className="rounded-full p-1"
              />
            </div>
            <h2 className="text-center uppercase">Communication</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
