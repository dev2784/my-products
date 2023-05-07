import React, {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
  } from "react";
  
  const AuthContext = createContext({});
  
  // Export the provider as we need to wrap the entire app with it
  export const AuthProvider = (props) => {
    const [token, setToken] = useState(null);
  
    // Check if there is a currently active session
    useEffect(() => {
        if(localStorage.getItem('token')){
            setToken(localStorage.getItem('token'))
        }
    }, []);

    // call the login method to set the token
    const login = (token) => {
        setToken(token.token)
        localStorage.setItem('token', token.token)
      }

  
    // Call the logout method to clear the token
    function logout() {
      localStorage.clear()
      setToken(null)
    }
  
    // Make the provider update only when it should.
    // We only want to force re-renders if the user,
    // loading or error states change.
    //
    // Whenever the `value` passed into a provider changes,
    // the whole tree under the provider re-renders, and
    // that can be very costly! Even in this case, where
    // you only get re-renders when logging in and out
    // we want to keep things very performant.
    const memoedValue = useMemo(
      () => ({
        token,
        login,
        logout,
      }),
      [token]
    );
  
    // We only want to render the underlying app after we
    // assert for the presence of a current user.
    return (
      <AuthContext.Provider value={memoedValue}>
        {props.children}
      </AuthContext.Provider>
    );
  }
  
  // Let's only export the `useAuth` hook instead of the context.
  // We only want to use the hook directly and never the context component.
  export default function useAuth() {
    return useContext(AuthContext);
  }