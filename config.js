var config = {
    style: 'mapbox://styles/natali1977/cmbgop7xj008s01s5bp1a4ymp',
    accessToken: 'pk.eyJ1IjoibmF0YWxpMTk3NyIsImEiOiJjbWJnb2dxYTkwMTByMmpweWIydmV1eHE0In0.0xq0dvjmgvk8zHd18XdarQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false,
    auto: false,
    title: 'Salas de Cine de la Ciudad de Vigo',
    subtitle: 'Una historia en movimiento por las salas de cine de Vigo.',
    byline: 'By Natalia Pilar Esteban Martí',
    footer: 'Natalia Pilar Esteban para RTVE Proyecto Haz <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Multicines Norte',
            image: './assets/Multicines-Norte.png',
            description: 'Fundado en los años 80. Fue un de los primeros complejos en Vigo en ofrecer varias salas bajo un mismo techo.<br><br>Dato curioso: Pionero en proyectar peliculas en formato digital en Galicia.',
            location: {
                center: [-8.71201, 42.23395],
                zoom: 18,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Gran Via Cines',
            image: './assets/Granvia.png',
            description: 'Inagurado en 1991, se convirtió rápidamente en punto de referencia cultural del centro de Vigo.<br><br> Dato curioso: Durante años fue el cine con la pantalla más grande de la ciudad.',
            location: {
                center: [-8.722488, 42.22043],
                zoom: 18,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Yelmo Cine Plex',
            image: './assets/Yelmo.png',
            description: 'Abrió sus puertas en 1997, y forma  parte de una cadena lider en España que revolucionó la experiencia cinematográfica con tecnología 3D. <br><br> Dato Curioso: Fue uno de los primeros en España en introducir el sistema de sonido. Dplby Atmos.',
            location: {
                center: [-8.70977, 42.23591],
                zoom: 18,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Multicines Plaza Elíptica',
            image: './assets/Praza.png',
            description: 'Inagurado a finales de los 90, destacó por su diseño moderno y accesibilidad para toda la familia.<br><br> Dato curioso: En su apertura, estrenaron una pelicula en simultaneo con Madrid y Barcelona, algo poco común entonces.',
            location: {
                center: [-8.72110, 42.23140],
                zoom: 18,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Cine Salesianos',
            image: './assets/Salesianos.png',
            description: 'Este cine con más de 50 años, tiene un origen ligado a la comunidad educativa de los Salesianos de Vigo.<br><br>  Dato curioso: Se mantuvo activo durante décadas como espacio para estrenos exclusivos y cines de autor.',
            location: {
                center: [-8.72250, 42.23467],
                zoom: 18,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
