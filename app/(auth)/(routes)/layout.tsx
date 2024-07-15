export default function LayoutAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col justify-center h-full items-center'>
      <p>UnaiGonzalez Dashboard</p>
      <h1 className='text-3xl my-2 '>Welcome to my dashboard</h1>
      <h2 className='text-2xl mb-3'>UnaiGonzalez Dashboard</h2>

      {children}
    </div>
  );
}
