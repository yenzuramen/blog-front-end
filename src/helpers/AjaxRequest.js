// import { useState, useEffect } from "react";

export const AjaxRequest = async (url, method, dataToSave = "", files = false) => {

    // let data = []
    let loading = true


    //Se meten las opciones de la peticion de acuerdo al metodo
    let attributes = {
        method: method
    }

    let body = '', headers = '';

    if (files) {
        body = dataToSave
        headers = {

        }
    } else {
        body = JSON.stringify(dataToSave);
        headers = {
            "Content-Type": "application/json"
        }
    }

    if (method !== 'GET' && method !== 'DELETE') {
        attributes.body = body
        attributes.headers = headers
    }

    const request = await fetch(url, attributes)
    let data = await request.json();
    loading = false


    return {
        data,
        loading
    }


}