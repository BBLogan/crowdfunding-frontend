import { useState, useEffect } from 'react';
import getProjects from '../api/get-projects';

export default function useProjects() {
    // Here we use the 'useState' hook to create a 'projects' state variable and a 'setProjects' function to update the state - we initialise the state variable with an empty array
    const [projects, setProjects] = useState([]);

    // We also create a state variable called isLoading and error to keep track of the loading state and any errors that occur
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // We use the useEffect hook to fetch the projects from the API and update the state variables accordingly
    // This useEffect will only run once, when the component this hook is used in is mounted
    useEffect(() => {
        getProjects()
            .then((data) => {
                setProjects(data);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
    }, []);

    // Finally we return the state variables and the error. As the state in this hook changes it will update these values and the component using this hook will re-render
    return { projects, isLoading, error };
}