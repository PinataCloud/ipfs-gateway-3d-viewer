import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const App = () => {
  const [objectUrl, setUrl] = useState("");
  const [filename, setFilename] = useState(null);
  const [customname, setCustomName] = useState(null);
  const [dimensions, setDimensions] = useState({
    height: 600,
    width: 800,
  });

  useEffect(() => { 
    if (window.OV) {
      detectDimensions();
      window.addEventListener("resize", detectDimensions);
      const params = new URLSearchParams(window.location.search);
      const object = params.get("object");
      const name = params.get("filename");
      const customName = params.get("customname");
      if (name) {
        setFilename(name);
      }
      if (customName) {
        setCustomName(customName);
      }
      const baseUrl =
        `${window.location.origin}${window.location.pathname}/`.split(
          "ipfs/"
        )[0];
      console.log("BASE URL: ", baseUrl);
      const url = `${baseUrl}ipfs/${object}?filename=${name ? name : filename}`;
      console.log("Full URL: ", url);
      setUrl(url);
      return () => {
        window.removeEventListener("resize", detectDimensions);
      };
    }
    //eslint-disable-next-line
  }, [window.OV]);

  const detectDimensions = () => {
    const height = window.innerHeight;
    const width = window.innerWidth;
    setDimensions({
      height,
      width,
    });
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Helmet>
        <title>
          {customname ? customname : filename ? filename.split(".")[0] : ""}
        </title>
        <meta
          property="og:title"
          content={
            customname ? customname : filename ? filename.split(".")[0] : ""
          }
        />
        <meta
          property="og:description"
          content="A 3D model hosted on IPFS + Pinata"
        />
        <meta property="og:type" content="object" />
      </Helmet>
      <div
        className="online_3d_viewer"
        style={{ width: dimensions.width, height: dimensions.height }}
        model={objectUrl}
        camera="-1.5,-3.0,2.0,0,0,0,0,0,1"
      ></div>
    </div>
  );
};

export default App;
