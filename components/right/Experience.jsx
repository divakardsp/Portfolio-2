import React from 'react';

const workHistory = [
  {
    company: "Ernst & Young (EY)",
    role: "Consultant (Full Time)",
    date: "Apr 2024 - present"
  },
  {
    company: "SchbangQ",
    role: "Backend Developer (Full Time)",
    date: "Mar 2023 - Apr 2024"
  },
  {
    company: "iNeuron.ai",
    role: "Full stack Developer (Full Time)",
    date: "Apr 2022 - Mar 2023"
  },
  {
    company: "Wama Software",
    role: "React Developer (Full Time)",
    date: "Aug 2021 - Apr 2022"
  }
];

export default function Experience() {
  return (
    <div className="min-h-screen py-16 text-muted border border-1">
      
      <h2 className="text-center text-lg font-bold mb-16 uppercase tracking-wider">
        Work History
      </h2>

      <div className="relative max-w-4xl mx-auto px-4 border border-1">
        
        {/* The continuous vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-300 -translate-x-1/2 z-0"></div>

        Mapping through the data
        {workHistory.map((job, index) => {
          // Logic to determine sides and active state
          const isEven = index % 2 === 0;
          const isActive = index === 0;

          return (
            <div 
              key={index} 
              className="grid grid-cols-[1fr_auto_1fr] gap-6 items-center mb-8 relative z-10 border border-1"
            >
              
              {/* Left Column */}
              <div className={`text-right ${isEven ? 'invisible' : 'visible'}`}>
                <h3 className="text-xl font-normal">{job.company}</h3>
                <p className="text-gray-800 text-sm md:text-base">{job.role}</p>
                <span className="text-gray-500 text-sm font-medium">{job.date}</span>
              </div>

              {/* Center Column (The Dot) */}
              <div className="flex justify-center items-center px-2 border border-1">
                <div 
                  className={`w-14 h-14 rounded-full flex justify-center items-center shadow-sm ${
                    isActive ? 'bg-[#222222]' : 'bg-gray-300 bg-opacity-60'
                  }`}
                >
                  <div 
                    className={`w-3.5 h-3.5 rounded-full ${
                      isActive ? 'bg-yellow-400' : 'bg-white'
                    }`}
                  ></div>
                </div>
              </div>

              {/* Right Column */}
              <div className={`text-left ${isEven ? 'visible' : 'invisible'}`}>
                <h3 className="text-xl font-normal">{job.company}</h3>
                <p className="text-gray-800 text-sm md:text-base">{job.role}</p>
                <span className="text-gray-500 text-sm font-medium">{job.date}</span>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}