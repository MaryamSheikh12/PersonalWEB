export const metadata = {
  title: "Login "
  }

const page = () => {
  return (
    <div>
    <div className='flex justify-center py-5'>
      <form className='flex flex-col gap-4 w-full max-w-md bg-white p-6 rounded-lg shadow-lg'>
      <h1 className='text-2xl font-semibold text-center mb-4'>Login</h1>

      {/*username or email*/}

        <input className='border rounded p-2 placeholder-gray-500 ' // Tailwind classes for placeholder
        type='text'
        placeholder='Enter Username Or Email'
        required
        />

        {/*password*/}

        <input className='border rounded p-2 placeholder-gray-500 ' // Tailwind classes for placeholder
        type='password'
        placeholder='Enter Your Password'
        required
        />
        
        {/*button*/}

        <button
          type='submit'
          className='bg-slate-800  text-white font-semibold p-1 rounded hover:bg-slate-500 transition duration-200'>
          Login In
        </button>
      </form>
    </div>
    </div>
  );
};

export default page
 