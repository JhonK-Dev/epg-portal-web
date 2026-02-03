import type { Docente } from '@/types';

export const docentes: Docente[] = [
  {
    id: 'doc-001',
    nombres: 'Carlos Alberto',
    apellidos: 'Mendoza Ríos',
    grado: 'doctor',
    especialidad: 'Gestión Pública y Políticas Públicas',
    email: 'cmendoza@unapiquitos.edu.pe',
    telefono: '+51 965 123 456',
    foto: '/images/docentes/mendoza.jpg',
    resumenPerfil: 'Doctor en Gestión Pública por la Universidad de Buenos Aires. Especialista en modernización del Estado y gestión por resultados. Consultor del BID y la CAF.',
    biografia: 'El Dr. Carlos Mendoza es un reconocido experto en gestión pública con más de 20 años de experiencia en el sector gubernamental. Ha liderado proyectos de modernización del Estado en diversos países de América Latina, trabajando como consultor para organismos internacionales como el BID, CAF y Banco Mundial. Su enfoque se centra en la implementación de sistemas de gestión por resultados y la mejora de la calidad del servicio público. Actualmente, además de su labor docente, asesora a gobiernos regionales en la implementación de políticas públicas basadas en evidencia.',
    programas: ['maestria-gestion-publica'],
    orcid: '0000-0001-2345-6789',
    googleScholar: 'https://scholar.google.com/citations?user=example1',
    linkedin: 'https://linkedin.com/in/carlosmendoza',
    areasInvestigacion: [
      'Modernización del Estado',
      'Gestión por resultados',
      'Políticas públicas basadas en evidencia',
      'Descentralización y gobiernos subnacionales',
      'Reforma del servicio civil'
    ],
    formacionAcademica: [
      { grado: 'Doctor en Gestión Pública', institucion: 'Universidad de Buenos Aires', pais: 'Argentina', anio: 2010 },
      { grado: 'Magíster en Administración Pública', institucion: 'PUCP', pais: 'Perú', anio: 2005 },
      { grado: 'Licenciado en Economía', institucion: 'Universidad Nacional de la Amazonía Peruana', pais: 'Perú', anio: 2000 }
    ],
    experienciaProfesional: [
      { cargo: 'Consultor Senior', institucion: 'Banco Interamericano de Desarrollo (BID)', periodo: '2018 - Presente', descripcion: 'Asesoría en proyectos de modernización del Estado' },
      { cargo: 'Director de Modernización', institucion: 'PCM - Presidencia del Consejo de Ministros', periodo: '2015 - 2018', descripcion: 'Liderazgo de la reforma del Estado peruano' },
      { cargo: 'Jefe de Planificación', institucion: 'Gobierno Regional de Loreto', periodo: '2010 - 2015' }
    ],
    publicacionesAcademicas: [
      { titulo: 'Modernización del Estado en la Amazonía peruana: retos y oportunidades', revista: 'Revista de Gestión Pública', anio: 2023, doi: '10.xxxx/rgp.2023.001' },
      { titulo: 'Gestión por resultados en gobiernos subnacionales', revista: 'Estado y Reforma', anio: 2022 },
      { titulo: 'Políticas públicas para el desarrollo sostenible amazónico', revista: 'Revista Latinoamericana de Políticas Públicas', anio: 2021 }
    ],
    reconocimientos: [
      'Premio Nacional a la Gestión Pública 2019',
      'Reconocimiento BID por Innovación en el Sector Público 2017',
      'Docente distinguido UNAP 2022'
    ],
    proyectosInvestigacion: [
      'Mejoramiento de la gestión pública en gobiernos locales amazónicos (CONCYTEC)',
      'Evaluación de impacto de políticas sociales en Loreto'
    ]
  },
  {
    id: 'doc-002',
    nombres: 'Patricia Elena',
    apellidos: 'Vargas Lozano',
    grado: 'doctor',
    especialidad: 'Derecho Civil y Contratos',
    email: 'pvargas@unapiquitos.edu.pe',
    telefono: '+51 965 234 567',
    foto: '/images/docentes/vargas.jpg',
    resumenPerfil: 'Doctora en Derecho por la Pontificia Universidad Católica del Perú. Especialista en derecho de contratos y responsabilidad civil. Árbitro del Centro de Arbitraje de la CCL.',
    biografia: 'La Dra. Patricia Vargas es una destacada jurista especializada en derecho civil y comercial. Con más de 15 años de experiencia en la práctica legal y la academia, ha participado como árbitro en importantes disputas comerciales y es reconocida por su expertise en contratos y responsabilidad civil. Es autora de diversos artículos y libros sobre derecho de contratos, y ha sido invitada como ponente en congresos internacionales de derecho.',
    programas: ['maestria-derecho-civil-comercial', 'doctorado-derecho'],
    orcid: '0000-0002-3456-7890',
    googleScholar: 'https://scholar.google.com/citations?user=example2',
    linkedin: 'https://linkedin.com/in/patriciavargas',
    areasInvestigacion: [
      'Derecho de contratos',
      'Responsabilidad civil',
      'Arbitraje comercial',
      'Derecho del consumidor',
      'Contratos electrónicos'
    ],
    formacionAcademica: [
      { grado: 'Doctora en Derecho', institucion: 'Pontificia Universidad Católica del Perú', pais: 'Perú', anio: 2012 },
      { grado: 'Magíster en Derecho Civil', institucion: 'Universidad de Salamanca', pais: 'España', anio: 2007 },
      { grado: 'Abogada', institucion: 'Universidad Nacional de la Amazonía Peruana', pais: 'Perú', anio: 2003 }
    ],
    experienciaProfesional: [
      { cargo: 'Árbitro', institucion: 'Centro de Arbitraje de la CCL', periodo: '2016 - Presente' },
      { cargo: 'Socia', institucion: 'Vargas & Asociados Abogados', periodo: '2010 - Presente' },
      { cargo: 'Docente Principal', institucion: 'UNAP - Facultad de Derecho', periodo: '2008 - Presente' }
    ],
    publicacionesAcademicas: [
      { titulo: 'La responsabilidad civil en contratos electrónicos', revista: 'Revista de Derecho PUCP', anio: 2023 },
      { titulo: 'El arbitraje comercial en la región amazónica', revista: 'Arbitraje PUCP', anio: 2022 },
      { titulo: 'Contratos inteligentes y blockchain: retos jurídicos', revista: 'Themis', anio: 2021 }
    ],
    reconocimientos: [
      'Medalla al Mérito Profesional - Colegio de Abogados de Loreto 2020',
      'Docente Honoraria - Universidad Nacional de Trujillo 2019'
    ]
  },
  {
    id: 'doc-003',
    nombres: 'Roberto',
    apellidos: 'Sánchez Torres',
    grado: 'doctor',
    especialidad: 'Didáctica y Evaluación Educativa',
    email: 'rsanchez@unapiquitos.edu.pe',
    foto: '/images/docentes/sanchez.jpg',
    resumenPerfil: 'Doctor en Educación por la Universidad Nacional Mayor de San Marcos. Investigador en innovación pedagógica y evaluación del aprendizaje. Autor de tres libros sobre didáctica universitaria.',
    biografia: 'El Dr. Roberto Sánchez es un destacado investigador educativo con especialización en didáctica universitaria y evaluación del aprendizaje. Ha dedicado más de 25 años a la formación de docentes y la investigación en innovación pedagógica. Sus trabajos han influenciado las políticas de formación docente en diversas universidades del país.',
    programas: ['maestria-educacion-docencia-universitaria', 'doctorado-educacion'],
    orcid: '0000-0003-4567-8901',
    areasInvestigacion: [
      'Didáctica universitaria',
      'Evaluación del aprendizaje',
      'Innovación pedagógica',
      'Formación docente',
      'Tecnología educativa'
    ],
    formacionAcademica: [
      { grado: 'Doctor en Educación', institucion: 'Universidad Nacional Mayor de San Marcos', pais: 'Perú', anio: 2008 },
      { grado: 'Magíster en Educación', institucion: 'UNMSM', pais: 'Perú', anio: 2003 },
      { grado: 'Licenciado en Educación', institucion: 'UNAP', pais: 'Perú', anio: 1998 }
    ],
    experienciaProfesional: [
      { cargo: 'Docente Principal', institucion: 'UNAP - Facultad de Ciencias de la Educación', periodo: '2005 - Presente' },
      { cargo: 'Director de Investigación', institucion: 'UNAP', periodo: '2018 - 2022' },
      { cargo: 'Consultor', institucion: 'MINEDU', periodo: '2015 - 2018' }
    ],
    publicacionesAcademicas: [
      { titulo: 'Didáctica universitaria para el siglo XXI', revista: 'Revista de Investigación Educativa', anio: 2023 },
      { titulo: 'Evaluación formativa en educación superior', revista: 'Educación PUCP', anio: 2022 }
    ],
    reconocimientos: [
      'Premio Nacional de Investigación Educativa 2021',
      'Docente Emérito UNAP 2020'
    ]
  },
  {
    id: 'doc-004',
    nombres: 'Miguel Ángel',
    apellidos: 'Paredes Ruiz',
    grado: 'doctor',
    especialidad: 'Ingeniería Ambiental y Sostenibilidad',
    email: 'mparedes@unapiquitos.edu.pe',
    foto: '/images/docentes/paredes.jpg',
    resumenPerfil: 'Doctor en Ciencias Ambientales por la Universidad de São Paulo. Especialista en evaluación de impacto ambiental y gestión de recursos naturales amazónicos.',
    biografia: 'El Dr. Miguel Paredes es un científico ambiental con amplia experiencia en la investigación y conservación de ecosistemas amazónicos. Ha liderado proyectos de investigación sobre biodiversidad, cambio climático y gestión sostenible de recursos naturales en colaboración con instituciones internacionales.',
    programas: ['maestria-ingenieria-ambiental', 'doctorado-ciencias-ambientales'],
    orcid: '0000-0004-5678-9012',
    googleScholar: 'https://scholar.google.com/citations?user=example4',
    researchgate: 'https://researchgate.net/profile/Miguel-Paredes',
    areasInvestigacion: [
      'Evaluación de impacto ambiental',
      'Gestión de recursos naturales',
      'Cambio climático amazónico',
      'Biodiversidad y conservación',
      'Desarrollo sostenible'
    ],
    formacionAcademica: [
      { grado: 'Doctor en Ciencias Ambientales', institucion: 'Universidad de São Paulo', pais: 'Brasil', anio: 2011 },
      { grado: 'Magíster en Ecología', institucion: 'INPA - Instituto Nacional de Pesquisas da Amazônia', pais: 'Brasil', anio: 2006 },
      { grado: 'Ingeniero Forestal', institucion: 'UNAP', pais: 'Perú', anio: 2002 }
    ],
    experienciaProfesional: [
      { cargo: 'Investigador Principal', institucion: 'IIAP - Instituto de Investigaciones de la Amazonía Peruana', periodo: '2012 - Presente' },
      { cargo: 'Docente', institucion: 'UNAP - Escuela de Postgrado', periodo: '2015 - Presente' },
      { cargo: 'Consultor Ambiental', institucion: 'WWF Perú', periodo: '2008 - 2012' }
    ],
    publicacionesAcademicas: [
      { titulo: 'Climate change impacts on Amazon basin hydrology', revista: 'Nature Climate Change', anio: 2023, doi: '10.1038/ncc.2023.xxx' },
      { titulo: 'Deforestation patterns in the Peruvian Amazon', revista: 'Forest Ecology and Management', anio: 2022 },
      { titulo: 'Sustainable management of tropical forests', revista: 'Environmental Science & Policy', anio: 2021 }
    ],
    reconocimientos: [
      'Premio Nacional del Ambiente 2022',
      'Beca Fulbright 2020',
      'Investigador RENACYT Nivel IV'
    ],
    proyectosInvestigacion: [
      'Impacto del cambio climático en la biodiversidad amazónica (CONCYTEC)',
      'Modelamiento hidrológico de cuencas amazónicas (IIAP-IRD)'
    ]
  },
  {
    id: 'doc-005',
    nombres: 'Ana María',
    apellidos: 'Gutiérrez Flores',
    grado: 'doctor',
    especialidad: 'Salud Pública y Epidemiología',
    email: 'agutierrez@unapiquitos.edu.pe',
    foto: '/images/docentes/gutierrez.jpg',
    resumenPerfil: 'Doctora en Salud Pública por la Universidad Peruana Cayetano Heredia. Especialista en epidemiología y gestión de sistemas de salud. Consultora de la OPS/OMS.',
    biografia: 'La Dra. Ana María Gutiérrez es una reconocida epidemióloga con extensa experiencia en salud pública tropical. Ha liderado investigaciones sobre enfermedades tropicales desatendidas y sistemas de vigilancia epidemiológica en la Amazonía peruana.',
    programas: ['maestria-salud-publica'],
    orcid: '0000-0005-6789-0123',
    areasInvestigacion: [
      'Epidemiología tropical',
      'Gestión de sistemas de salud',
      'Salud pública',
      'Enfermedades tropicales desatendidas',
      'Vigilancia epidemiológica'
    ],
    formacionAcademica: [
      { grado: 'Doctora en Salud Pública', institucion: 'Universidad Peruana Cayetano Heredia', pais: 'Perú', anio: 2013 },
      { grado: 'Magíster en Epidemiología', institucion: 'Johns Hopkins University', pais: 'Estados Unidos', anio: 2008 },
      { grado: 'Médico Cirujano', institucion: 'UNAP', pais: 'Perú', anio: 2004 }
    ],
    experienciaProfesional: [
      { cargo: 'Consultora', institucion: 'OPS/OMS', periodo: '2018 - Presente' },
      { cargo: 'Directora de Epidemiología', institucion: 'DIRESA Loreto', periodo: '2014 - 2018' },
      { cargo: 'Docente', institucion: 'UNAP - Facultad de Medicina', periodo: '2010 - Presente' }
    ],
    publicacionesAcademicas: [
      { titulo: 'Dengue surveillance in the Peruvian Amazon', revista: 'PLOS Neglected Tropical Diseases', anio: 2023 },
      { titulo: 'Health systems strengthening in tropical regions', revista: 'The Lancet Regional Health Americas', anio: 2022 }
    ],
    reconocimientos: [
      'Premio a la Investigación en Salud Pública - INS 2021',
      'Medalla al Mérito de Salud Pública - MINSA 2019'
    ]
  },
  {
    id: 'doc-006',
    nombres: 'Fernando José',
    apellidos: 'Castillo Mendoza',
    grado: 'phd',
    especialidad: 'Derecho Constitucional y Derechos Humanos',
    email: 'fcastillo@unapiquitos.edu.pe',
    foto: '/images/docentes/castillo.jpg',
    resumenPerfil: 'PhD en Derecho por la Universidad de Salamanca. Especialista en derecho constitucional comparado y protección de derechos fundamentales. Exasesor del Tribunal Constitucional.',
    biografia: 'El Dr. Fernando Castillo es un jurista constitucionalista de reconocimiento internacional. Su trabajo académico y profesional se ha centrado en la protección de derechos fundamentales y el constitucionalismo en contextos amazónicos, particularmente en lo relacionado con los derechos de pueblos indígenas.',
    programas: ['doctorado-derecho'],
    orcid: '0000-0006-7890-1234',
    googleScholar: 'https://scholar.google.com/citations?user=example6',
    linkedin: 'https://linkedin.com/in/fernandocastillo',
    areasInvestigacion: [
      'Derecho constitucional comparado',
      'Derechos humanos',
      'Derechos de pueblos indígenas',
      'Justicia constitucional',
      'Control de convencionalidad'
    ],
    formacionAcademica: [
      { grado: 'PhD en Derecho', institucion: 'Universidad de Salamanca', pais: 'España', anio: 2009 },
      { grado: 'Magíster en Derecho Constitucional', institucion: 'Universidad de Sevilla', pais: 'España', anio: 2005 },
      { grado: 'Abogado', institucion: 'UNAP', pais: 'Perú', anio: 2001 }
    ],
    experienciaProfesional: [
      { cargo: 'Asesor Jurisdiccional', institucion: 'Tribunal Constitucional del Perú', periodo: '2015 - 2020' },
      { cargo: 'Docente Principal', institucion: 'UNAP - Escuela de Postgrado', periodo: '2010 - Presente' },
      { cargo: 'Investigador Visitante', institucion: 'Max Planck Institute', periodo: '2018' }
    ],
    publicacionesAcademicas: [
      { titulo: 'Indigenous peoples rights in the Amazon: A constitutional perspective', revista: 'International Journal of Constitutional Law', anio: 2023 },
      { titulo: 'El control de convencionalidad en la jurisprudencia peruana', revista: 'Revista Española de Derecho Constitucional', anio: 2022 }
    ],
    reconocimientos: [
      'Premio Iberoamericano de Investigación Jurídica 2021',
      'Docente Honorario - Universidad de Salamanca 2020'
    ]
  },
  {
    id: 'doc-007',
    nombres: 'Lucía Mercedes',
    apellidos: 'Ramírez Delgado',
    grado: 'doctor',
    especialidad: 'Investigación Educativa y Currículo',
    email: 'lramirez@unapiquitos.edu.pe',
    foto: '/images/docentes/ramirez.jpg',
    resumenPerfil: 'Doctora en Educación por la Universidad de Barcelona. Investigadora en diseño curricular y formación docente. Coordinadora de proyectos de innovación educativa con CONCYTEC.',
    biografia: 'La Dra. Lucía Ramírez es una destacada investigadora educativa especializada en diseño curricular y formación docente. Ha desarrollado programas innovadores de capacitación para docentes en contextos interculturales amazónicos.',
    programas: ['doctorado-educacion', 'maestria-educacion-docencia-universitaria'],
    orcid: '0000-0007-8901-2345',
    areasInvestigacion: [
      'Diseño curricular',
      'Formación docente',
      'Educación intercultural',
      'Innovación educativa',
      'Tecnología educativa'
    ],
    formacionAcademica: [
      { grado: 'Doctora en Educación', institucion: 'Universidad de Barcelona', pais: 'España', anio: 2014 },
      { grado: 'Magíster en Educación Intercultural', institucion: 'Universidad Autónoma de Barcelona', pais: 'España', anio: 2010 },
      { grado: 'Licenciada en Educación', institucion: 'UNAP', pais: 'Perú', anio: 2005 }
    ],
    experienciaProfesional: [
      { cargo: 'Investigadora Principal', institucion: 'CONCYTEC - Proyecto de Innovación Educativa', periodo: '2019 - Presente' },
      { cargo: 'Coordinadora de Currículo', institucion: 'UNAP - EPG', periodo: '2016 - 2020' },
      { cargo: 'Docente', institucion: 'UNAP', periodo: '2008 - Presente' }
    ],
    publicacionesAcademicas: [
      { titulo: 'Curriculum design for intercultural contexts in the Amazon', revista: 'Curriculum Inquiry', anio: 2023 },
      { titulo: 'Teacher training in rural Amazonian communities', revista: 'Teaching and Teacher Education', anio: 2022 }
    ],
    reconocimientos: [
      'Investigadora RENACYT Nivel III',
      'Premio a la Innovación Educativa - MINEDU 2020'
    ]
  },
  {
    id: 'doc-008',
    nombres: 'José Luis',
    apellidos: 'Vásquez Fernández',
    grado: 'phd',
    especialidad: 'Ecología y Conservación',
    email: 'jvasquez@unapiquitos.edu.pe',
    foto: '/images/docentes/vasquez.jpg',
    resumenPerfil: 'PhD en Ecología por la University of Florida. Especialista en conservación de ecosistemas amazónicos y biodiversidad. Investigador principal de proyectos con la NASA y CIFOR.',
    biografia: 'El Dr. José Luis Vásquez es un ecólogo de renombre internacional especializado en la conservación de ecosistemas tropicales. Ha liderado proyectos de investigación sobre biodiversidad amazónica en colaboración con instituciones como NASA, CIFOR y Smithsonian Institution.',
    programas: ['doctorado-ciencias-ambientales', 'maestria-ingenieria-ambiental'],
    orcid: '0000-0008-9012-3456',
    googleScholar: 'https://scholar.google.com/citations?user=example8',
    researchgate: 'https://researchgate.net/profile/JoseLuis-Vasquez',
    areasInvestigacion: [
      'Ecología tropical',
      'Conservación de biodiversidad',
      'Ecología de bosques',
      'Monitoreo satelital de ecosistemas',
      'Servicios ecosistémicos'
    ],
    formacionAcademica: [
      { grado: 'PhD en Ecología', institucion: 'University of Florida', pais: 'Estados Unidos', anio: 2010 },
      { grado: 'Master of Science in Biology', institucion: 'University of Florida', pais: 'Estados Unidos', anio: 2006 },
      { grado: 'Biólogo', institucion: 'UNAP', pais: 'Perú', anio: 2003 }
    ],
    experienciaProfesional: [
      { cargo: 'Investigador Principal', institucion: 'IIAP', periodo: '2011 - Presente' },
      { cargo: 'Co-Investigador', institucion: 'NASA - Amazon Research Project', periodo: '2018 - 2023' },
      { cargo: 'Docente', institucion: 'UNAP - EPG', periodo: '2012 - Presente' }
    ],
    publicacionesAcademicas: [
      { titulo: 'Amazon forest carbon dynamics under climate change', revista: 'Nature Communications', anio: 2023, doi: '10.1038/ncomms.2023.xxx' },
      { titulo: 'Biodiversity hotspots in the Peruvian Amazon', revista: 'Science', anio: 2022 },
      { titulo: 'Remote sensing for forest monitoring', revista: 'Remote Sensing of Environment', anio: 2021 }
    ],
    reconocimientos: [
      'Investigador RENACYT Nivel V',
      'NASA Research Fellowship 2020',
      'Premio Nacional de Ciencias 2019'
    ],
    proyectosInvestigacion: [
      'Amazon Forest Monitoring using Satellite Data (NASA)',
      'Biodiversidad y servicios ecosistémicos en bosques amazónicos (CIFOR-ICRAF)'
    ]
  },
  {
    id: 'doc-009',
    nombres: 'Ricardo',
    apellidos: 'Flores Pérez',
    grado: 'magister',
    especialidad: 'Gestión de Proyectos de Inversión',
    email: 'rflores@unapiquitos.edu.pe',
    foto: '/images/docentes/flores.jpg',
    resumenPerfil: 'Magíster en Economía por la Universidad del Pacífico. Especialista en formulación y evaluación de proyectos de inversión pública. Consultor de gobiernos regionales y locales.',
    biografia: 'El Mg. Ricardo Flores es un economista especializado en gestión de proyectos de inversión pública. Con amplia experiencia en el sector público, ha asesorado a diversos gobiernos regionales y locales en la formulación y evaluación de proyectos bajo el Sistema Nacional de Inversión Pública.',
    programas: ['diplomado-proyectos-inversion-publica'],
    areasInvestigacion: [
      'Proyectos de inversión pública',
      'Evaluación social de proyectos',
      'Gestión de programas sociales',
      'Economía regional'
    ],
    formacionAcademica: [
      { grado: 'Magíster en Economía', institucion: 'Universidad del Pacífico', pais: 'Perú', anio: 2012 },
      { grado: 'Economista', institucion: 'UNAP', pais: 'Perú', anio: 2007 }
    ],
    experienciaProfesional: [
      { cargo: 'Consultor', institucion: 'Ministerio de Economía y Finanzas', periodo: '2018 - Presente' },
      { cargo: 'Jefe de la Oficina de Programación de Inversiones', institucion: 'Gobierno Regional de Loreto', periodo: '2014 - 2018' },
      { cargo: 'Especialista en Proyectos', institucion: 'Municipalidad de Maynas', periodo: '2010 - 2014' }
    ],
    publicacionesAcademicas: [
      { titulo: 'Evaluación de impacto de proyectos de infraestructura en la Amazonía', revista: 'Revista de Economía y Desarrollo', anio: 2022 }
    ]
  },
  {
    id: 'doc-010',
    nombres: 'Carmen Rosa',
    apellidos: 'Díaz Ruiz',
    grado: 'magister',
    especialidad: 'Redacción Académica y Científica',
    email: 'cdiaz@unapiquitos.edu.pe',
    foto: '/images/docentes/diaz.jpg',
    resumenPerfil: 'Magíster en Lingüística por la PUCP. Especialista en redacción científica y normas de publicación académica. Editora de revistas indexadas en Scopus.',
    biografia: 'La Mg. Carmen Rosa Díaz es una lingüista especializada en redacción científica y editorial académica. Ha contribuido significativamente a mejorar la calidad de las publicaciones científicas peruanas como editora y capacitadora.',
    programas: ['curso-normas-apa', 'curso-metodologia-investigacion'],
    areasInvestigacion: [
      'Redacción científica',
      'Lingüística aplicada',
      'Comunicación académica',
      'Edición de publicaciones científicas'
    ],
    formacionAcademica: [
      { grado: 'Magíster en Lingüística', institucion: 'Pontificia Universidad Católica del Perú', pais: 'Perú', anio: 2015 },
      { grado: 'Licenciada en Educación - Lengua y Literatura', institucion: 'UNAP', pais: 'Perú', anio: 2010 }
    ],
    experienciaProfesional: [
      { cargo: 'Editora', institucion: 'Revista Científica UNAP (Scopus)', periodo: '2018 - Presente' },
      { cargo: 'Coordinadora de Talleres', institucion: 'CONCYTEC - Programa de Publicación Científica', periodo: '2019 - 2022' },
      { cargo: 'Docente', institucion: 'UNAP - EPG', periodo: '2016 - Presente' }
    ],
    publicacionesAcademicas: [
      { titulo: 'Estrategias de redacción para publicación en revistas de alto impacto', revista: 'Revista de Investigación en Comunicación', anio: 2023 },
      { titulo: 'La escritura académica en universidades amazónicas', revista: 'Lingüística y Literatura', anio: 2021 }
    ]
  }
];

// Helpers
export const getDocenteById = (id: string) => docentes.find(d => d.id === id);
export const getDocentesByPrograma = (programaId: string) =>
  docentes.filter(d => d.programas?.includes(programaId));
export const getDoctores = () => docentes.filter(d => d.grado === 'doctor' || d.grado === 'phd');
export const getMagisteres = () => docentes.filter(d => d.grado === 'magister');
export const getAllDocenteIds = () => docentes.map(d => d.id);
