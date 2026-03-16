function Register({ setToggle }) {
  return (
    <div className="shadow-lg border border-gray-100 p-8 rounded-xl w-full max-w-md">
      <div className="flex flex-col justify-center items-center mb-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-2 text-center">Create an account</h1>
        <p className="text-sm text-slate-600 text-center">Join us today</p>
      </div>

      <form action="" className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="John Doe"
            className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all duration-200 bg-slate-50/50 hover:bg-slate-50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="you@example.com"
            className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all duration-200 bg-slate-50/50 hover:bg-slate-50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="••••••••"
            className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all duration-200 bg-slate-50/50 hover:bg-slate-50"
          />
        </div>

        <button className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-all duration-200 shadow-sm hover:shadow-md">
          Sign Up
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-600">
        Already have an account?{' '}
        <a
          href="#"
          className="font-semibold text-slate-900 hover:text-slate-700 transition-colors duration-200"
          onClick={(e) => {
            e.preventDefault()
            setToggle((prev) => !prev)
          }}
        >
          Sign In
        </a>
      </p>
    </div>
  )
}

export default Register;
