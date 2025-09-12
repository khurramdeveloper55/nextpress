"use client";

import { Button } from "./Button";

export function Cta() {
  return (
    <div className="text-center pt-20 pb-16">
      <h1 className="text-6xl mb-4">
        Ready to be a{" "}
        <i>
          <b>Change-Maker ?</b>
        </i>{" "}
        Let’s Talk!
      </h1>
      <p className="text-neutral-500 mb-10">
        Are you the catalyst for change? Let's discuss your vision. Let's build{" "}
        <br />a better future, together !
      </p>
      <Button title="Contact for Work" />
    </div>
  );
}
