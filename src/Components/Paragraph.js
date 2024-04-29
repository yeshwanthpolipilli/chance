import React, { useState } from 'react';


function Paragraph() {
    const [Text, setText] = useState("his Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam magni mollitia voluptate ipsum cumque eum laborum enim labore. Ipsa iste saepe alias vitae cum corrupti?");
    
    const TextChange = (newText) => {
        setText(newText);
    }

    const navigateToHome = () => {
        // Navigate to the home page here, for example:
        window.location.href = '/Storelocator';
    }
  
    return (
        <>
            <div className="container py-3">
                <div className="row">
                    <div className="col-lg-6">
                        <div className='my-5'>
                            <div>
                                <div onClick={() => { TextChange(""); navigateToHome(); }}>
                                    his Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam magni mollitia voluptate ipsum cumque eum laborum enim labore. Ipsa iste saepe alias vitae cum corrupti?
                                </div>
                            </div>
                            {/* Other Components with onClick handling TextChange and navigateToHome */}
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <p className='w-100 fs-6'>{navigateToHome}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Paragraph;
