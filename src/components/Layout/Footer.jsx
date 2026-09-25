import half from  "@/assets/half.png"

const Footer = () => {
  return (
    <div className="bg-green-400  w-full  h-[400px]">
       <div className="flex items-center justify-between">
        <img className="max-h-[400px] -ml-100"  src={half} alt="my Image" />
         <div className="flex flex-col items-center gap-5 pr-50">
            <h1>Akil's Portfolio</h1>
            <div className="flex flex-col  items-center">
            <p>akil@gmail.com</p>
            <p>+9779584625145</p>
            <p>Banjarmasin, South Borneo, Indonesia</p>
</div>
            <button className="bg-green-500 py-2 px-4 text-white rounded-lg">Back Home</button>
            
         </div>
       </div>
    </div>
  )
}

export default Footer