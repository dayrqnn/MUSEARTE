// Importar paquetes
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import obrasRouter from './routes/obras.js';

// Configuración básica
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Motor de plantillas (Pug)
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware para servir archivos estáticos
app.use(express.static('public'));  
app.use(express.static(path.join(__dirname, 'public')));

// Middleware personalizado para registrar rutas visitadas
app.use((req, res, next) => {
  const fechaHora = new Date().toLocaleString();
  console.log(`[${fechaHora}] Ruta visitada: ${req.method} ${req.url}`);
  next();
});

// Rutas
app.use('/', obrasRouter);

// Middleware para manejar errores de renderizado
app.use((err, req, res, next) => {
  console.error('Error de renderizado:', err.message);
  res.status(500).send('Error al cargar la página. Verifica tu plantilla o estructura.');
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
