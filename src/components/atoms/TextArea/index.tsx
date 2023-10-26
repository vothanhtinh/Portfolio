"use client";

import TextArea from "antd/es/input/TextArea";
import { useState } from "react";

export default function TextAreaComp() {
  const [value, setValue] = useState("");

  return (
    <TextArea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Enter message"
      autoSize={{ minRows: 5, maxRows: 7 }}
    />
  );
}
