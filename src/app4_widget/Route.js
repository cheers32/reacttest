import {useEffect, useState} from "react";

const Route = ( props) => {
    const path = props.path
    const children = props.children
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(() => {
        const onLocationChange = () => {
            // console.log('Location change')
            setCurrentPath(window.location.pathname)
        }
        window.addEventListener('popstate', onLocationChange)

        return () => {
            window.removeEventListener('popstate', onLocationChange)
        }
    }, [])

    //return window.location.pathname === path ? children : null
    return currentPath === path ? children : null
}

export default Route