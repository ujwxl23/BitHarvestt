"use client"
import Form from "@/app/componets/form";
export default function modelForm({params}){
    const modelname = params.modelform
    const decodedModelName = decodeURIComponent(modelname);
    return (
        <div>
            <h1>Share your data for {decodedModelName}</h1>
            <Form/>
        </div>
    )
}