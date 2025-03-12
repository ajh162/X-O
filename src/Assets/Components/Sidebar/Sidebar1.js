import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';
import { StyleClass } from 'primereact/styleclass';
import { useAuth0 } from '@auth0/auth0-react';
import 'primeicons/primeicons.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './Sidebar.css'

export default function Sidebar1() {
    const [visible, setVisible] = useState(false);
    const btnRef1 = useRef(null);
    const btnRef2 = useRef(null);
    const btnRef3 = useRef(null);
    const btnRef4 = useRef(null);
    const { user } = useAuth0();

    return (
        <div>
            <Sidebar className="sidebar-glass" visible={visible} onHide={() => setVisible(false)}>
                <div className='flex flex-wrap align-items-center justify-content-between flex-shrink-0'>
                    <img src="https://ajh162.github.io/XO/img/XO.png" className="logo" alt='' />
                </div>
                <div className="overflow-y-auto">
                    <ul className="list-none p-3 m-0">
                        <li>
                            <StyleClass nodeRef={btnRef1} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                <div ref={btnRef1} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                    <span className="text-left w-full">Gestión de Usuarios</span>
                                    <i className="pi pi-chevron-down"></i>
                                    <Ripple />
                                </div>
                            </StyleClass>
                            <ul className="list-none p-0 m-0 overflow-hidden">
                                <li>
                                    <Link to='/Dashboard' className="p-ripple flex align-items-left cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-home mr-2"></i>
                                        <span className="text-left w-full">Dashboard</span>
                                        <Ripple />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/Usuarios' className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="bi bi-people"></i>
                                        <span className="text-left w-full">Usuarios</span>
                                        <Ripple />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/Clientes' className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="bi bi-person-vcard"></i>
                                        <span className="text-left w-full">Clientes</span>
                                        <Ripple />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/Finanzas' className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="bi bi-bar-chart"></i>
                                        <span className="text-left w-full">Finanzas</span>
                                        <Ripple />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/Recursos Humanos' className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="bi bi-person-workspace"></i>
                                        <span className="text-left w-full">Recursos Humanos</span>
                                        <Ripple />
                                    </Link>
                                </li>
                                <li>
                                    <StyleClass nodeRef={btnRef2} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                        <div ref={btnRef2} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-chart-line mr-2"></i>
                                            <span className="text-left w-full">Reports</span>
                                            <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                            <Ripple />
                                        </div>
                                    </StyleClass>
                                    <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                        <li>
                                            <StyleClass nodeRef={btnRef3} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                <div ref={btnRef3} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                    <i className="pi pi-chart-line mr-2"></i>
                                                    <span className="text-left w-full">Revenue</span>
                                                    <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                                    <Ripple />
                                                </div>
                                            </StyleClass>
                                            <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                <li>
                                                    <Link to='#' className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-table mr-2"></i>
                                                        <span className="text-left w-full">View</span>
                                                        <Ripple />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <div className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-search mr-2"></i>
                                                        <span className="text-left w-full">Search</span>
                                                        <Ripple />
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-chart-line mr-2"></i>
                                                <span className="text-left w-full">Expenses</span>
                                                <Ripple />
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-users mr-2"></i>
                                        <span className="text-left w-full">Team</span>
                                        <Ripple />
                                    </div>
                                </li>
                                <li>
                                    <div className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-comments mr-2"></i>
                                        <span className="text-left w-full">Messages</span>
                                        <span className="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>
                                            3
                                        </span>
                                        <Ripple />
                                    </div>
                                </li>
                                <li>
                                    <div className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-calendar mr-2"></i>
                                        <span className="text-left w-full">Calendar</span>
                                        <Ripple />
                                    </div>
                                </li>
                                <li>
                                    <div className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-cog mr-2"></i>
                                        <span className="text-left w-full">Settings</span>
                                        <Ripple />
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="list-none p-3 m-0">
                        <li>
                            <StyleClass nodeRef={btnRef4} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                <div ref={btnRef4} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                    <span className="text-left w-full">APPLICATION</span>
                                    <i className="pi pi-chevron-down"></i>
                                    <Ripple />
                                </div>
                            </StyleClass>
                            <ul className="list-none p-0 m-0 overflow-hidden">
                                <li>
                                    <div className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-folder mr-2"></i>
                                        <span className="text-left w-full">Projects</span>
                                        <Ripple />
                                    </div>
                                </li>
                                <li>
                                    <div className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-chart-bar mr-2"></i>
                                        <span className="text-left w-full">Performance</span>
                                        <Ripple />
                                    </div>
                                </li>
                                <li>
                                    <div className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-cog mr-2"></i>
                                        <span className="text-left w-full">Settings</span>
                                        <Ripple />
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div>
                    <img src={user.picture} alt={user.name} />
                    <span className='nombre_usuario'>
                        {user.name}
                    </span>
                </div>
            </Sidebar>
            <Button icon="pi pi-align-justify" onClick={() => setVisible(true)} className="sidebar-lat-button" />
        </div>
    )
}