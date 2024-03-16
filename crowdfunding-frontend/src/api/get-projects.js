async function getProjects() {
    // First we create the URL for the request by using the Vite environment variable and the API endpoint
    const url = `${import.meta.env.VITE_API_URL}/projects`;

    // Next we use the Fetch function and pass in the URL and the method - the method is GET because we're fetching data - Fetch returns a 'promise'
    // If the promise 'resolves' - i.e. the backend responds - we'll get the data needed in the 'response' variable - if the backend fails to respond then we'll get an error
    const response = await fetch(url, {
        method: "GET",
    });

    // We can use the 'ok' property of the 'response' to check if the request was successful
    // If the request was not successful then we throw an error
    if (!response.ok) {
        const fallbackError = "Error fetching projects";


    // Here we use the 'await' keyword to signal JavaScript it shouldn't run this code unitl 'response' gets turned into JSON
        const data = await response.json().catch(() => {
        // If the response is not JSON then we'll throw a generic error - 'catch' will trigger if we try to turn 'response' into JSON and fail
            throw new Error(fallbackError);
        });

    // If the error response is JSON then we'll include the info from the JSON in the error we throw
    // Usually the server will send the error message in the 'detail' property
    // You may have not configured the back end to use the 'detail' property - if that's the case then you can change the code below to use a different property e.g. 'message'
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }

    // On the other hand if the request was successful then we'll return the data from the response
    // Turning the response to JSON takes time so we need to use the 'await' keyword again
    return await response.json();
}

export default getProjects;