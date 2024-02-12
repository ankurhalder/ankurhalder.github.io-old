function calculateAge(dateOfBirth) {
  const parts = dateOfBirth.split("-");
  const dob = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
  const currentDate = new Date();
  let age = currentDate.getFullYear() - dob.getFullYear();
  const monthDiff = currentDate.getMonth() - dob.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && currentDate.getDate() < dob.getDate())
  ) {
    age--;
  }
  return age;
}

const dateOfBirth = "30-05-2001";

const personalInfo = {
  name: "Ankur Halder",
  title: "Software Developer",
  age: calculateAge(dateOfBirth),
  dateOfBirth: dateOfBirth,
  gender: "Male",
  languagesKnown: ["Bengali", "Hindi", "English"],
  address: "13R Ishan Ghosh Road, Kolkata: 700008, West Bengal, India",
  email: "ankur.halder12345@gmail.com",
  website: "https://ankurhalder.github.io",
  imageUrl: "/ankurhalder.jpg",
  about:
    "Hi 👋, I'm Ankur Halder. Passionate and enthusiastic about software development, proficient in MERN stack, Django (full stack, REST API, ORM), Python (OOP), JavaScript (OOP), Next.js (full stack), and DSA. Confident and dedicated in creating effective solutions. Moreover, active contributor to open-source projects.",
};

export default personalInfo;
