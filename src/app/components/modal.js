import React, {useState} from "react";
import {ArrowBigRightDash} from "lucide-react";

export default function Modal(props) {
  const [showModal, setShowModal] = React.useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const changeShowModal = () =>{
    if (!showModal){
      setShowModal(true);
      document.body.classList.add('overflow-hidden')
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }else{
      setShowModal(false);
      document.body.classList.remove('overflow-hidden')
      setIsLoading(true)
    }
  }

  //Set slides forGallery
  const [currentSlide, setcurrentSlide] = useState(props.projlink[0].url);
    
  const changeSlide = (currentProject) =>{
    setcurrentSlide(currentProject)
  }


  return (
    <>
    {props.modalType === 'forApp' ?(
      <button
      className="flex flex-row items-center mt-4 bg-black text-white uppercase text-sm px-4 py-2 rounded hover:bg-blue-400 active:bg-blue-600 mr-1 mb-1 ease-linear transition-all duration-200"
      type="button"
      onClick={() => window.open(props.projlink, '_blank')}
      >
        Open project<ArrowBigRightDash />
      </button>) :(
      <button
        className=" mt-4 bg-black text-white uppercase text-sm px-4 py-2 rounded hover:bg-blue-400 active:bg-blue-600 mr-1 mb-1 ease-linear transition-all duration-200"
        type="button"
        onClick={() => changeShowModal()}
        >
          Open project
      </button>
      )
    }
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex flex-col items-center bg-slate-200 w-screen h-screen px-6 py-4">
            <div className="flex flex-row justify-between w-full">
              <h4 className="font-bold">{props.title}</h4>
              <button
              className="bg-transparent border-0 text-black float-right text-3xl font-semibold outline-none focus:outline-none"
              onClick={() => changeShowModal()}
              >
                <span className="bg-transparent text-black text-4xl hover:text-zinc-500 ease-linear transition-all duration-200">
                  ×
                </span>
              </button>
            </div>
            <div className="flex flex-col h-11/12 w-full justify-center items-center">
            {isLoading ? (
              <div className="flex justify-center items-center w-full h-full bg-slate-200 fixed z-50 text-2xl m-auto">
                <div role="status">
                    <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
              </div> // Muestra el indicador de carga
            ) : null}
              {props.category === 'Animation' ?(
                <div className="aspect-video w-full md:w-6/12 lg:w-6/12 pb-4">
                  <iframe className="box-border rounded-md shadow-md w-full h-full" src={currentSlide}></iframe>
                </div>
                ):(
                  <div className="w-full h-4/5 md:h-96 pb-4 flex justify-center">
                    <img src={currentSlide} alt="img-project"
                    className="object-scale-down"/>
                  </div>
                )
              }
              <div className="flex flex-row items-center justify-center gap-4">        
                {props.projlink.map((proj, index) =>
                    <button key={index} onClick={() => changeSlide(proj.url)}
                    className="focus:shadow-xl overflow-hidden rounded-lg w-auto max-w-xs max-h-40"
                    >
                        <img src={proj.thumbnail} key={proj.url} className="object-cover" alt="thumbnail-project" />
                    </button>
                )}
              </div>         
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}