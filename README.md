# prueba-6to

Proyecto con un backend en Express + TypeORM conectado a Neon y el proyecto `hola`.

## Ejecutar desde la raíz

```powershell
# Backend con Neon
npm run start:dev

# Proyecto hola
npm run dev
```

También puedes ejecutar cada proyecto directamente:

```powershell
cd .\Prueba\backend
npm install
npm start
```

```powershell
cd .\hola
npm install
npm run dev
```

> El backend y `hola` usan el puerto `3000`. Ejecuta uno a la vez o cambia `PORT` en el `.env` correspondiente.

## Configuración del backend

Crea `Prueba/backend/.env` a partir de `.env.example` y coloca tu cadena de conexión de Neon:

```env
DATABASE_URL='postgresql://usuario:contraseña@host.neon.tech/neondb?sslmode=require&channel_binding=require'
PORT=3000
```

## Rutas del backend

| Método | Ruta | Descripción |
|---|---|---|
| GET | `http://localhost:3000/` | Responde `Joseph` |
| GET | `http://localhost:3000/user/Get-users` | Lista los usuarios |
| POST | `http://localhost:3000/user/Post-user` | Crea un usuario |
| PUT | `http://localhost:3000/user/Put-user/:id` | Actualiza un usuario |
| DELETE | `http://localhost:3000/user/Delete-user/:id` | Elimina un usuario |

### Ejemplo de creación

En Postman o Thunder Client usa **Body → raw → JSON** y envía el objeto directamente, sin comillas alrededor:

```json
{
  "name": "Joseph",
  "edad": 20,
  "genero": "Masculino",
  "direccion": "Calle 123",
  "role": "user",
  "status": "active"
}
```
