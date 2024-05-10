import React from "react";
import product from "../assets/product-download.png";
import googlePlay from "../assets/googleplay.png";

const ProductDownload = () => {
  return (
    <section className="py-24">
      <div className='flex flex-col md:flex-row justify-center gap-10'>
        <div>
          <img src={product} alt='' />
        </div>
        <div className="flex flex-col gap-5 justify-center">
          <h1 className='text-left md:text-center font-bold text-[30px] text-purple-900 mx-5'>
            Ready to Manage your Financial ?
          </h1>
          <p className="font-light text-purple-800 text-[16px] text-left mx-5">
          Lets get the app on Google Playstore !
          </p>
          <button>
            <img className="w-56" src={googlePlay} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDownload;
