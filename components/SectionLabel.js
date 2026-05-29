export default function SectionLabel({ text, light = false, centered = true }) {
  return (
    <p
      className={`text-xs font-medium uppercase tracking-[3px] ${
        centered ? 'text-center' : 'text-left'
      } ${light ? 'text-white/40' : 'text-brown/40'}`}
    >
      {text}
    </p>
  );
}
