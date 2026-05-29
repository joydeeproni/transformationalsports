import Image from 'next/image';

export default function TeamCard({ name, role, bio, imageUrl }) {
  return (
    <div className="flex flex-col h-full overflow-hidden rounded-md border border-black/5 bg-white transition-shadow duration-300 hover:shadow-md">
      {/* Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
        <Image
          src={imageUrl}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* Info Block */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-base font-medium text-near-black">{name}</h3>
        <p className="mt-1 text-xs font-medium uppercase tracking-[2px] text-brown/50">
          {role}
        </p>
        {bio && (
          <p className="mt-4 text-sm leading-relaxed text-brown/70 flex-1">
            {bio}
          </p>
        )}
      </div>
    </div>
  );
}
