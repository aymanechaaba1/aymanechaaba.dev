import { v4 as uuidv4 } from 'uuid';
import { RiNextjsFill } from 'react-icons/ri';
import ProjectPreview from './ProjectPreview';
import { Project } from '@/types';

const projects: Project[] = [
  {
    id: uuidv4(),
    name: 'Profans',
    description: 'Buy tickets Online right From your Bed.',
    live_url: 'https://profans.pro',
    logo: 'https://profans.pro/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftadakirnet-clone-ae832.appspot.com%2Fo%2Ftadakirnet-clone%2520logo2.png%3Falt%3Dmedia%26token%3D1518680c-5586-4e8f-a44a-d8fb1aadf408&w=256&q=75',
    repo: 'https://github.com/aymanechaaba1/profans',
    stack: [
      {
        name: 'NextJS',
        icon: <RiNextjsFill />,
      },
    ],
    thumbnail: '',
  },
];

function Projects() {
  return (
    <div>
      {projects.map((project) => (
        <ProjectPreview key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Projects;
