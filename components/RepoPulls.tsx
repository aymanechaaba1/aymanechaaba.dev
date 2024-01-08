import { OWNER, fetchRepoPulls } from '@/lib/utils';
import { GitPullRequest } from 'lucide-react';

async function RepoPulls({ repo }: { repo: string }) {
  const pulls = await fetchRepoPulls({
    owner: OWNER,
    repo,
  });

  return (
    <div className="flex items-center gap-3">
      <GitPullRequest size={18} />
      <p>{pulls.length}</p>
    </div>
  );
}

export default RepoPulls;
