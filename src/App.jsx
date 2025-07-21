import React, { useState } from "react";
import bowling from './BOWLING.jpeg';
import broncoSport from './Management2.jpg';
import croding from './Coding.png';
import coding1 from './Coding1.png';
import coding3 from './Coding3.png';
import coding6 from './Coding6.png';
import Management3 from './Management3.jpg';
import Managementog from './ManagementOG.png';
import Mechanical9 from './Mechanical9.png';
import Mechanical10 from './Mechanical10.png';
import Mechanical11 from './Mechanical11.png';
import Mechanical12 from './Mechanical12.png';
import Mechanical13 from './Mechanical13.png';
import Research1 from './Research1.png';
import Research2 from './Research2.png';
import Research3 from './Research3.png';
import Research4 from './Research4.png';
const sectionContent = {
  "Coding": [
    {
      image: coding1,
      description: "Built a Virtual Portfolio using React, TypeScript, and TailwindCSS.",
    },
    {
      image: croding,
      description: "Run a series of simulations in MATLAB to calculate the optimal angle of a solar panel.",
    },{
      image: coding3,
      description: "Automated Book Management System using Python, Yolov8 for book detection, the Google Vision API for text extraction, Tkinter for the HUD Design and SQLite for database management.",
    },{
      image: broncosport,
      description: "Automated a residential building's vehicle management system using Python, OpenCV for vehicle detection, and SQLite for database management.",
    },{
      image: coding6,
      description: "Designed and Developed a course in how to use AI to improve productivity, using Ford's internal LLM tools and APIs. This course was delivered to the whole cooling team at Ford.",
    }
  
  ],
  "Mechanical Design": [
    {
      image: broncosport,
      description: "Designed a prototype for a Mexican Strartup of a quad-engine aircraft using Fusion 360, including CAD modeling and rendering.",
    },
    {
      image: broncosport,
      description: "Designed a prototype for a Mexican Startup of a quad-engine aircraft using Fusion 360, including CAD modeling and rendering."
    },
    {
      image: broncosport,
      description: "Led the design and development of the transmission cooling system for the Bronco Sport, Edge, and Maverick models at Ford, from their 2025 to their 2029 model years.",
    },{
      image: broncosport,
      description: "Designed and then built a prototype of a 3D-printed automatic licence plate reader using FreeCAD.",
    },{
      image: broncosport,
      description: "Designed and then built a prototype of a 3D-printed automatic licence plate reader using FreeCAD.",
    },{
      image: Mechanical9,
      description: "Simulated the thermal performance of a concrete block to determine its suitability for thermal energy extraction in a residential building using SolidWorks.",
    },{
      image: Mechanical10,
      description: "Designed the HVAC system for a pork processing plant using AutoCAD, including the layout and selection of equipment, to ensure optimal air quality and temperature control.",
    },{
      image: Mechanical11,
      description: "Designed the HVAC system for a major hospital using AutoCAD, including the layout and selection of equipment, to ensure optimal air quality and temperature control.",
    },{
      image: Mechanical12,
      description: "Designed the HVAC system for a major clinc using AutoCAD, including the layout and selection of equipment, to ensure optimal air quality and temperature control.",
    },{
      image: Mechanical13,
      description: "Designed and machined several components using a Plasma CNC machine, including custom brackets, signs and decorative pieces.",
    }
  ],
  "Project Management": [
    {
      image: broncosport,
      description: "Lead the design process of several ford commodities, organizing team of fours meetings, setting deadlines, and ensuring the quality of the deliverables.",
    },{
      image: Management3,
      description: "Led the warranty efforts of our team, organized meetings, set deadlines, actively helped my teammates on their tasks and even designed an engineering dashboard to keep track of advancements.",
    },{
      image: Managementog,
      description: "Led my university's EV lab to successfully replace the powertrain of an electrified vehicle and gave it remote control capabilities, this while managing a team of 10 students, organizing meetings, setting deadlines, and ensuring the quality of the deliverables.",
    }
  ],
  "Extracurriculars": [
    {
      image: broncosport,
      description: "18 Handicap Golfer, played several local tournaments."
    },{
      image: broncosport,
      description: "Amateur Photographer, Fujifilm Enthusiast, Outdoor Explorer."
    },{
      image: bowling,
      description: "152 Average Bowler, participated in local leagues and tournaments, winner of the 2022 Sonora Bowling League."
    }
  ],
  "Research": [
    {
      image: Research1,
      description: "Estimation of the Availability of Electrical Energy Extracted by Thermoelectric Modules.",
      link: "https://www.researchgate.net/publication/383435482_Estimation_of_the_Availability_of_Electrical_Energy_from_the_Thermal_Energy_Extracted_by_Thermoelectric_Modules_Case_Study_in_Monterrey_Mexico"
    },
    {
      image: Research2,
      description: "Design and validation of a passenger-oriented intelligent suspension system.",
      link: "https://www.researchgate.net/publication/356423068_Passenger-Oriented_Intelligent_Suspension_with_a_Biodynamic_Model_and_Skyhook_Control"
    },{
      image: Research3,
      description: "Computing and Assessment of Discrete Angle Positions for Optimizing the Solar Energy Harvesting for Urban Sustainable Development.",
      link: "https://www.researchgate.net/publication/354282355_Computing_and_Assessment_of_Discrete_Angle_Positions_for_Optimizing_the_Solar_Energy_Harvesting_for_Urban_Sustainable_Development"
    },{
      image: Research4,
      description: "6 Months of Leading the Electric Vehicle Lab at Tec de Monterrey, working on an electrified vehicle project.",
      link: "https://conecta.tec.mx/es/noticias/monterrey/educacion/con-auto-electrico-buscan-innovar-en-alternativas-sustentables"
    }
  ]
};

