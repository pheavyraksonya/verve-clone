import React from "react";

const LoginForm = () => {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-5xl pt-15 pb-15">
        <div className="flex items-center justify-center">
          <div className="mx-auto flex flex-col items-center space-y-10">
            <h1 className="text-4xl font-semibold text-primary uppercase">
              Account Login
            </h1>
            <form className="flex flex-col space-y-8 items-start" action="">
              <div className="flex space-y-3 flex-col">
                <label className="uppercase text-sm " htmlFor="email">
                  Email
                </label>
                <input type="email" className="px-4 w-100 bg-mutes  py-2 " />
              </div>
              <div className="flex space-y-3 flex-col">
                <label className="uppercase email-sm" htmlFor="password">
                  Password
                </label>
                <input type="password" className="px-4 w-100 bg-mutes py-2 " />
              </div>
              <button
                className="mx-auto inline-flex items-center justify-center rounded bg-primary
             px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-secondary 
             transition hover:bg-primary/90 "
              >
                Sign In
              </button>
            </form>
            <div className="flex items-center gap-3">
              <h1>Don't have an account yet ?</h1>
              <a href="/" className="underline">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
