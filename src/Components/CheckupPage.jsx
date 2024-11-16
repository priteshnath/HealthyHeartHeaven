import React, { useState } from "react";

const CheckupPage = () => {
  const [fileNames, setFileNames] = useState([]);

  const handleFiles = (e) => {
    const files = Array.from(e.target.files);
    const names = files.map((file) => file.name);
    setFileNames(names);
  };

  return (
    <section id="checkup" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#270f3a] text-center mb-8">
          Health Checkup Form
        </h2>
        <form className="bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Upload Files
            </label>
            <div className="w-full border border-gray-300 rounded-lg px-4 py-2">
              <input
                type="file"
                multiple
                className="hidden"
                id="fileUpload"
                onChange={handleFiles}
              />
              <label
                htmlFor="fileUpload"
                className="cursor-pointer text-gray-500"
              >
                Click here to upload files
              </label>
            </div>
          </div>
          {fileNames.length > 0 && (
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-700 mb-2">
                Uploaded Files:
              </h4>
              <ul className="list-disc ml-5 text-gray-600">
                {fileNames.map((name, index) => (
                  <li key={index}>{name}</li>
                ))}
              </ul>
            </div>
          )}
          <button
            type="submit"
            className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-800"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default CheckupPage;
