import axios from "axios";
import toast from "react-hot-toast";




const signUpUser = async (name, lastname, username, email, password, gender, dob, address, contact) => {
    try {
        const response = await axios.post('http://localhost:5000/signup', { name, lastname, username, email, password, gender, dob, address, contact }, { withCredentials: true });
        const data = await response.data;
        return data
    }

    catch (error) {
        console.log('Error signingup in api: ' + error);
    }
}



const signInUser = async (email, password) => {

    try {
        const response = await axios.post('http://localhost:5000/signin', { email, password }, { withCredentials: true });
        const data = await response.data;
        toast.success("Signed In Successfully", { id: "login" });
        return data        
    }

    catch (error) {
        console.log('Error logging in api: ' + error.response.status);

        if(error.response.status === 401){
            toast.error("User is not registered, Please Signup !");
        }

        if(error.response.status === 403){
            toast.error("Password Incorrect !");
        }
    }
}




const checkAuthStatus = async () => {

    try {
        const response = await axios.get('http://localhost:5000/auth', { withCredentials: true });
        const data = await response.data;
        return data;
    }

    catch (error) {
        console.log('Error auth api: ' + error);
    }
}




const logoutUser = async () => {
    try {
        const res = await axios.get("http://localhost:5000/logout", { withCredentials: true });
        const data = await res.data;
        return data;
    }

    catch (error) {
        console.log('Error logout api: ' + error);
    }
};



export { signUpUser, signInUser, checkAuthStatus, logoutUser };