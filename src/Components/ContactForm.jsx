import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addContact } from '../Redux/action';
function ContactForm() {


    const dispatch = useDispatch()

    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        status: ""
    })

    const handleChange = (e) => {


        setForm({
            ...form,
            [e.target.name]: e.target.value
        })


    }




    function handleSave() {



        dispatch(addContact(form))

    }

    return (
        <div className="border border-yellow-300 bg-green-500 w-1/2 mx-auto my-4 pt-16 rounded-md">
            <h2 className="bg-yellow-300 text-2xl font-bold mb-4 rounded-md">Create Contact</h2>
            <div className="mb-4">
                <label className=" bg-yellow-300 flex block font-bold mb-2 border-yellow-300 " >
                    First Name
                </label>
                <input
                    className="w-full border border-yellow-300 p-2 rounded-md"
                    id="first-name"
                    type="text"
                    name="first_name"
                    value={form.first_name}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="bg-yellow-300 flex block font-bold mb-2" >
                    Last Name
                </label>
                <input
                    className="w-full border border-yellow-300 p-2 rounded-md"
                    id="last-name"
                    type="text"
                    name="last_name"
                    value={form.last_name}
                    onChange={handleChange}
                />
            </div>
           
            <div className="mb-4">
                <label className="bg-yellow-300 flex block font-bold mb-2 " >
                    Status
                </label>
                <input type="radio" id="status" value="active"name="status" onChange={handleChange}/> Active
                <input type="radio" id="status" value="inactive" name="status"  onChange={handleChange}/> Inactive
            </div>
            <button
                className="bg-yellow-300 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
                onClick={handleSave}
            >
                Save Contact
            </button>
        </div>
    );
}


export default ContactForm