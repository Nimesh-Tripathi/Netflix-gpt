import React, { useState } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/Firebase'
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { useEffect } from 'react'
import { logo, avatar } from '../utils/constants';
import { setGpt } from '../utils/gptSlice';

const Header = () => {
    const navigate = useNavigate()
    const user = useSelector(store => store.user)
    const dispatch = useDispatch()
    const [GptSearch, setGptSearch] = useState(false)

    const ToggleGpt = () => {
        setGptSearch(!GptSearch)
    }

    // console.log(GptSearch);
    dispatch(setGpt(GptSearch))

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
                navigate("/browse")
            } else {
                dispatch(removeUser())
                navigate("/")
            }
        });

        return () => unsubscribe()
    }, [])

    const handleSignOut = () => {

        signOut(auth).then(() => {
            // Sign-out successful.
            // navigate("/")
        }).catch((error) => {
            navigate("/error")
        });
    }

    return (
        <div className=" absolute w-full px-4 py-2 bg-gradient-to-b from-black z-30 flex justify-between">

            <img className='w-44'
                src={logo}
                alt='logo'
            ></img>

            {user && (<div className='flex p-2 gap-8 items-center'>

                <button
                    className='py-3 px-4 mx-4 my-2 bg-purple-700 text-white rounded-lg'
                    onClick={ToggleGpt}
                > {GptSearch? "HomePage" : "GPT Search"}
                </button>

                <img
                    className='w-12 h-12'
                    src={avatar}
                    alt='logo2'
                ></img>

                <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
            </div>)}
        </div>
    )
}

export default Header