import React from 'react'
import FormDestinos from '../../Components/FormDestinos/FormDestinos'
import Heroadmin from '../../Components/Hero-admin/Hero-admin'
import AdminDestinos from '../../Components/AdminDestinos/AdminDestinos'
export default function DestinosFormPage() {
    return (
        <div>
            <Heroadmin />
            <FormDestinos />
            <AdminDestinos />
        </div>
    )
}
