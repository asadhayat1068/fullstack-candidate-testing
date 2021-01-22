const Modal = (props) => {

    return (
    <div>
        <div className="fixed md:top-2/4 md:left-2/4 md:transform md:-translate-x-2/4 md:-translate-y-2/4  z-50">
            <div className="bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
            <div className="rounded-lg w-full border border-gray-200 px-5 py-4 bg-white dark:bg-gray-800 shadow-2xl ">
                <div className="flex mb-4 pb-4 border-b justify-between">
                <h6 className="font-bold text-lg">{ props.title.toUpperCase() }</h6>
                <svg className="w-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor"
                    onClick={() => props.setModalVisibility(false)}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4">
                    {props.section.map((dept, index) => (
                        <p className="text-sm my-2 inline-block" key={index}>
                            {dept?.key}
                            <span className="text-xs text-gray-400 ml-1">
                            {parseInt(dept?.doc_count).toLocaleString() }
                            </span>
                        </p>
                    ))}
                </div>
            </div>
            </div>
        </div>
        <div 
            className="fixed top-0 left-0 w-full h-full bg-gray-300 bg-transparent opacity-70 z-40"
            onClick={() => props.setModalVisibility(false)}
        >

        </div>
    </div>
    );
  };
  
  export default Modal;