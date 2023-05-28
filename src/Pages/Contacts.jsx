
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { removeContact } from "../Redux/action"

const Contacts = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [singleContact, setSingleContact] = useState({})
    let data = undefined
    const AllContacts = useSelector((store) => store.contacts)
    const dispatch = useDispatch()

    const togglePopup = (contact) => {

        setSingleContact(contact)

        setIsOpen(!isOpen)


    }
    useEffect(() => {

    }, [dispatch, AllContacts.length])
    return (
        <div className="justify-center pt-16 text-gray-50   p-4  w-full ">
            <div className="m-4">
                <button className="rounded-full bg-green-500 p-2 text-2xl">
                    <Link to="/contact_form">
                        Create Contact
                    </Link>
                </button>

            </div>
            {AllContacts.length == 0 && <div className=" m-auto w-fit p-4 align-middle text-blue-500 justify-center">

                
                <h1 className="text-3xl">No contacts found please add contact from create contact </h1>
                <img src="https://media.istockphoto.com/id/1179344820/photo/thank-you-concept.jpg?s=612x612&w=0&k=20&c=xs8vMFt1qzLeoQkZ3K2a6WCEfC5Yl0-M3EmX9BciNNk="/>
            </div>}
            <div id="contact_list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                {
                    AllContacts.map((el) => {
                        return <div key={el.id} className="bg-yellow-300 rounded-lg shadow-md m-4 p-4 text-white">
                            <div onClick={() => togglePopup(el)} className="w-3/4 m-auto  ">
                                
                                   <div className="text-left">
                                    <p>First Name : {el.first_name}</p>
                                    <p>Last Name  : {el.last_name}</p>
                                    <p>Status     : {el.status == "active" ? "Active" : "Inactive"}</p>
                                </div>

                            </div>

                            <div className="flex justify-between my-2">
                                <Link to={`edit/${el.id}`}>
                                    <button className="rounded p-2 bg-green-500 text-black">

                                        Edit
                                    </button>
                                </Link>

                                <button onClick={() => dispatch(removeContact(el.id))} className="rounded p-2 bg-red-600 text-white">Delete</button>
                            </div>
                        </div>
                    })
                }


            </div>

        </div>
    )
}

export default Contacts