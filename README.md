![](https://www.gifsanimados.org/data/media/1373/transporte-y-mudanza-imagen-animada-0044.gif)

# MUDAPP: La app de las mudanzas

## Intro
Una start-up de nueva creación ha solicitado una aplicación para dinamizar el mundo de las mudanzas y del transporte de paquetería en general.

La aplicación tiene cierta semejanza con la aplicación de UBER y, su objetivo principal es poner en contacto a personas con necesidades de transporte de bienes con transportistas que tengan un vehículo de las características adecuadas a esas necesidades.

## Requerimientos

- Un usuario se debe poder registrar en la aplicación con sus datos personales, incluidas su dirección.
- Un provisionador de transporte (pt) se debe poder registrar en la aplicación con sus datos personales, incluidas su dirección, los datos del vehículo con el prestará el servicio y los trayectos que está dispuesto a realizar.
- Un usuario debe estar autenticado para poder hacer uso de la aplicación.
- Un transportista debe estar autenticado para poder hacer uso de la aplicación.
- Todos los usuarios pueden editar su información de perfil.
- Servicio de transporte:
  - Un usuario solicita un servicio de transporte; para ello, introduce las características de la mercancía que quiere transportar, la fecha y la dirección de salida y de destino.
  - El sistema proporciona una lista de transportistas al usuario ordenados por ranking, según la disponibilidad de transportistas de la zona que más se adecúe a las características solicitadas.
  - El usuario selecciona una de los opciones.
  - El usuario hace el pago del servicio contratado a través de la aplicación.
  - El sistema bloquea el transportista.
  - El sistema notifica al transportista que tiene un transporte pendiente.
- Evaluación del transportista
  - El usuario es invitado a evaluar el servicio prestado.
- Usuario administrador deberá poder mantener la información de usuarios y transportistas: puede leer, editar o eliminar información.

## Requisitos técnicos

- Se utilizará un SGBD MySQL o MongoDB para la implementación.

## Entregables

- Modelo lógico de la base de datos.
- Fichero de dump de la base de datos.
- Fichero con los modelos de consultas que habría que implementar en la API.
- Presentación, debe incluir alguna consulta a la base de datos

## Modalidad

- Trabajo en grupo
- Tiempo máximo 1 semana - Entrega 16/01/2024

## Rúbrica de autoevaluación

1. Comprendo el problema y los requisitos:
   - El diseño refleja una comprensión clara de los requisitos del problema
   - Se han considerado todos los aspectos del problema
2. Diseño del esquema de la base de datos:
   - Se han identificado correctamente todas las entidades y relaciones
   - Se han identificado correctamente todas las colecciones y documentos
   - Se han definido correctamente los atributos de cada entidad
   - Se han aplicado correctamente las restricciones de integridad, SI LAS HAY.
3. Se ha normalizado el esquema de la base de datos para eliminar redundancias y dependencias
4. Implementación:
   - Se ha hecho un uso efectivo de las características específicas de MongoDB, como los documentos embebidos y las referencias
   - Se ha creado correctamente la base de datos a partir del esquema
   - Se han implementado correctamente las consultas requeridas
   - Se ha hecho una carga de datos y una copia de seguridad de los mismos
5. Documentación y presentación (10%)
   - Se ha documentado correctamente el diseño y la implementación de la base de datos
   - Se ha presentado de manera clara y profesional
