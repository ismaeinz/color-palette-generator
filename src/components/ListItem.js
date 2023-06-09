import React, { useState } from "react";

const copy = <i className="far fa-copy"></i>;

function ListItem({ rgb, hex }) {
  const [copied, setCopied] = useState(false);

  // Copy to clipboard
  const copyToClipboard = (e) => {
    const color = e.target.innerText;
    navigator.clipboard.writeText(color);
  };

  return (
    <li style={{ background: rgb }}>
      <span
        onClick={(e) => {
          copyToClipboard(e);
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 1000);
        }}
      >
        {copied ? "Copied!" : hex} {copy}
      </span>
    </li>
  );
}

export default ListItem;
