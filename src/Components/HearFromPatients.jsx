import React from "react";

const HearFromPatients = () => {
  const patients = [
    {
      name: "Nidhi Savaliya",
      imgSrc: "./Images/card-nidhi-photo.jpg",
      experience:
        "My heart disease journey began unexpectedly, altering my life in profound ways. I faced the reality of a condition I never anticipated, but through resilience and support.",
      symptoms:
        "The symptoms of my heart disease were alarming and disruptive. From chest pain and shortness of breath to fatigue and dizziness.",
      advice:
        "To others facing heart disease, I offer this advice: prioritize your health, listen to your body, and don't hesitate to seek medical attention.",
    },
    {
      name: "Jeel Upadhyay",
      imgSrc: "./Images/card-zeel-photo.jpg",
      experience:
        "Facing heart disease was a sudden awakening. One day, I felt a tightening in my chest during a routine walk. Ignoring it wasn't an option anymore. It was my heart demanding attention.",
      symptoms:
        "Chest tightness and shortness of breath were persistent, especially during physical activity. It felt like an elephant sitting on my chest.",
      advice:
        "Don't dismiss symptoms, no matter how subtle. Early detection can be life-saving. Listen to your body and prioritize regular check-ups.",
    },
    {
      name: "Pritesh Nath",
      imgSrc: "./Images/Pritesh.jpg",
      experience:
        "Discovering my heart condition was unexpected. I experienced sudden fatigue and dizziness during work. It was a wake-up call to prioritize my health.",
      symptoms:
        "Fatigue, dizziness, and irregular heartbeats were alarming. Simple tasks became daunting, and each day felt like a struggle to keep going.",
      advice:
        "Take your heart health seriously. Even minor symptoms could be warning signs. Prioritize self-care and seek medical advice promptly. Your heart deserves attention.",
    },
  ];

  return (
    <div
      id="hear-from-patient"
      className="hear-from-patient-page flex flex-col items-center justify-center px-4 py-12 pt-16"
    >
      <h2 className="text-4xl font-bold text-[#270f3a] mb-8 self-start p-5">
        Hear from Patients
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-screen-xl">
        {patients.map((patient, index) => (
          <div
            key={index}
            className="patient-card bg-gradient-to-t from-gray-100 to-orange-50 shadow-md rounded-2xl overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="patient-card-hover flex flex-col items-center bg-white">
              <img
                src={patient.imgSrc}
                alt={patient.name}
                className="w-24 h-24 object-cover object-top rounded-full"
              />

              <h2 className="text-lg font-bold text-gray-800">
                {patient.name}
              </h2>
            </div>

            <div className="p-2">
              <div className="mb-1">
                <h3 className="text-lg font-semibold text-orange-500">
                  How did it happen?
                </h3>
                <p className="text-sm text-gray-700">{patient.experience}</p>
              </div>
              <div className="mb-1">
                <h3 className="text-lg font-semibold text-orange-500">
                  Symptoms
                </h3>
                <p className="text-sm text-gray-700">{patient.symptoms}</p>
              </div>
              <div className="mb-1">
                <h3 className="text-lg font-semibold text-orange-500">
                  Advice
                </h3>
                <p className="text-sm text-gray-700">{patient.advice}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HearFromPatients;
