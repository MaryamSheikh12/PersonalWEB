export const metadata = {
    title: "Sign Up"
    }
  
  const page = () => {
    return (
      <div >
        <div className='flex justify-center py-5'>
      <form className='flex flex-col gap-4 w-full max-w-md bg-white p-6 rounded-lg shadow-lg'>
        <h1 className='text-2xl font-semibold text-center mb-4'>Sign Up</h1>
        
        <input
          className='border rounded p-2 placeholder-gray-500'
          type='text'
          placeholder='Username'
          required
        />
        
        <input
          className='border rounded p-2 placeholder-gray-500'
          type='email'
          placeholder='Email'
          required
        />
        
        <input
          className='border rounded p-2 placeholder-gray-500'
          type='password'
          placeholder='Password'
          required
        />
        
        <button
          type='submit'
          className='bg-slate-800 text-white font-semibold p-1 rounded hover:bg-slate-400 transition duration-200'
        >
          Sign Up
        </button>
      </form>
    </div>
      </div>
    );
  };
  
  export default page
   