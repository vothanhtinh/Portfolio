"use client";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [value, setValue] = useState("");

  return (
    <div className="mb-20">
      <div className=" h-72 bg-blue-400 flex justify-center items-center">
        <div className="text-4xl text-center text-white">Contact Me</div>
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
          <div>
            <TextArea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter message"
              autoSize={{ minRows: 5, maxRows: 7 }}
            />
          </div>
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
