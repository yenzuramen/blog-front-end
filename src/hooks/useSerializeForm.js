import { useState } from "react"



export const useSerializeForm = (initialObj = {}) => {
    const [form, setForm] = useState(initialObj)

    const serializeForm = (form) => {
        console.log(form);

        const formData = new FormData(form)

        console.log(formData);

        const fullFormData = {}
        for (let [name, value] of formData) {
            fullFormData[name] = value;

        }

        // formData.map(element=>{
        //     console.log(element.name,element.value);
        // })

        console.log(fullFormData);
        return fullFormData;
    }

    const sendForm = (e) => {

        e.preventDefault();
        let target = e.target;
        let courseInfo = serializeForm(target)
        // {
        //     title: target.title.value,
        //     year: target.year.value,
        //     desc: target.desc.value,
        //     author: target.author.value,
        //     email: target.email.value
        // }

        console.log(courseInfo);

        setForm(courseInfo)
    }


    const changeObj = ({ target }) => {
        let { name, value } = target;

        setForm({
            ...form,
            [name]: value
        })
    }

    return {
        form,
        sendForm,
        changeObj
    }
}