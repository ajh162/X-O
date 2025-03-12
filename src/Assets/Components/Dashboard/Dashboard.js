import React from 'react'; 
import './Dashboard.css'
import Cliente from './Kpi/Clientes/Clientes';
import Finanzas from './Kpi/Finanzas/Finanzas.js';
import Recursoshumanos from './Kpi/Recursoshumanos/Recursoshumanos.js';
import Usuarios from './Kpi/Usuarios/Usuarios';
export default function Dashboard() {
    return (
        <>
        <h3>Dashboard</h3>
        <div className="container">
            <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
            <Cliente/>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
            <Finanzas/>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
            <Recursoshumanos/>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
            <Usuarios/>
            </div>
            </div>
        </div>
        </>
    )
}