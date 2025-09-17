import Image from 'next/image';
import hanumanFlag from "../assets/hanuman.jpg";

const BackgroundFlag = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
      <Image 
        src={hanumanFlag} 
        alt="Lord Hanuman Background"
        layout="fill" 
        className="object-cover blur-lg" 
      />
      
      <div className="absolute inset-0 bg-black opacity-70"></div> 
    </div>
  );
};

export default BackgroundFlag;