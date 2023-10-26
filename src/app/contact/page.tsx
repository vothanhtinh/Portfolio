"use client";

import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { motion } from "framer-motion";
import TextAreaComp from "@/components/atoms/TextArea";

export default function Contact() {
  const text = "CONTACT ".split("");

  return (
    <div className="mb-20">
      <div className=" h-72 bg-blue-400 flex justify-center items-center">
        {text.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.9,
              delay: i / 5,
            }}
            key={i}
            className="text-4xl text-center text-white"
          >
            {el}
          </motion.span>
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-10 mt-10 px-5 md:px-20">
        <div className="w-full flex flex-col gap-5">
          <div className=" flex justify-left items-center gap-3">
            <span className="text-blue-400 text-2xl">
              <MailOutlined />
            </span>
            vothanhtinh147@gmail.com
          </div>
          <div className=" flex justify-left items-center gap-3">
            <span className="text-blue-400 text-2xl">
              <PhoneOutlined />
            </span>
            0372311677
          </div>
        </div>

        <div className="flex flex-col justify-between gap-10 w-full">
          <Input placeholder="Enter your name" style={{ height: "40px" }} />
          <Input placeholder="Enter your email" style={{ height: "40px" }} />
        </div>
        <div className="w-full ">
          <TextAreaComp />
          <div>
            <motion.button
              whileTap={{ scale: 0.7 }}
              whileHover={{ scale: 1.1 }}
              className="float-right mt-4 py-2 px-4  border rounded-md uppercase bg-blue-400 text-blue-400"
            >
              <span className="text-white">Send message</span>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
