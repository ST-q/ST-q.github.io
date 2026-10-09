export interface Education {
  school: string;
  degree: string;
  college: string;
  period: string;
  research?: string;
}

// Single source of truth for the homepage content.
export const profile = {
  name: 'Mingwang Zhang',
  headline: "Master's student · Multi-agent cooperative computing · Zhejiang University",
  description:
    "Master's student at Zhejiang University researching multi-agent cooperative computing systems.",
  avatar: '/profile.jpg',
  email: 'Zmw-01@outlook.com',
  github: 'https://github.com/tutuwang028-creator',
  about:
    "I'm a master's student at Zhejiang University, researching multi-agent cooperative computing systems. My background is in automation, spanning embedded control (microcontrollers, motor drivers, PID), robotics software (ROS), containerized services (Docker, K3s), and edge inference deployment. I'm comfortable working across the stack, from hardware to infrastructure.",
};

export const education: Education[] = [
  {
    school: 'Zhejiang University',
    degree: "Master's, Electronic Information",
    college: 'College of Control Science and Engineering',
    period: '2024.09 – 2027.07 (expected)',
    research: 'Multi-agent cooperative computing systems',
  },
  {
    school: 'South China University of Technology',
    degree: "Bachelor's, Automation",
    college: 'School of Automation Science and Engineering',
    period: '2020.09 – 2024.07',
  },
];
