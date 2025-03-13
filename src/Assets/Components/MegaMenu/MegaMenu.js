import { MegaMenu } from "primereact/megamenu";
import "./MegaMenu.css";

export default function Megamenu() {
  const items = [
    {
      label: "Quién Soy",
      icon: "pi pi-user",
      command: () => {
        window.open("https://ajh162.github.io/Portafolioxo/Portafolio/index.html", "_blank");
      }
    },
    { label: "Experiencia", icon: "pi pi-briefcase" },
    { label: "Contacto", icon: "pi pi-envelope" }
  ];

  return (
    <div className="card megamenu-container">
      <MegaMenu model={items} breakpoint="960px" className="custom-megamenu" />
    </div>
  );
}
