export type Article = {
    _id: string;
    display_date: string;
    headlines: {
        basic: string;
    };
    promo_items?: {
        basic: {
            resized_urls?: Array<{
                option: {
                    media: string,
                };
                resizedUrl: string;
            }>;
            subtitle?: string;
            type: string;
            url?: string;
        };
    };
    subtype: string;
    taxonomy: {
        tags: Array<{
            slug: string;
            text: string;
        }>
    }
    website_url: string;
};

export type Tag = {
    slug: string;
    text: string;
}
const api = {
    list:async (): Promise<{articles: Article[], tags: Tag[]}> =>{
        const data = [
            {
                _id: "ZNJ67CCHJNAEBE6IUETWOXMNFM",
                display_date: "2019-12-06T17:50:17.735Z",
                headlines: {
                  "basic": "Arroz con Leche"
                },
                promo_items: {
                  "basic": {
                    "resized_urls": [
                      {
                        "option": {
                          "media": "(min-width: 64em)"
                        },
                        "resizedUrl": "http://demo-prod.origin.arcpublishing.com/resizer/238iFhDAmiNDgSegPUuF0J8Xqww=/600x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/24QQFAJS3ZGTFL5KXDDUNP5UJU.jpg"
                      },
                      {
                        "option": {
                          "media": "(min-width: 48em)"
                        },
                        "resizedUrl": "http://demo-prod.origin.arcpublishing.com/resizer/7hcljZtr0MVNDGKu7v0k-UfSl5s=/520x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/24QQFAJS3ZGTFL5KXDDUNP5UJU.jpg"
                      },
                      {
                        "option": {
                          "media": "(min-width: 20em)"
                        },
                        "resizedUrl": "http://demo-prod.origin.arcpublishing.com/resizer/c5D7LVmjBKyRNBTnG1odhYltR_8=/375x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/24QQFAJS3ZGTFL5KXDDUNP5UJU.jpg"
                      }
                    ],
                    "subtitle": "Gentileza: Malcriado-Entre fuegos y vinos",
                    "type": "image",
                    "url": "https://arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/24QQFAJS3ZGTFL5KXDDUNP5UJU.jpg"
                  }
                },
                subtype: "7",
                taxonomy: {
                  "tags": [
                    {
                      "slug": "leche-tid47244",
                      "text": "Leche"
                    },
                    {
                      "slug": "leche-condensada-tid47751",
                      "text": "Leche condensada"
                    },
                    {
                      "slug": "leche-de-coco-tid48865",
                      "text": "Leche de coco"
                    },
                    {
                      "slug": "canela-tid47164",
                      "text": "Canela"
                    },
                    {
                      "slug": "limon-tid47252",
                      "text": "Limón"
                    },
                    {
                      "slug": "esencia-de-vainilla-tid47214",
                      "text": "Esencia de vainilla"
                    },
                    {
                      "slug": "arroz-tid47136",
                      "text": "Arroz"
                    },
                    {
                      "slug": "clavo-de-olor-tid47192",
                      "text": "Clavo de olor"
                    }
                  ],
                },
                "website_url": "/recetas/postres/arroz-con-leche-nid29102019-6/"
                },  
                {
                    _id: "ZNJ67CCHJNAEBE6IUETWOXMNFM",
                    display_date: "2019-12-06T17:50:17.735Z",
                    headlines: {
                      "basic": "Arroz con Leche"
                    },
                    promo_items: {
                      "basic": {
                        "resized_urls": [
                          {
                            "option": {
                              "media": "(min-width: 64em)"
                            },
                            "resizedUrl": "http://demo-prod.origin.arcpublishing.com/resizer/238iFhDAmiNDgSegPUuF0J8Xqww=/600x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/24QQFAJS3ZGTFL5KXDDUNP5UJU.jpg"
                          },
                          {
                            "option": {
                              "media": "(min-width: 48em)"
                            },
                            "resizedUrl": "http://demo-prod.origin.arcpublishing.com/resizer/7hcljZtr0MVNDGKu7v0k-UfSl5s=/520x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/24QQFAJS3ZGTFL5KXDDUNP5UJU.jpg"
                          },
                          {
                            "option": {
                              "media": "(min-width: 20em)"
                            },
                            "resizedUrl": "http://demo-prod.origin.arcpublishing.com/resizer/c5D7LVmjBKyRNBTnG1odhYltR_8=/375x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/24QQFAJS3ZGTFL5KXDDUNP5UJU.jpg"
                          }
                        ],
                        "subtitle": "Gentileza: Malcriado-Entre fuegos y vinos",
                        "type": "image",
                        "url": "https://arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/24QQFAJS3ZGTFL5KXDDUNP5UJU.jpg"
                      }
                    },
                    subtype: "7",
                    taxonomy: {
                      "tags": [
                        {
                          "slug": "leche-tid47244",
                          "text": "Leche"
                        },
                        {
                          "slug": "leche-condensada-tid47751",
                          "text": "Leche condensada"
                        },
                        {
                          "slug": "leche-de-coco-tid48865",
                          "text": "Leche de coco"
                        },
                        {
                          "slug": "canela-tid47164",
                          "text": "Canela"
                        },
                        {
                          "slug": "limon-tid47252",
                          "text": "Limón"
                        },
                        {
                          "slug": "esencia-de-vainilla-tid47214",
                          "text": "Esencia de vainilla"
                        },
                        {
                          "slug": "arroz-tid47136",
                          "text": "Arroz"
                        },
                        {
                          "slug": "clavo-de-olor-tid47192",
                          "text": "Clavo de olor"
                        }
                      ],
                    },
                    "website_url": "/recetas/postres/arroz-con-leche-nid29102019-6/"
                    },                
        ];

        const articles = data
        .filter((article) => article.subtype==="7").slice(0,30).map((article) => ({
          ...article, 
          display_date: new Date(article.display_date).toLocaleDateString('es-AR',{
              year:"numeric",
              month:"long",
              day: "numeric",
           }),
          }));

        const tagMap = articles.reduce<Record<string, {count: number,slug: string, text:string} >>((map, article) =>{
          for (let tag of article.taxonomy.tags){
            if(!map[tag.slug]){
              map[tag.slug] = {
                ...tag,
                count:1
              }
            }
            map[tag.slug].count++
          }
          return map;
        }, {})

        const sortedTags = Object.values(tagMap)
        .sort((a,b) => b.count - a.count)
        .slice(0,10)
        return {
            articles,
            tags: sortedTags,
        };

    },
};

export default api;