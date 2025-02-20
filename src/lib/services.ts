export interface Service {
  title: string;
  picture: string;
  description: string;
  art: string;
  snippet: string;
  width: number;
  height: number;
}

export const services: Service[] = [
  {
    title: "Compra",
    picture: "/servicios/buying-property-honduras.jpg",
    description:
      "Contamos con una selección de propiedades residenciales,  comerciales, y ayudamos a cada comprador potencial con los mejores  estándares de alta calidad. Ya sea que esté buscando un hogar acogedor, un activo lucrativo, o un excelente espacio para jubilarse, estamos dispuestos a cuidar de usted, y de su inversión. Nos comprometemos a estar con usted en cada paso, desde que revisa la propiedad que desea comprar hasta ayudarle en  los trámites legales como nuevo propietario.",
    art: "/servicios/buying-property-honduras.png",
    snippet:
      "Ya sea un hogar acogedor, un activo lucrativo o un espacio para jubilados, estamos dispuestos a cuidar de su inversión.",
    width: 100,
    height: 100,
  },
  {
    title: "Venta",
    picture: "/servicios/selling-property-honduras.jpg",
    description:
      "Proporcionamos una plataforma para ayudarle a vender su propiedad, asegurándole una exposición amplia a compradores potenciales, tanto a nivel local como global. Incluimos fotografías, y vídeos de alta calidad. Además, evaluaremos su propiedad para determinar el valor de mercado correcto si lo necesita. Negociaremos ofertas competitivamente, y finalizaremos la venta. Publicar la propiedad con nosotros le permitirá tener una experiencia de venta satisfactoria. Tasación de inmuebles, negociación de ofertas, finalización de venta. Lo cubrimos cada paso hasta el final.",
    art: "/servicios/selling-property-honduras.png",
    snippet:
      "Tasación de bienes raíces, negociación de ofertas, cierre de venta. Lo acompañamos en cada paso hasta el final del proceso.",
    width: 100,
    height: 100,
  },
  {
    title: "Alquiler",
    picture: "/servicios/renting-property-honduras.jpg",
    description:
      "Conectamos a propietarios con posibles inquilinos para crear experiencias de arrendamiento  mutuamente beneficiosas. Desde la ubicación, y las comodidades hasta los términos del alquiler, y los contratos de arrendamiento, nos esforzamos por brindar información transparente, y precisa para ayudarlo a tomar una decisión informada. Nuestro servicio se dirige a individuos, familias y empresas, garantizando que encuentre una propiedad que se ajuste perfectamente a sus necesidades. Con nuestro apoyo, puede navegar por el proceso sin problemas, desde programar visitas hasta enviar solicitudes, y firmar contratos de arrendamiento. ",
    art: "/servicios/renting-property-honduras.png",
    snippet:
      "Desde la ubicación, hasta los contratos de arrendamiento, nos esforzamos por ofrecer la mejor relación con los inquilinos.",
    width: 100,
    height: 100,
  },
  {
    title: "Administración",
    picture: "/servicios/management-property-honduras.jpg",
    description:
      "Entendemos que ser propietario de una propiedad conlleva una gran cantidad de responsabilidades, y es por eso que ofrecemos a los propietarios el cumplimiento de varias tareas tales como: inspecciones, mantenimiento programado como limpieza, y reparación, acceso a contratistas, y proveedores de confianza, pago de impuestos y otros. Priorizamos el bienestar y la satisfacción tanto de propietarios como de inquilinos, asegurando que cualquier incidencia se solucione con prontitud, y eficacia. Podemos ayudar a aliviar el estrés,  y las complejidades de administrar sus bienes raíces.",
    art: "/servicios/management-property-honduras.png",
    snippet:
      "Inspecciones y mantenimientos programados, obligaciones de pago al día. Cuidamos de su activo como si fuera nuestro.",
    width: 100,
    height: 100,
  },
];
