exports = module.exports = [
    {
        active: false,
        origin: 'site',
        name: 'VG.no - Reise',
        url: 'http://www.vg.no/forbruker/reise/',
        linkref: 'url',
        category: 0,
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
        active: false,
        origin: 'site',
        name: 'VG.no - Sport',
        url: 'http://www.vg.no/sport/',
        linkref: 'url',
        category: 0,
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
    }
];