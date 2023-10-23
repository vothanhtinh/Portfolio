import {
  EnvironmentOutlined,
  FacebookOutlined,
  GithubOutlined,
  MailOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home",
  description: "Vo Thanh Tinh",
  icons: {
    icon: "/p81S2Dt1.png",
  },
};
export default function Home() {
  return (
    <div>
      <section className="flex min-h-full  justify-between flex-col-reverse  md:flex-row ">
        <div className="flex flex-col gap-4">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="flex justify-center md:justify-normal"
          >
            <p className=" bg-blue-400 w-32 rounded-r-full text-center md:text-left py-2 px-7 text-white font-medium rounded-tl-full md:rounded-bl-none rounded-bl-full ">{`Hello I'm`}</p>
          </div>
          <h2
            data-aos="fade-up"
            data-aos-duration="3000"
            className="text-6xl font-bold text-center md:text-left"
          >
            Tinh Vo
          </h2>
          <div data-aos="fade-up" data-aos-duration="3000">
            <h3 className="uppercase font-bold text-xl text-center md:text-left">
              Front-end Developer
            </h3>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="flex gap-3 flex-col"
          >
            <div className="flex  gap-5 items-center justify-center md:justify-normal">
              <MailOutlined />
              <p>vothanhtinh147@gmail.com</p>
            </div>
            <div className="flex gap-5 items-center justify-center md:justify-normal">
              <WhatsAppOutlined />
              <p>0372311677</p>
            </div>
            <div className="flex gap-5 items-center justify-center md:justify-normal">
              <EnvironmentOutlined />
              <p>8 District, Ho Chi Minh City</p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="flex gap-2 hover:cursor-pointer justify-center md:justify-normal "
          >
            <div className="flex items-center  p-2 hover:bg-blue-400 rounded-lg text-center hover:text-white">
              <FacebookOutlined />
            </div>
            <div className="flex items-center  p-2 hover:bg-blue-400 rounded-lg text-center hover:text-white">
              <GithubOutlined />
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <Image
            src={"/home-right.png.webp"}
            alt="home-right"
            width={500}
            height={500}
            className="w-full"
          />
        </div>
      </section>
      <section className="flex min-h-full  flex-col md:flex-row justify-center mt-10">
        <div className="flex-1">
          <h2 className="text-center text-3xl font-bold">Technical Skills</h2>
          <div className="grid grid-cols-3 gap-7 mt-10">
            <div
              className="flex justify-center rounded-full"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
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
            <div
              className="flex justify-center rounded-full"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
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
            <div
              className="flex justify-center rounded-full"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
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
            <div
              className="flex justify-center rounded-full"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
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
            <div
              className="flex justify-center rounded-full"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
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
            <div
              className="flex justify-center rounded-full"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
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
            <div
              className="flex justify-center rounded-full"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
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
            <div
              className="flex justify-center rounded-full"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
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
            <div
              className="flex justify-center rounded-full"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
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
      <section className="flex flex-col md:flex-row justify-center mt-10"></section>
    </div>
  );
}
