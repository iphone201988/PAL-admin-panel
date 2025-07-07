// import toast from "react-hot-toast";

export const getAnalyticsInsights = async ()=> {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(
            `${import.meta.env.VITE_SERVER_URL}/admin/getAnalysticsInsights`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            }
        );
        const data = await response.json();
        return data;
    } catch (error) {
        toast.error(error.message || "Something went wrong");
        console.error('Error While Fetching Insights',error);
    }
}


export const getUserList = async () => {
     try {
         const token = localStorage.getItem("token");
        const response = await fetch(
            `${import.meta.env.VITE_SERVER_URL}/admin/getAllUsers`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            }
        );

        const data = await response.json();
        return data;
    } catch (error) {
        toast.error(error.message || "Something went wrong");
        console.error('Error While Fetching Insights',error);
    }
}

export const deleteUser = async (id) => {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(
            `${import.meta.env.VITE_SERVER_URL}/admin/deleteUser/${id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            }
        );
        const data = await response.json();
        return data;
    } catch (error) {
        toast.error(error.message || "Something went wrong");
        console.error('Error While Fetching Insights',error);
    }
}

export const activateOrDeactivate =async (id)=>{
    
try {
        const token = localStorage.getItem("token");
        const response = await fetch(
            `${import.meta.env.VITE_SERVER_URL}/admin/activateOrDeactivateUser/${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            }
        );
        const data = await response.json();
        return data;
    } catch (error) {
        toast.error(error.message || "Something went wrong");
        console.error('Error While Fetching Insights',error);
    }

}

export const allAiContactsList = async ()=>{
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(
            `${import.meta.env.VITE_SERVER_URL}/admin/getAllAiContacts`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            }
        );
        const data = await response.json();
        return data;
    } catch (error) {
        toast.error(error.message || "Something went wrong");
        console.error('Error While Fetching Insights',error);
    }
}


export const updateAiContact = async (id,aiContact) =>{
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(
            `${import.meta.env.VITE_SERVER_URL}/admin/updateAiContact/${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(aiContact)
            }
        );
        const data = await response.json();
        return data;
    } catch (error) {
        toast.error(error.message || "Something went wrong");
        console.error('Error While Fetching Insights',error);
    }
}


export const deleteAiContact = async (id) => {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(
            `${import.meta.env.VITE_SERVER_URL}/admin/deleteAiContact/${id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            }
        );
        const data = await response.json();
        return data;
    } catch (error) {
        toast.error(error.message || "Something went wrong");
        console.error('Error While Fetching Insights',error);
    }
}

export const getContacts = async () => {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(
            `${import.meta.env.VITE_SERVER_URL}/admin/getContacts`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            }
        );
        const data = await response.json();
        return data;
    } catch (error) {
        toast.error(error.message || "Something went wrong");
        console.error('Error While Fetching Insights',error);
    }
}