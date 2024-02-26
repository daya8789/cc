import Daya_image from "../../assets/Daya_image.jpeg";
import AbhishekShukla from "../../assets/AbhishekShukla.jpg";
import SatyamRai from "../../assets/SatyamRai.jpg";

export const Team = () =>{
    return(<div className="bg-[#DEECE9]">
            <h1 className="text-center text-3xl p-4 font-bold">Our Team Members</h1>
        <div className="flex flex-wrap gap-4 px-12 py-8">
            <div className="bg-[#CCCCFF] w-full sm:w-1/3 md:w-1/5 m-auto p-2 mb-4 text-center shadow-lg">
                <img src={AbhishekShukla} alt="Abhishek Shukla" className="h-full w-full m-auto rounded"/>
                <p className="text-xl font-semibold py-2">Abhishek Shukla</p>
                <p className="text-lg font-normal ">Software Developer</p>
            </div>
            <div className="bg-[#CCCCFF] w-full sm:w-1/3 md:w-1/5 m-auto p-2 mb-4 text-center shadow-lg">
                <img src={Daya_image} alt="Dayashankar Yadav" className="h-full w-full m-auto rounded"/>
                <p className="text-xl font-semibold py-2">Dayashankar Yadav</p>
                <p className="text-lg font-normal ">Full Stack Developer</p>
            </div>
            <div className="bg-[#CCCCFF] w-full sm:w-1/3 md:w-1/5 m-auto p-2 mb-4 text-center shadow-lg">
                <img src={SatyamRai} alt="SatyamRai" className="h-full w-full m-auto rounded"/>
                <p className="text-xl font-semibold py-2">Satyam Rai</p>
                <p className="text-lg font-normal ">Software Engineer</p>
            </div>
            <div className="bg-[#CCCCFF] w-full m-auto sm:w-1/3 md:w-1/5 p-2 mb-4 text-center shadow-lg">
                <img src={AbhishekShukla} alt="Dayashankar Yadav" className="h-full w-full m-auto rounded"/>
                <p className="text-xl font-semibold py-2">Priyanshu Jaiswal</p>
                <p className="text-lg font-normal ">Data Scientist</p>
            </div>
        </div>
    </div>)
}