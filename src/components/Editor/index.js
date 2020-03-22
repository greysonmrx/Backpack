import React, { useState, useEffect } from "react";

import { Quill } from "./styles";

function Editor({ initialValue, onChange }) {
  const [value, setValue] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "super" }, { script: "sub" }],
      [{ header: 1 }, { header: 2 }, "blockquote", "code-block"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" }
      ],
      [{ direction: "rtl" }, { align: [] }],
      ["link", "image", "formula"],
      ["clean"]
    ]
  };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    onChange(value);
  }, [value, onChange]);

  return <Quill value={value} onChange={setValue} modules={modules} />;
}

export default Editor;
