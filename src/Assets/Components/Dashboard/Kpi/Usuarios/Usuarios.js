"use client"

import { useEffect, useRef } from "react"
import { Card } from "primereact/card"
import { Chart } from "chart.js/auto"
import "./Usuarios.css"

export default function Usuarios() {
  // References for the chart canvases
  const growthChartRef = useRef(null)
  const typesChartRef = useRef(null)
  const platformChartRef = useRef(null)

  // User growth data
  const growthData = [
    { month: "Ene", users: 1250 },
    { month: "Feb", users: 1380 },
    { month: "Mar", users: 1490 },
    { month: "Abr", users: 1620 },
    { month: "May", users: 1840 },
    { month: "Jun", users: 2100 },
  ]

  // User types data
  const typesData = [
    { type: "Básico", count: 1200 },
    { type: "Premium", count: 450 },
    { type: "Empresarial", count: 350 },
    { type: "Prueba", count: 100 },
  ]

  // Platform usage data
  const platformData = [
    { platform: "Móvil", count: 1250 },
    { platform: "Desktop", count: 850 },
    { platform: "Tablet", count: 350 },
    { platform: "Otros", count: 50 },
  ]

  // Calculate user metrics
  const totalUsers = typesData.reduce((sum, item) => sum + item.count, 0)
  const activeUsers = Math.round(totalUsers * 0.78) // 78% active users
  const newUsers = growthData[growthData.length - 1].users - growthData[growthData.length - 2].users
  const retentionRate = 92.5 // 92.5% retention rate

  // Initialize growth chart
  useEffect(() => {
    if (growthChartRef.current) {
      const growthChart = new Chart(growthChartRef.current, {
        type: "line",
        data: {
          labels: growthData.map((item) => item.month),
          datasets: [
            {
              label: "Usuarios",
              data: growthData.map((item) => item.users),
              borderColor: "#AA4465",
              backgroundColor: "rgba(96, 165, 250, 0.1)",
              tension: 0.4,
              fill: true,
              pointBackgroundColor: "#AA4465",
              pointRadius: 3,
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
        growthChart.destroy()
      }
    }
  }, [])

  // Initialize types chart
  useEffect(() => {
    if (typesChartRef.current) {
      const typesChart = new Chart(typesChartRef.current, {
        type: "doughnut",
        data: {
          labels: typesData.map((item) => item.type),
          datasets: [
            {
              data: typesData.map((item) => item.count),
              backgroundColor: [
                "#AA4465",
                "#EDF0DA",
                "#A89B8C",
                "#F0DFAD",
              ],
              borderWidth: 1,
              borderColor: "rgba(255, 255, 255, 0.5)",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "right",
              labels: {
                color: "rgba(255, 255, 255, 0.7)",
                font: {
                  size: 10,
                },
                boxWidth: 10,
                padding: 5,
              },
            },
          },
        },
      })

      return () => {
        typesChart.destroy()
      }
    }
  }, [])

  // Initialize platform chart
  useEffect(() => {
    if (platformChartRef.current) {
      const platformChart = new Chart(platformChartRef.current, {
        type: "bar",
        data: {
          labels: platformData.map((item) => item.platform),
          datasets: [
            {
              label: "Usuarios",
              data: platformData.map((item) => item.count),
              backgroundColor: [
                "#B0D373",
                "#FFFCF7",
                "#A1B5D8",
                "#738290",
              ],
              borderRadius: 6,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          indexAxis: "y",
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
            x: {
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
          },
        },
      })

      return () => {
        platformChart.destroy()
      }
    }
  }, [])

  return (
    <div className="usuarios-container">
      <div className="usuarios-title">
        <h1>Usuarios</h1>
        <div className="date-selector">
          <span>Último Semestre</span>
        </div>
      </div>

      <div className="metrics-container">
        <Card title="Total Usuarios" className="metric-card">
          <div className="metric-content">
            <div className="metric-icon users-icon">👥</div>
            <div className="metric-data">
              <p className="metric-value">{totalUsers.toLocaleString()}</p>
              <p className="metric-change positive">+{newUsers} nuevos este mes</p>
            </div>
          </div>
        </Card>

        <Card title="Usuarios Activos" className="metric-card">
          <div className="metric-content">
            <div className="metric-icon active-icon">✓</div>
            <div className="metric-data">
              <p className="metric-value">{activeUsers.toLocaleString()}</p>
              <p className="metric-change positive">78% del total</p>
            </div>
          </div>
        </Card>

        <Card title="Nuevos Usuarios" className="metric-card">
          <div className="metric-content">
            <div className="metric-icon new-icon">+</div>
            <div className="metric-data">
              <p className="metric-value">{newUsers}</p>
              <p className="metric-change positive">+14.1% vs mes anterior</p>
            </div>
          </div>
        </Card>

        <Card title="Retención" className="metric-card">
          <div className="metric-content">
            <div className="metric-icon retention-icon">↻</div>
            <div className="metric-data">
              <p className="metric-value">{retentionRate}%</p>
              <p className="metric-change positive">+2.3% vs mes anterior</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="charts-container">
        <Card title="Crecimiento de Usuarios" className="chart-card">
          <div className="chart-container">
            <canvas ref={growthChartRef}></canvas>
          </div>
        </Card>

        <Card title="Tipos de Usuarios" className="chart-card">
          <div className="chart-container">
            <canvas ref={typesChartRef}></canvas>
          </div>
        </Card>
      </div>

      <div className="platform-section">
        <Card title="Uso por Plataforma" className="platform-card">
          <div className="chart-container platform-chart">
            <canvas ref={platformChartRef}></canvas>
          </div>
        </Card>
      </div>
    </div>
  )
}

