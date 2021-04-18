export default function Container({ children }) {
  return (
    <div className='px-12 mx-auto flex flex-col min-h-screen'>{children}</div>
  );
}
