const fetcher = async (url: string) => { 
    const response = await fetch("url", { 
        method: "GET", 
    }); 

    return response; 
}; 

export default fetcher; 