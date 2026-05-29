import MandorlaLogo from '@/components/MandorlaLogo';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white">
      <MandorlaLogo size={64} color="#FFB23E" />
    </div>
  );
}
