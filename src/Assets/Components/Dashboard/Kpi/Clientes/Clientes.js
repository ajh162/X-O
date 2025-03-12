import React, { useEffect, useRef } from 'react'; 
import { Card } from 'primereact/card';
import Chart from 'chart.js/auto';
import './Clientes.css';

export default function Clientes() {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);
    
    useEffect(() => {
        if (chartRef.current) {
            // Configuración del gráfico
            const ctx = chartRef.current.getContext('2d');
            chartInstance.current = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: ['Clientes activos', 'Campaña de Marketing', 'Clientes potenciales', 
                             'Clientes inactivos', 'Clientes perdidos', 'Clientes ganados'],
                    datasets: [{
                        data: [100, 10, 20, 5, 3, 10],
                        backgroundColor: ['#D6F6DD', '#DAC4F7', '#F4989C', '#F0B5A8', '#EBD2B4', '#ACECF7'],
                        borderColor: 'white',
                        borderWidth: 2,
                        hoverOffset: 10
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    const value = context.raw;
                                    const percentage = ((value / 150) * 100).toFixed(1);
                                    return `${context.label}: ${value} (${percentage}%)`;
                                }
                            }
                        }
                    }
                }
            });
        }
        
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);
    
    return (
        
        <div className="clientes-dashboard">
        <h4 className="total-clientes">Total de Clientes: 150</h4>
            <Card>
                <div className="client-content">
                    <div className="client-total">
                        <div className="client-total-number">150</div>
                    </div>
                    <div className="client-chart">
                        <canvas ref={chartRef}></canvas>
                    </div>
                    <p className="m-0 client-data-list">
                        Clientes activos = 100
                        Campaña de Marketing = 10
                        Clientes potenciales = 20
                        Clientes inactivos = 5
                        Clientes perdidos = 3
                        Clientes ganados = 10
                        Clientes totales = 150
                    </p>
                </div>
            </Card>
        </div>
    );
}