import React from "react";

export default function Resources() {
  return (
    <div className="min-h-screen p-2 sm:p-20 flex gap-12 flex-wrap">
      <div className="flex flex-col gap-2 w-full sm:w-[500px]">
        <iframe
          className="shadow-lg rounded-xl"
          id="video-1"
          // width="500"
          height="315"
          src="https://www.youtube.com/embed/ZyRziVjB2fc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div className="flex gap-2 items-start">
          <div className="bg-black w-10 h-10 rounded-full"></div>
          <p className="flex-1">
            How to determine rate of a reaction in the laboratory{" "}
            <b>by Jolayemi</b>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full sm:w-[500px]">
        <iframe
          className="shadow-lg rounded-xl"
          id="video-1"
          // width="500"
          height="315"
          src="https://www.youtube.com/embed/nOcMlJq1_qc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div className="flex gap-2 items-start">
          <div className="bg-black w-10 h-10 rounded-full"></div>
          <p className="flex-1">
            Oxidation and reduction in simple tabular form <b>by Jolayemi</b>
          </p>
        </div>
      </div>
    </div>
  );
}
