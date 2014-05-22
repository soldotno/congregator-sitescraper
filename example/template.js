exports = module.exports = [
    {
        active: true,
        origin: 'site',
        name: 'VG.no - Reise',
        url: 'http://www.vg.no/forbruker/reise/',
        linkref: 'url',
        category: 6,
        format: 'desktop',
        body: true,
        template: {
            containers: [
                {
                    selector: 'div.article-content',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h3 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h3 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'h3 a'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            items: [
                                {
                                    selector: 'a img',
                                    attribute: 'src'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        active: true,
        origin: 'site',
        name: 'VG.no - Sport',
        url: 'http://www.vg.no/sport/',
        linkref: 'url',
        category: 7,
        format: 'desktop',
        body: true,
        template: {
            containers: [
                {
                    selector: 'div.article-content',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h3 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h3 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'h3 a'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            items: [
                                {
                                    selector: 'a img',
                                    attribute: 'src'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        active: true,
        origin: 'site',
        name: 'Dagbladet.no - Økonomi',
        url: 'http://www.dagbladet.no/okonomi/',
        linkref: 'url',
        category: 10,
        format: 'desktop',
        body: true,
        template: {
            containers: [
                {
                    selector: '.grid-u',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'h2 a'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            items: [
                                {
                                    selector: 'a img',
                                    attribute: 'src'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        active: true,
        origin: 'site',
        name: 'Dagbladet.no - Bil og Motor',
        url: 'http://www.dagbladet.no/bil/',
        linkref: 'url',
        category: 4,
        format: 'desktop',
        body: true,
        template: {
            containers: [
                {
                    selector: '.grid-u',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'h2 a'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            items: [
                                {
                                    selector: 'a img',
                                    attribute: 'src'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        active: true,
        origin: 'site',
        name: 'Dagbladet.no - Kultur',
        url: 'http://www.dagbladet.no/kultur/',
        linkref: 'url',
        category: 9,
        format: 'desktop',
        body: true,
        template: {
            containers: [
                {
                    selector: '.grid-u',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'h2 a'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            items: [
                                {
                                    selector: 'a img',
                                    attribute: 'src'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        active: true,
        origin: 'site',
        name: 'Dagbladet.no - Kjendis',
        url: 'http://www.kjendis.no/',
        linkref: 'url',
        category: 9,
        format: 'desktop',
        body: true,
        template: {
            containers: [
                {
                    selector: '.grid-u',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'h2 a'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            items: [
                                {
                                    selector: 'a img',
                                    attribute: 'src'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        active: true,
        origin: 'site',
        name: 'Dagbladet.no - Reise',
        url: 'http://www.dagbladet.no/reise/',
        linkref: 'url',
        category: 6,
        format: 'desktop',
        body: true,
        template: {
            containers: [
                {
                    selector: '.grid-u',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'h2 a'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            items: [
                                {
                                    selector: 'a img',
                                    attribute: 'src'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        active: true,
        origin: 'site',
        name: 'Side2.no - Mote',
        url: 'http://www.side2.no/mote/',
        linkref: 'url',
        category: 3,
        format: 'desktop',
        body: true,
        template: {
            containers: [
                {
                    selector: 'div.article-content',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h3 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h3 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'h3 a'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            items: [
                                {
                                    selector: 'a img',
                                    attribute: 'src'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        active: true,
        origin: 'site',
        name: 'Side2.no - Helse',
        url: 'http://www.side2.no/helse/',
        linkref: 'url',
        category: 1,
        format: 'desktop',
        body: true,
        template: {
            containers: [
                {
                    selector: 'article',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h1 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h1 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'h1 a'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            items: [
                                {
                                    selector: 'a img',
                                    attribute: 'src'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        active: true,
        origin: 'site',
        name: 'Dagbladet.no - Mat',
        url: 'http://www.dagbladet.no/mat/',
        linkref: 'url',
        category: 2,
        format: 'desktop',
        body: true,
        template: {
            containers: [
                {
                    selector: '.grid-u',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'h2 a'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            items: [
                                {
                                    selector: 'a img',
                                    attribute: 'src'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        active: true,
        origin: 'site',
        name: 'Dagbladet.no - Data',
        url: 'http://www.dagbladet.no/data/',
        linkref: 'url',
        category: 8,
        format: 'desktop',
        body: true,
        template: {
            containers: [
                {
                    selector: '.grid-u',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'h2 a'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            items: [
                                {
                                    selector: 'a img',
                                    attribute: 'src'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        active: true,
        origin: 'site',
        name: 'ITavisen.no',
        url: 'http://www.itavisen.no/',
        linkref: 'url',
        category: 8,
        format: 'desktop',
        body: true,
        template: {
            containers: [
                {
                    selector: '.article',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'div.views-field-field-title-front div.field-content a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'div.views-field-field-title-front div.field-content a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'div.views-field-field-title-front div.field-content a'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            items: [
                                {
                                    selector: 'div.views-field-field-image a img',
                                    attribute: 'src'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        active: true,
        origin: 'site',
        name: 'Dagbladet.no - Bolig',
        url: 'http://www.dagbladet.no/bolig/',
        linkref: 'url',
        category: 0,
        format: 'desktop',
        body: true,
        template: {
            containers: [
                {
                    selector: '.grid-u',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'h2 a'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            items: [
                                {
                                    selector: 'a img',
                                    attribute: 'src'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        active: true,
        origin: 'site',
        name: 'Aftenposten.no - Bolig',
        url: 'http://www.aftenposten.no/bolig/',
        linkref: 'url',
        category: 0,
        format: 'desktop',
        body: true,
        template: {
            containers: [
                {
                    selector: '.article',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'h2 a'
                                },
                                {
                                    selector: 'a'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            items: [
                                {
                                    selector: 'a img',
                                    attribute: 'src'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        active: true,
        origin: 'site',
        name: 'Aftenposten.no - Digital',
        url: 'http://www.aftenposten.no/digital/',
        linkref: 'url',
        category: 8,
        format: 'desktop',
        body: true,
        template: {
            containers: [
                {
                    selector: '.article',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'h2 a'
                                },
                                {
                                    selector: 'a'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            items: [
                                {
                                    selector: 'a img',
                                    attribute: 'src'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
];