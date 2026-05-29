export default function Divider({
  color = '#FFB23E',
  width = '40px',
  weight = '2px',
  centered = false,
}) {
  return (
    <hr
      className={`my-5 ${centered ? 'mx-auto' : 'ml-0'}`}
      style={{
        width,
        height: weight,
        backgroundColor: color,
        border: 'none',
        borderRadius: '1px',
      }}
    />
  );
}
