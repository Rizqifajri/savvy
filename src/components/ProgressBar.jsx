import "../App.css";

const ProgressBar = ({ balance }) => {
  const percentage = (percent) => {
    const valueDashOffset = 722 - (percent / 100) * 361;
    return `${valueDashOffset}px`;
  };

  return (
    <>
      <div className='container mx-auto sm:mx-0 w-fit h-fit sm:overflow-hidden relative'>
        <svg
          width={250}
          height={250}
          viewBox='-31.25 -31.25 312.5 312.5'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          style={{ transform: "rotate(180deg)" }}
        >
          <circle
            r={115}
            cx={125}
            cy={125}
            stroke='white'
            strokeWidth={26}
            strokeLinecap='round'
            strokeDashoffset='361px'
            fill='transparent'
            strokeDasharray='722.2px'
          />

          <circle
            r={115}
            cx={125}
            cy={125}
            stroke='#EB7F63'
            strokeWidth={26}
            strokeLinecap='round'
            strokeDashoffset={percentage(50)} //0% = 722, 50% = 541.5 , 100% = 361 => rumus 722 - (persen * 4)
            fill='transparent'
            strokeDasharray='722.2px'
          />
        </svg>
        <p className='absolute text-center top-[33%] text-white left-[23%]  '>
          Rp 150,000 <br /> <span className=''>sudah terkumpul</span>
        </p>
      </div>
    </>
  );
};

export default ProgressBar;
