import React, {useState} from 'react'

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  return (
    <section className="mern-signup">
      <div className="mern-signup__container">
        <div className="mern-signup__container__form">
          <h3 className="mern-signup__container__form-title text-align-center">
            Sign Up
          </h3>
          <form className="mern-signup__container__form">
            <div className="mern-signup__container__form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="inputField"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                name="email"
                required
              />
            </div>
            <div className="mern-signup__container__form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="inputField"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                name="password"
                required
              />
            </div>
            <button type="submit">Sign In</button>
            <button type="submit">Sign Up</button>
          </form>
          <p className="mern-signup__container__form__footer">
            <a href="/signup">Forgot Password</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignIn