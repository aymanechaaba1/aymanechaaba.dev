import { OWNER, fetchRepoLanguages } from '@/lib/utils';

async function RepoLanguages({ repo }: { repo: string }) {
  const languages = await fetchRepoLanguages({
    owner: OWNER,
    repo,
  });

  return (
    <div className="flex items-center gap-3 mt-3 border-t pt-2 divide-x">
      {Object.entries(languages).map(([language, _], i) => (
        <div key={i} className="font-medium text-sm pl-3 first:pl-0">
          <span>{language}</span>
        </div>
      ))}
    </div>
  );
}

export default RepoLanguages;
