const apiURL = process.env.NEXT_PUBLIC_API_URL

export const RegisterNewUser = async (userData) => {
    try {
        const res = await fetch(`${apiURL}/users/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData), 
        })
        if(res.ok){
            return res.json()
            
        }
        else {
            const errorData = await res.json();
            throw new Error (errorData.message || "User cration error");
        }
    } catch (error) {
         new Error(error.message || error);        
    }
}

export const LoginUser = async (userData) => {
    try {
        const res = await fetch(`${apiURL}/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData), 
            
        })
        if(res.ok){
            return res.json()
        }else {
            const errorData = await res.json();
            throw new Error(errorData.message || "Error logging in");
        }
    } catch (error) {
        throw new Error(error.message || error);
    }
}