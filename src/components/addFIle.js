import React, { useState } from 'react';
import axios from "axios";

export default function FileUploadPage() {
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };

    const handleSubmission = () => {
        
        const formData = new FormData();
        formData.append("image", selectedFile);
        axios({
            // Endpoint to send files
            url: "http://146.190.109.193:8082/logoupload",
            method: "POST",
            // headers: {
            //   // Add any auth token here
            //   authorization: "",
            // },
            // Attaching the form data
            data: formData,
          })
            .then((res) => { console.log("uploaded")}) // Handle the response from backend here
            .catch((err) => { }); // Catch errors if any
        // fetch(
        //     'http://146.190.109.193:8082/logoupload',
        //     {
        //         method: 'POST',
        //         body: formData,
        //     }
        // )
        //     .then((response) => response.json())
        //     .then((result) => {
        //         console.log('Success:', result);
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });
    };

    return (
        <div>
            <input type="file" name="file" onChange={changeHandler} />
            {isFilePicked ? (
                <div>
                    <p>Filename: {selectedFile.name}</p>
                    <p>Filetype: {selectedFile.type}</p>
                    <p>Size in bytes: {selectedFile.size}</p>
                    <p>
                        lastModifiedDate:{' '}
                        {selectedFile.lastModifiedDate.toLocaleDateString()}
                    </p>
                </div>
            ) : (
                <p>Select a file to show details</p>
            )}
            <div>
                <button onClick={handleSubmission}>Submit</button>
            </div>
        </div>
    )
};