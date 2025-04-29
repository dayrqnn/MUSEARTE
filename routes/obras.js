import express from 'express';

const router = express.Router();

const obras = [
  {
    id: 1,
    titulo: 'El Grito',
    autor: 'Edvard Munch',
    año: 1893,
    descripcion: 'Obra icónica de Edvard Munch que expresa angustia existencial.',
    imagen: '/img/el.avif'
  },
  {
    id: 2,
    titulo: 'La Noche Estrellada',
    autor: 'Vincent Van Gogh',
    año: 1889,
    descripcion: 'Pintura de Van Gogh que muestra el cielo nocturno sobre Saint-Rémy.',
    imagen: '/img/n.webp'
  },
  {
    id: 3,
    titulo: 'Composición VIII',
    autor: 'Wassily Kandinsky',
    año: 1923,
    descripcion: 'Obra abstracta de Kandinsky basada en formas geométricas y color.',
    imagen: '/img/c.jpg'
  },
  {
    id: 4,
    titulo: 'La Persistencia de la Memoria',
    autor: 'Salvador Dalí',
    año: 1931,
    descripcion: 'Famosa obra surrealista conocida por sus relojes derretidos.',
    imagen: '/img/p.jpg'
  },
  {
    id: 5,
    titulo: 'Guernica',
    autor: 'Pablo Picasso',
    año: 1937,
    descripcion: 'Impactante pintura que representa el bombardeo de Guernica durante la Guerra Civil Española.',
    imagen: '/img/g.jpg'
  },
  {
    id: 6,
    titulo: 'El Beso',
    autor: 'Gustav Klimt',
    año: 1907,
    descripcion: 'Obra maestra del simbolismo que representa a una pareja abrazándose.',
    imagen: '/img/b.jpg'
  },
  {
    id: 7,
    titulo: 'Número 31',
    autor: 'Jackson Pollock',
    año: 1950,
    descripcion: 'Obra de arte abstracto creada mediante la técnica del dripping.',
    imagen: '/img/n.jpg'
  },
  {
    id: 8,
    titulo: 'Broadway Boogie Woogie',
    autor: 'Piet Mondrian',
    año: 1943,
    descripcion: 'Obra geométrica inspirada en el jazz y la cuadrícula urbana de Nueva York.',
    imagen: '/img/w.jpg'
  },
  {
    id: 9,
    titulo: 'Marilyn Diptych',
    autor: 'Andy Warhol',
    año: 1962,
    descripcion: 'Obra icónica del arte pop que representa la figura de Marilyn Monroe.',
    imagen: '/img/a.jpg'
  }
];

// Ruta principal "/"
router.get('/', (req, res) => {
  res.render('index', { titulo: 'MuseArte' });
});

// Ruta para la galería "/galeria"
router.get('/galeria', function(req, res) {
  const query = req.query.query ? req.query.query.toLowerCase() : '';

  const filteredObras = obras.filter(o =>
    o.titulo.toLowerCase().includes(query) || 
    o.autor.toLowerCase().includes(query)
  );

  res.render('galeria', { title: 'Galería', obras: filteredObras, query });
});

// Ruta para mostrar detalles de una obra específica "/obra/:id"
router.get('/obra/:id', function(req, res) {
  const obraId = req.params.id;
  const obra = obras.find(o => o.id == obraId);

  if (obra) {
    res.render('obra', { title: obra.titulo, obra });
  } else {
    res.status(404).render('error', { message: 'Obra no encontrada', returnUrl: '/galeria' });
  }
});

// Ruta para "Acerca de"
router.get('/acerca', (req, res) => {
  res.render('acerca', { title: 'Acerca de MuseArte' });
});

// Exportar router
export default router;
