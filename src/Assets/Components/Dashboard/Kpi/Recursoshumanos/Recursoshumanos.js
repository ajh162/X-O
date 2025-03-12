"use client"

import { useEffect, useRef } from "react"
import { Card } from "primereact/card"
import { Chart } from "chart.js/auto"
import "./Recursoshumanos.css"

export default function RecursosHumanos() {
  // References for the chart canvases
  const departmentChartRef = useRef(null)
  const turnoverChartRef = useRef(null)

  // Department distribution data
  const departmentData = [
    { department: "Ventas", count: 24 },
    { department: "Marketing", count: 18 },
    { department: "Desarrollo", count: 32 },
    { department: "Finanzas", count: 12 },
    { department: "RRHH", count: 8 },
    { department: "Operaciones", count: 16 },
  ]

  // Employee turnover data
  const turnoverData = [
    { month: "Ene", hired: 5, left: 2 },
    { month: "Feb", hired: 7, left: 3 },
    { month: "Mar", hired: 4, left: 4 },
    { month: "Abr", hired: 6, left: 2 },
    { month: "May", hired: 8, left: 3 },
    { month: "Jun", hired: 5, left: 5 },
  ]

  // Calculate HR metrics
  const totalEmployees = departmentData.reduce((sum, item) => sum + item.count, 0)
  const totalHired = turnoverData.reduce((sum, item) => sum + item.hired, 0)
  const totalLeft = turnoverData.reduce((sum, item) => sum + item.left, 0)
  const turnoverRate = ((totalLeft / totalEmployees) * 100).toFixed(1)
  const netGrowth = totalHired - totalLeft

  // Initialize department chart
  useEffect(() => {
    if (departmentChartRef.current) {
      const departmentChart = new Chart(departmentChartRef.current, {
        type: "bar",
        data: {
          labels: departmentData.map((item) => item.department),
          datasets: [
            {
              label: "Empleados",
              data: departmentData.map((item) => item.count),
              backgroundColor: [
                "#68DE82",
                "#9A5DE9",
                "#E8685E",
                "#E47A62",
                "#D8A96E",
                "#20CBE9",
              ],
              borderRadius: 6,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: false,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: "rgba(255, 255, 255, 0.1)",
              },
              ticks: {
                color: "rgba(255, 255, 255, 0.7)",
                font: {
                  size: 10,
                },
              },
            },
            x: {
              grid: {
                display: false,
              },
              ticks: {
                color: "rgba(255, 255, 255, 0.7)",
                font: {
                  size: 10,
                },
              },
            },
          },
        },
      })

      return () => {
        departmentChart.destroy()
      }
    }
  }, [])

  // Initialize turnover chart
  useEffect(() => {
    if (turnoverChartRef.current) {
      const turnoverChart = new Chart(turnoverChartRef.current, {
        type: "line",
        data: {
          labels: turnoverData.map((item) => item.month),
          datasets: [
            {
              label: "Contrataciones",
              data: turnoverData.map((item) => item.hired),
              borderColor: "#34d399",
              backgroundColor: "rgba(52, 211, 153, 0.1)",
              tension: 0.4,
              fill: false,
            },
            {
              label: "Salidas",
              data: turnoverData.map((item) => item.left),
              borderColor: "#f87171",
              backgroundColor: "rgba(248, 113, 113, 0.1)",
              tension: 0.4,
              fill: false,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "top",
              labels: {
                color: "rgba(255, 255, 255, 0.7)",
                font: {
                  size: 10,
                },
                boxWidth: 10,
                padding: 5,
              },
            },
            title: {
              display: false,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: "rgba(255, 255, 255, 0.1)",
              },
              ticks: {
                color: "rgba(255, 255, 255, 0.7)",
                font: {
                  size: 10,
                },
              },
            },
            x: {
              grid: {
                display: false,
              },
              ticks: {
                color: "rgba(255, 255, 255, 0.7)",
                font: {
                  size: 10,
                },
              },
            },
          },
        },
      })

      return () => {
        turnoverChart.destroy()
      }
    }
  }, [])

  return (
    <div className="rrhh-container">
      <div className="rrhh-title">
        <h1>Recursos Humanos</h1>
        <div className="date-selector">
          <span>Último Semestre</span>
        </div>
      </div>

      <div className="metrics-container">
        <Card title="Total Empleados" className="metric-card">
          <div className="metric-content">
            <div className="metric-icon employees-icon">👥</div>
            <div className="metric-data">
              <p className="metric-value">{totalEmployees}</p>
              <p className="metric-change positive">+{netGrowth} vs periodo anterior</p>
            </div>
          </div>
        </Card>

        <Card title="Tasa de Rotación" className="metric-card">
          <div className="metric-content">
            <div className="metric-icon turnover-icon">↔️</div>
            <div className="metric-data">
              <p className="metric-value">{turnoverRate}%</p>
              <p className="metric-change negative">+1.2% vs periodo anterior</p>
            </div>
          </div>
        </Card>

        <Card title="Nuevas Contrataciones" className="metric-card">
          <div className="metric-content">
            <div className="metric-icon hiring-icon">➕</div>
            <div className="metric-data">
              <p className="metric-value">{totalHired}</p>
              <p className="metric-change positive">+3 vs periodo anterior</p>
            </div>
          </div>
        </Card>

        <Card title="Satisfacción" className="metric-card">
          <div className="metric-content">
            <div className="metric-icon satisfaction-icon">😊</div>
            <div className="metric-data">
              <p className="metric-value">85%</p>
              <p className="metric-change positive">+2.5% vs periodo anterior</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="charts-container">
        <Card title="Distribución por Departamento" className="chart-card">
          <div className="chart-container">
            <canvas ref={departmentChartRef}></canvas>
          </div>
        </Card>

        <Card title="Contrataciones vs Salidas" className="chart-card">
          <div className="chart-container">
            <canvas ref={turnoverChartRef}></canvas>
          </div>
        </Card>
      </div>

      <div className="hr-additional">
        <Card title="Próximas Entrevistas" className="additional-card">
          <ul className="interview-list">
            <li>
              <div className="interview-info">
                <span className="interview-name">Carlos Rodríguez</span>
                <span className="interview-position">Desarrollador Frontend</span>
              </div>
              <span className="interview-date">15 Ago</span>
            </li>
            <li>
              <div className="interview-info">
                <span className="interview-name">María González</span>
                <span className="interview-position">Diseñadora UX/UI</span>
              </div>
              <span className="interview-date">16 Ago</span>
            </li>
            <li>
              <div className="interview-info">
                <span className="interview-name">Juan Pérez</span>
                <span className="interview-position">Analista de Datos</span>
              </div>
              <span className="interview-date">17 Ago</span>
            </li>
          </ul>
        </Card>

        <Card title="Solicitudes Pendientes" className="additional-card">
          <div className="requests-container">
            <div className="request-item">
              <div className="request-info">
                <span className="request-type">Vacaciones</span>
                <span className="request-employee">Ana Martínez</span>
              </div>
              <div className="request-actions">
                <button className="approve-btn">✓</button>
                <button className="reject-btn">✗</button>
              </div>
            </div>
            <div className="request-item">
              <div className="request-info">
                <span className="request-type">Permiso</span>
                <span className="request-employee">Roberto Sánchez</span>
              </div>
              <div className="request-actions">
                <button className="approve-btn">✓</button>
                <button className="reject-btn">✗</button>
              </div>
            </div>
            <div className="request-item">
              <div className="request-info">
                <span className="request-type">Capacitación</span>
                <span className="request-employee">Laura Díaz</span>
              </div>
              <div className="request-actions">
                <button className="approve-btn">✓</button>
                <button className="reject-btn">✗</button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

