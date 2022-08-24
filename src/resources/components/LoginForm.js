function LoginForm(props)
{
    const { email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError } = props;
    return (
    <>
            <div className='container-center'>
              <div className='container-center-wrapper'>
                <form>
                  <label>Username</label>
                  <input type="text" required autoFocus value={email} onChange={e => setEmail(e.target.value)}></input>
                  <p >{emailError}</p>
          
                  <label>Password</label>
                  <input type="password" required autoFocus value={password} onChange={e => setPassword(e.target.value)}></input>
                  <p >{passwordError}</p>
                  <div className='btnContainer'>
                    {hasAccount ? (
                      <>
                        <button onClick={handleLogin}>Sign in</button>
                        <p>Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                      </>
                    ) : (<>
                      <button onClick={handleSignup}>Sign up</button>
                      <p>Have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                    </>)}
                  </div>
                </form >
              </div >
            </div >
    
    
          </>
        );
}
export default LoginForm;