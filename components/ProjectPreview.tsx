import { Project } from '@/types';

function ProjectPreview({ project }: { project: Project }) {
  return (
    <div>
      <h1 className="text-sm">{project.name}</h1>
    </div>
  );
}

export default ProjectPreview;