export default function Portfolio() {
  const [selected, setSelected] = useState(null);

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Julio Montaño</h1>
        <p className="text-xl text-gray-400 mb-8">
          Design & Release Engineer | MEP Expert | Innovator | Researcher
        </p>

        {selected === null ? (
          <div className="text-center mt-10">
            <p className="text-lg text-gray-300 mb-6">
              Welcome to my technical portfolio, please select the skillset you want to explore.
            </p>
            <button
              onClick={() => setSelected("Coding")}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
            >
              Begin Exploring my Skills and Projects
            </button>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap gap-3 mb-6">
              {Object.keys(sectionContent).map((section) => (
                <button
                  key={section}
                  onClick={() => setSelected(section)}
                  className={`px-4 py-2 rounded-xl border ${selected === section ? "bg-blue-600 border-blue-400" : "bg-gray-800 border-gray-600"} hover:brightness-110 transition`}
                >
                  ▶ {section}
                </button>
              ))}
            </div>

            <div className="bg-gray-900 border border-gray-700 shadow-xl rounded-2xl p-6">
              <h2 className="text-2xl font-semibold mb-4">{selected}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {sectionContent[selected].map((item, index) => (
                  <div key={index} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                    <img src={item.image} alt={item.description} className="w-full h-48 object-cover" />
                    <div className="p-4 text-gray-300 text-sm">
                      {item.description}
                      {item.link && (
                        <div className="mt-2">
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-3 py-1 mt-2 bg-blue-600 text-white text-xs rounded hover:bg-blue-700"
                          >
                            Look at this research
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        <div className="mt-12 flex flex-wrap gap-2">
          <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">React</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">TailwindCSS</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Engineering Portfolio</span>
        </div>

        <div className="mt-16">
          <h2 className="text-xl font-semibold text-gray-300 mb-2">Contact Me!</h2>
          <p className="text-gray-400 mb-1">Email: montano.julio@hotmail.com</p>
          <p className="text-gray-400 mb-1">Phone: +52 (662) 204 58 49</p>
          <p className="text-gray-400 mb-4">
            LinkedIn: <a href="https://linkedin.com/in/juliomontano" className="underline text-blue-400" target="_blank" rel="noopener noreferrer">linkedin.com/in/juliomontano</a>
          </p>
          <a
            href="/CV_Julio_Montano.pdf"
            download
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Download CV
          </a>
        </div>
      </section>
    </main>
  );
}
