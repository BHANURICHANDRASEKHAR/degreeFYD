// getRecommendedData
import express from 'express';
import CollegeData from "../Database_Models/CollegeData.js";
const router = express.Router();
const mapping = {
    Design: {
        category: "Design",
        description: "Design is a field that blends creativity with functionality to create visually appealing and user-friendly experiences. It includes fields like graphic design, UI/UX, fashion design, and interior design. Designers focus on aesthetics, user experience, and branding in digital and physical spaces.",
        careerPaths: ["Graphic Designer", "UI/UX Designer", "Interior Designer", "Fashion Designer", "Product Designer"],
        requiredSkills: ["Creativity", "Adobe Suite (Photoshop, Illustrator)", "Typography", "User Research", "Wireframing"],
        popularCourses: ["Bachelor of Design (B.Des)", "Diploma in Graphic Design", "UI/UX Certification", "Fashion Designing"]
    },
    Paramedical: {
        category: "Paramedical",
        description: "Paramedical sciences support the healthcare industry by offering diagnostic, therapeutic, and rehabilitative services. It includes medical lab technology, radiology, physiotherapy, and nursing. Paramedics work closely with doctors to ensure patient care.",
        careerPaths: ["Medical Lab Technician", "Radiologist", "Physiotherapist", "Nurse", "Emergency Medical Technician"],
        requiredSkills: ["Medical Knowledge", "Analytical Thinking", "Attention to Detail", "Patient Care", "Lab Procedures"],
        popularCourses: ["B.Sc in Medical Lab Technology", "Diploma in Radiology", "B.Sc Nursing", "BPT (Physiotherapy)"]
    },
    Management: {
        category: "Management",
        description: "Management studies focus on business strategy, finance, leadership, and organizational operations. It includes areas like accounting, investment banking, human resources, and marketing. Managers ensure efficient decision-making for business growth.",
        careerPaths: ["Financial Analyst", "Investment Banker", "HR Manager", "Marketing Executive", "Entrepreneur"],
        requiredSkills: ["Financial Analysis", "Leadership", "Problem-Solving", "Marketing Strategies", "Data Interpretation"],
        popularCourses: ["MBA in Finance", "BBA in Business Management", "CFA Certification", "Diploma in Marketing"]
    },
    Arts: {
        category: "Arts",
        description: "The arts field includes literature, performing arts, fine arts, music, filmmaking, and creative writing. It emphasizes self-expression, storytelling, and artistic innovation in visual and performing mediums.",
        careerPaths: ["Writer", "Musician", "Filmmaker", "Painter", "Actor"],
        requiredSkills: ["Creativity", "Storytelling", "Drawing/Painting", "Music Composition", "Acting"],
        popularCourses: ["Bachelor of Fine Arts (BFA)", "Diploma in Creative Writing", "Music Production Certification", "Theater Studies"]
    },
    Engineering: {
        category: "Engineering",
        description: "Engineering applies scientific and mathematical principles to solve real-world problems. It covers software development, electronics, mechanical systems, and artificial intelligence. Engineers design and develop innovative technologies that power industries.",
        careerPaths: ["Software Engineer", "Robotics Engineer", "Data Scientist", "Civil Engineer", "AI Researcher"],
        requiredSkills: ["Programming", "Mathematics", "Problem-Solving", "Machine Learning", "System Design"],
        popularCourses: ["B.Tech in Computer Science", "M.Tech in AI & ML", "Diploma in Cybersecurity", "B.E in Mechanical Engineering"]
    }
};

router.get('/getRecommendedData', async (req, res) => {
  const { Data } = req.query;
  console.log(Data)
 
  try {
    const data = await CollegeData.find({Course_Stream:{$in:Data.SelectedSubjects}});
    const description=Data.SelectedSubjects.map((val)=>{return mapping[val]})
   
    res.send({
      status: true,
      data:{recommendedData:data, description:description}
    });

  } catch (e) {
    console.error(e.message); 
    res.status(500).send({ status: false, msg: 'Internal Server Error' });
  }
});

export default router;
