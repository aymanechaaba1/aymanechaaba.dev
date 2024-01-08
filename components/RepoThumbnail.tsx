import cloudinary from '@/lib/cloudinary';
import Image from 'next/image';

async function RepoThumbnail({ tag }: { tag: string }) {
  const { resources } = await cloudinary.api.resources_by_tag(tag);

  return (
    resources[0] && (
      <div className="w-full h-auto">
        <Image
          src={resources[0]?.url}
          width={500}
          height={100}
          style={{
            objectFit: 'cover',
          }}
          className="rounded-lg mb-5"
          alt={tag}
        />
      </div>
    )
  );
}

export default RepoThumbnail;
