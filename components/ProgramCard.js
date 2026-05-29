import Link from 'next/link';

const toTitleCase = (str) => {
  if (!str) return '';
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => {
      if (word === '(btg)') return '(BTG)';
      if (word === 'covid-19') return 'COVID-19';
      if (word === '2.0') return '2.0';
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
};

export default function ProgramCard({
  title,
  backgroundImage,
  href,
  buttonText,
}) {
  return (
    <Link
      href={href}
      className="group relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-md transition-all duration-500 hover:shadow-lg"
    >
      {/* Background image with subtle zoom on hover */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 p-6 md:p-8">
        <h3 className="text-xl font-light text-white md:text-2xl leading-snug tracking-tight max-w-[90%]">
          {toTitleCase(title)}
        </h3>

        {buttonText ? (
          <span className="mt-4 inline-block btn-primary text-xs">
            {buttonText}
          </span>
        ) : (
          <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-white/60 group-hover:text-white transition-colors duration-200">
            Learn more
            <span className="transform transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
          </span>
        )}
      </div>
    </Link>
  );
}
