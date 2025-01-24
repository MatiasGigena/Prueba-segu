Prueba Técnica Segurarse.

Buenas chicos, dejo este README para explicarles un par de cosas. La primera es que no pude armar el server de Docker debido a que estoy en Mar del Plata y se me hizo complicado estar bastante tiempo con la computadora. Siento que, para el tiempo que tuve, hice un muy buen trabajo, igualmente, en donde hice un login funcional con rutas protegidas, y en donde van a poder testear los dos puntos de vista, ya sea de usuario o admin con sus respectivas funciones. Como admin, agregué una función en la que puede gestionar y eliminar otros usuarios. Al no armar una base de datos convencional, me forcé a hacerlo sobre un .json y, cuando lo testeen, van a poder ver que una vez logueado desde la cuenta del admin, se eliminan esos usuarios desde la web y eso los elimina del JSON. Como si fuese una base de datos. Supongo que van a querer testearlo varias veces, así que, con solo ir a la pestaña de JSON y hacer CTRL + Z, vuelven la acción anterior y volverán a traer a los miembros eliminados. Después, van a ver que en las vistas principales dejé una sorpresa para la que voy a necesitar que tengan activada la aceleración por hardware en su navegador de confianza, aunque seguramente ya la tengan activada. No sentí la necesidad de hacerlo responsive a la perfección porque era muy poco código, pero igualmente, con cómo hice las cosas, probablemente se vea perfecto en celular también. Dato de color: aproveché este trabajito para probar y aprender a usar bien SCSS, que siempre le tuve ganas y me pareció muy bueno. Para ser mi primer proyecto con esa librería, siento que estuvo bastante bien. Soy soldado de Tailwind yo, jaja. Cuando estén probando la app, pueden probar diversas funciones como si se elimina el token desde la consola del navegador, automáticamente la app se da cuenta de que no tienes token y otras cositas que probablemente verán. No me tome el tiempo de hacer SEO ni accesibilidad pero si rendimiento solo por el hecho de que no tuve tanto tiempo y estuve renegando bastante con el back jaja! Eso es todo. Ahora voy a dejar instrucciones acá abajo y espero que les guste.

(TIP: ¡desplazar con la ruedita del mouse, van a disfrutar más del recorrido!)

Matías Gigena

#1 Instalar dependencias y levantar servidor local con npm run dev.

#2 Asegurarse de tener aceleración de gráficos por hardware en su navegador de internet activado (seguramente lo tengan, viene por default).

#3 Entrar a localhost:3000 donde estará levantado nuestro servidor local.

#4 Probar la app.

Todas las credenciales están en el JSON, pero las dejo acá también por las dudas para que las tengan a mano.

[
{
"id": "1",
"username": "Eduarto@hotmail.es",
"password": "contra123",
"role": "user"
},
{
"id": "2",
"username": "Carlos@gmail.com",
"password": "contra123",
"role": "admin"
},
{
"id": "3",
"username": "Esteban@yahoo.com",
"password": "contra123",
"role": "user"
},
{
"id": "4",
"username": "Tomas@mercadolibre.es",
"password": "contra123",
"role": "user"
},
{
"id": "5",
"username": "Enrique@yopmail.com",
"password": "contra123",
"role": "user"
},
{
"id": "6",
"username": "Matias@gmail.com",
"password": "contra123",
"role": "user"
},
{
"id": "7",
"username": "Roberto@outlook.es",
"password": "contra123",
"role": "user"
}
]

Todo feedback es mas que recibido y apreciado, espero respuesta para coordinar llamada!
