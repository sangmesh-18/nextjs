export default function UserPage({params}:any ) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Profile Page</h1>
      <p>This is the profile page of the <span className="text-red-500 text-3xl"> {params.id}</span>.</p>
    </div>
  );
}