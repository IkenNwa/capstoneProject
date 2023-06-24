/* eslint-disable @typescript-eslint/no-explicit-any */
// Create user Context

import  { createContext, useState } from 'react';

export const UserContext = createContext({});
export const UserProvider = ({ children }:any ) => {
    const [user, setUser] = useState(null);

    // useEffect(() => {
    //     app.auth().onAuthStateChanged((user) =>{
    //         setUser(user)
    //     });
    // }, [])
    

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
// Create Feed Context

export const FeedContext = createContext({});
export const FeedProvider = ({ children }:any ) => {
    const [feed, setFeed] = useState([]);

    return (
        <FeedContext.Provider value={{ feed, setFeed }}>
            {children}
        </FeedContext.Provider>
    )
}


// Create post Context

export const PostContext = createContext({});
export const PostProvider = ({ children }:any ) => {
    const [post, setPost] = useState([]);

    return (
        <PostContext.Provider value={{ post, setPost }}>
            {children}
        </PostContext.Provider>
    )
}

//Create search Context

export const SearchContext = createContext({});
export const SearchProvider = ({ children }:any ) => {
    const [search, setSearch] = useState("");

    return (
        <SearchContext.Provider value={{ search, setSearch }}>
            {children}
        </SearchContext.Provider>
    )
}
