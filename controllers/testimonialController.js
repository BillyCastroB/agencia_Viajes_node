import { Testimonial } from "../models/Testimoniales.js";
const guardarTestimonial = async (req, res) => {
    console.log(req.body);
    const {nombre, correo, mensaje} = req.body;
    const errores = [];


    if(nombre.trim() == ''){
        errores.push({mensaje: "el nombre esta vacio"});
    }
    if(correo.trim() == ''){
        errores.push({mensaje: "el correo esta vacio"});
    }
    if(mensaje.trim() == ''){
        errores.push({mensaje: "el mensaje esta vacio"});
    }
    if(errores.length > 0){
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    }else{
        try{
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            }
            );
            res.redirect('/testimoniales');
        }catch(error){
            console.log(error);
        }
    }
}
export default guardarTestimonial