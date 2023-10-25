import {
  EnvironmentOutlined,
  FacebookOutlined,
  GithubOutlined,
  MailOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex justify-between flex-col-reverse  md:flex-row sm:px-5 md:px-20 pt-10 mt-10 ">
      <div className="flex flex-col gap-4">
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="flex justify-center md:justify-normal mt-10 md:mt-0"
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
      <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="50">
        <Image
          src={"/home-right.png.webp"}
          alt="home-right"
          width={400}
          height={400}
          className="w-full"
        />
      </div>
    </section>
  );
}
