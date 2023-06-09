import DisplayImg from "@/components/DisplayImg";
import Head from "next/head";
import ColorThief from "colorthief";
import { useState } from "react";

const Home = () => {
  const [uploadedImg, setUploadedImg] = useState();
  const [colorPalette, setColorPalette] = useState();

  const uploadImg = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = async (event) => {
      const img = new Image();
      img.onload = () => {
        const colorThief = new ColorThief();
        const colorPalette = colorThief.getPalette(img, 6);
        setUploadedImg(event.target.result);
        setColorPalette(colorPalette);
      };
      img.src = event.target.result;
    };
    console.log(uploadedImg, colorPalette);
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <Head>
        <title>Color Generator</title>
        <meta name="description" content="not now" />
        <meta name="viewport" content="not now" />
      </Head>
      <header>
        <h1>Palette Gen</h1>
        <div className="input">
          <label htmlFor="file">Upload</label>
          <input type="file" id="file" hidden onChange={uploadImg} />
        </div>
      </header>
      <main>
        <DisplayImg uploadedImg={uploadedImg} colorPalette={colorPalette} />
      </main>
    </div>
  );
};

export default Home;
