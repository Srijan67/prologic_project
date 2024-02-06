import { useState } from 'react';
import './App.css';
import { BsCheck2 } from "react-icons/bs"
import text_bg from "./assets/text.png"
import thumbnail from './assets/thumbnail.png'
import arrow_down from "./assets/arrow_down.svg"
import { IoChevronDown } from "react-icons/io5";
import Header from './components/Header';
import { Footer } from './components/Footer';
function App() {
  const [selectedOption, setSelectedOption] = useState('E-Commerce');
  const [selectRadio, setSelectRadio] = useState("Home")
  const options = ['E-Commerce'];
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };
  return (
    <div className="App">
    <Header />
    <div className='hero_bg '>
    <div className='relative w-full h-full top-11 flex flex-col justify-center items-center'>
    <h2 className='playfair_font text-center'>Choose Your Favorite Category</h2>
    <p className='text-white text-[21px] opacity-60 pt-[11px] pb-[55px] text-center'>Website design, UX/UI kits, infographics, logos and scene generator</p>
    <div className='flex flex-row items-center'>
    <select className='bg-[#474747] text-white p-[16px] rounded-xl lg:w-[900px] w-[400px] md:w-[700px] border-2 border-[#FFDC7F]' value={selectedOption} onChange={handleOptionChange}>
        {options.map((option, index) => (
          <option className='text-[20px]' key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <IoChevronDown className='relative z-50 right-8' color='#fff' size={"1.5rem"}/>
      </div>
    </div>
    
    </div>
    <div className='pink_bg'>
      <div className='flex w-full h-full flex-col justify-center items-center'>
        <p className='text-[#402F00] text-[21px]'>Select Your Creative Web Pages Design</p>
        <div className='mt-[40px] mb-[35px] flex flex-row flex-wrap items-center justify-center'>
        {["Home", "About Us", "Service", "Case Study", "Blog", "Career", "Contact Us"].map((item, key) => {
          let lowerItem = item.toLowerCase()
          return <div className='mr-5 mb-5' key={key}><input
            type="radio"
            id={lowerItem}
            name={item}
            value={item}
            checked={selectRadio === item}
            onChange={(e) => setSelectRadio(e.target.value)}
            style={{display: "none"}}
          />
          <label htmlFor={lowerItem} style={{color:selectRadio ===item? "#EDAE03": "#000", transform: selectRadio ===item && 'translateY(-10px)'}} className='font-medium pt-4 pb-4 pr-6 pl-8 border-2 border-[#3D3C3C] rounded-full bg-white text-[18px] flex flex-row'>
          <span className='mr-1'>{item}</span>
          <BsCheck2 size={'1.5rem'} color={selectRadio ===item? "#EDAE03": "#000"}/></label></div>})}
        </div>
        <button onClick={scrollToBottom} style={{boxShadow: "0px 2px 0px #402F00"}} className='flex flex-row items-center text-[22px] font-semibold bg-[#F5CF6A] text-[#1A1A1A]  pt-3 pb-3 pr-9 pl-9 rounded-full'>
          See All
          <img src={arrow_down} alt='down' height={'30px'} width={'35px'} className='pl-3' />
        </button>
      </div>
    </div>
    <div className='relative bottom-2'>
    <div className='text_bg'>
      <img src={text_bg} alt='text_png' className='h-[94px] w-full pl-8 pt-5 pb-3 pr-3' height={"94px"} />
      </div>
      <div className='bg-container h-fit pt-10'>
          <img src={thumbnail} alt='template' className='h-fit w-full' />
      </div>
    <Footer />
    </div>

    </div>
  );
}

export default App;
