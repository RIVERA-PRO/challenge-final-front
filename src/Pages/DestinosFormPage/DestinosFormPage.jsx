import React, { useState } from 'react';
import FormDestinos from '../../Components/FormDestinos/FormDestinos';
import Heroadmin from '../../Components/Hero-admin/Hero-admin';
import AdminDestinos from '../../Components/AdminDestinos/AdminDestinos';
import FormSeller from '../../Components/FormSeller/FormSeller';
import './DestinosFormPage.css';
import { faEdit, faCheck, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function DestinosFormPage() {
    const [showForm, setShowForm] = useState(true);
    const [showSellerForm, setShowSellerForm] = useState(false);

    const handleShowForm = () => {
        setShowForm(true);
        setShowSellerForm(false);
    };

    const handleShowAdmin = () => {
        setShowForm(false);
        setShowSellerForm(false);
    };

    const handleShowSellerForm = () => {
        setShowForm(false);
        setShowSellerForm(true);
    };

    return (
        <div className="page-container">
            <div className="menu-container">
                <div className="btnss">
                    <button className="menu-button" onClick={handleShowForm}>
                        <FontAwesomeIcon className='icon' icon={faEdit} /> Edit Destinations
                    </button>
                    <button className="menu-button" onClick={handleShowAdmin}>
                        <FontAwesomeIcon className='icon' icon={faCheck} /> Create Destinations
                    </button>
                    <button className="menu-button" onClick={handleShowSellerForm}>
                        <FontAwesomeIcon className='icon' icon={faUser} /> Create sellers
                    </button>
                </div>
            </div>
            <div className="content-container">
                {showForm ? (
                    <AdminDestinos />
                ) : showSellerForm ? (
                    <FormSeller />
                ) : (
                    <FormDestinos />
                )}
            </div>
        </div>
    );
}
