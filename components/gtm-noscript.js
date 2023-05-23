import React from "react";

export default function gtmNoscript() {
  return (
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K3CZ2MV"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`
      }}
    ></noscript>
  );
}
