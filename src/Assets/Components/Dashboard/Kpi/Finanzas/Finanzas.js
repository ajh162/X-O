"use client"

import { useEffect, useRef } from "react"
import { Card } from "primereact/card"
import { Chart } from "chart.js/auto"
import "./Finanzas.css"

export default function Finanzas() {
  // References for the chart canvases
  const revenueChartRef = useRef(null)
  const cashFlowChartRef = useRef(null)

  // Revenue data for the past months
  const revenueData = [
    { month: "Ene", revenue: 15000, expenses: 10000 },
    { month: "Feb", revenue: 18000, expenses: 12000 },
    { month: "Mar", revenue: 16500, expenses: 9800 },
    { month: "Abr", revenue: 21000, expenses: 13200 },
    { month: "May", revenue: 24000, expenses: 14500 },
    { month: "Jun", revenue: 22500, expenses: 13800 },
  ]

  // Cash flow data
  const cashFlowData = [
    { month: "Ene", inflow: 25000, outflow: 20000 },
    { month: "Feb", inflow: 28000, outflow: 22000 },
    { month: "Mar", inflow: 26500, outflow: 19800 },
    { month: "Abr", inflow: 31000, outflow: 23200 },
    { month: "May", inflow: 34000, outflow: 24500 },
    { month: "Jun", inflow: 32500, outflow: 23800 },
  ]

  // Calculate total revenue and profit
  const totalRevenue = revenueData.reduce((sum, item) => sum + item.revenue, 0)
  const totalExpenses = revenueData.reduce((sum, item) => sum + item.expenses, 0)
  const totalProfit = totalRevenue - totalExpenses
  const profitMargin = ((totalProfit / totalRevenue) * 100).toFixed(1)

  // Initialize charts after component mounts
  useEffect(() => {
    // Revenue vs Expenses Chart
    if (revenueChartRef.current) {
      const revenueChart = new Chart(revenueChartRef.current, {
        type: "bar",
        data: {
          labels: revenueData.map((item) => item.month),
          datasets: [
            {
              label: "Ingresos",
              data: revenueData.map((item) => item.revenue),
              backgroundColor: "#34d399",
              borderRadius: 4,
            },
            {
              label: "Gastos",
              data: revenueData.map((item) => item.expenses),
              backgroundColor: "#f87171",
              borderRadius: 4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: false,
            },
          },
        },
      })

      // Cleanup function
      return () => {
        revenueChart.destroy()
      }
    }
  }, [])

  // Initialize cash flow chart
  useEffect(() => {
    if (cashFlowChartRef.current) {
      const cashFlowChart = new Chart(cashFlowChartRef.current, {
        type: "line",
        data: {
          labels: cashFlowData.map((item) => item.month),
          datasets: [
            {
              label: "Entrada",
              data: cashFlowData.map((item) => item.inflow),
              borderColor: "#F7AEF8",
              backgroundColor: "rgba(96, 165, 250, 0.1)",
              tension: 0.4,
              fill: false,
            },
            {
              label: "Salida",
              data: cashFlowData.map((item) => item.outflow),
              borderColor: "#8F51E1",
              backgroundColor: "rgba(167, 139, 250, 0.1)",
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
            },
            title: {
              display: false,
            },
          },
        },
      })

      // Cleanup function
      return () => {
        cashFlowChart.destroy()
      }
    }
  }, [])

  return (
    <div className="finanzas-container">
      <div className="finanzas-title">
        <h1>Panel Financiero</h1>
        <div className="date-selector">
          <span>Último Semestre</span>
        </div>
      </div>

      <div className="metrics-container">
        <Card title="Ingresos Totales" className="metric-card">
          <div className="metric-content">
            <div className="metric-icon revenue-icon">$</div>
            <div className="metric-data">
              <p className="metric-value">${totalRevenue.toLocaleString()}</p>
              <p className="metric-change positive">+8.5% vs periodo anterior</p>
            </div>
          </div>
        </Card>

        <Card title="Gastos Totales" className="metric-card">
          <div className="metric-content">
            <div className="metric-icon expense-icon">$</div>
            <div className="metric-data">
              <p className="metric-value">${totalExpenses.toLocaleString()}</p>
              <p className="metric-change negative">+5.2% vs periodo anterior</p>
            </div>
          </div>
        </Card>

        <Card title="Beneficio Neto" className="metric-card">
          <div className="metric-content">
            <div className="metric-icon profit-icon">$</div>
            <div className="metric-data">
              <p className="metric-value">${totalProfit.toLocaleString()}</p>
              <p className="metric-change positive">+12.3% vs periodo anterior</p>
            </div>
          </div>
        </Card>

        <Card title="Margen de Beneficio" className="metric-card">
          <div className="metric-content">
            <div className="metric-icon margin-icon">%</div>
            <div className="metric-data">
              <p className="metric-value">{profitMargin}%</p>
              <p className="metric-change positive">+1.8% vs periodo anterior</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="charts-container">
        <Card title="Ingresos vs Gastos" className="chart-card revenue-chart">
          <div className="chart-container">
            <canvas ref={revenueChartRef}></canvas>
          </div>
        </Card>

        <Card title="Flujo de Efectivo" className="chart-card cashflow-chart">
          <div className="chart-container">
            <canvas ref={cashFlowChartRef}></canvas>
          </div>
        </Card>
      </div>
    </div>
  )
}

