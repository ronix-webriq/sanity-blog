// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'catalogue',
    title: 'Catalogue',
    type: 'document',
    fields: [
        {
            name: 'shop_name',
            title: 'Shop Name',
            type: 'string'
        },
        {
            name: 'breakfast',
            title: 'Breakfast',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [                        
                        {
                            name: 'product_name',
                            title: 'Product Name',
                            type: 'string'
                        },
                        {
                            name: 'product_image',
                            title: 'Product Image',
                            type: 'image',
                            options: {
                                hotspot: true
                            }
                        },
                        {
                            name: 'category',
                            title: 'Product Category',
                            type: 'string',
                            options: {
                                list: [
                                    {                                  
                                        title: 'Filipino Style',
                                        value: 'filipino_style',
                                    }
                                ]
                            }
                        },
                        {
                            name: 'product_description',
                            title: 'Product Description',
                            type: 'string'
                        },
                        {
                            name: 'serving_size',
                            title: 'Serving Size',
                            type: 'string'
                        },
                        {
                            name: 'product_price',
                            title: 'Price',
                            type: 'number'
                        },
                    ]
                }
            ]
        },
        {
            name: 'lunch',
            title: 'Lunch',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [                        
                        {
                            name: 'product_name',
                            title: 'Product Name',
                            type: 'string'
                        },
                        {
                            name: 'product_image',
                            title: 'Product Image',
                            type: 'image',
                            options: {
                                hotspot: true
                            }
                        },
                        {
                            name: 'product_description',
                            title: 'Product Description',
                            type: 'string'
                        },
                        {
                            name: 'category',
                            title: 'Product Category',
                            type: 'string',
                            options: {
                                list: [
                                    {                                  
                                        title: 'Filipino Style',
                                        value: 'filipino_style',
                                    },
                                    {                                  
                                        title: 'Chinese Style',
                                        value: 'chinese_style',
                                    }
                                    ,
                                    {                                  
                                        title: 'Korean Style',
                                        value: 'korean_style',
                                    }
                                ]
                            }
                        },
                        {
                            name: 'serving_size',
                            title: 'Serving Size',
                            type: 'string'
                        },
                        {
                            name: 'product_price',
                            title: 'Price',
                            type: 'number'
                        },
                    ]
                }
            ]
        },
        {
            name: 'dinner',
            title: 'Dinner',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [                        
                        {
                            name: 'product_name',
                            title: 'Product Name',
                            type: 'string'
                        },
                        {
                            name: 'product_image',
                            title: 'Product Image',
                            type: 'image',
                            options: {
                                hotspot: true
                            }
                        },
                        {
                            name: 'product_description',
                            title: 'Product Description',
                            type: 'string'
                        },
                        {
                            name: 'category',
                            title: 'Product Category',
                            type: 'string',
                            options: {
                                list: [
                                    {                                  
                                        title: 'Filipino Style',
                                        value: 'filipino_style',
                                    },
                                    {                                  
                                        title: 'Chinese Style',
                                        value: 'chinese_style',
                                    }
                                    ,
                                    {                                  
                                        title: 'Korean Style',
                                        value: 'korean_style',
                                    }
                                ]
                            }
                        },
                        {
                            name: 'serving_size',
                            title: 'Serving Size',
                            type: 'string'
                        },
                        {
                            name: 'product_price',
                            title: 'Price',
                            type: 'number'
                        },
                    ]
                }
            ]
        },
        {
            name: 'appetizer',
            title: 'Appetizer',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [                        
                        {
                            name: 'product_name',
                            title: 'Product Name',
                            type: 'string'
                        },
                        {
                            name: 'product_image',
                            title: 'Product Image',
                            type: 'image',
                            options: {
                                hotspot: true
                            }
                        },
                        {
                            name: 'product_description',
                            title: 'Product Description',
                            type: 'string'
                        },
                        {
                            name: 'serving_size',
                            title: 'Serving Size',
                            type: 'string'
                        },
                        {
                            name: 'product_price',
                            title: 'Price',
                            type: 'number'
                        },
                    ]
                }
            ]
        },
        {
            name: 'dessert',
            title: 'Dessert',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [                        
                        {
                            name: 'product_name',
                            title: 'Product Name',
                            type: 'string'
                        },
                        {
                            name: 'product_image',
                            title: 'Product Image',
                            type: 'image',
                            options: {
                                hotspot: true
                            }
                        },
                        {
                            name: 'product_description',
                            title: 'Product Description',
                            type: 'string'
                        },
                        {
                            name: 'serving_size',
                            title: 'Serving Size',
                            type: 'string'
                        },
                        {
                            name: 'product_price',
                            title: 'Price',
                            type: 'number'
                        },
                    ]
                }
            ]
        },
        {
            name: 'beverages',
            title: 'Beverages',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [                        
                        {
                            name: 'product_name',
                            title: 'Product Name',
                            type: 'string'                          
                        },
                        {
                            name: 'product_image',
                            title: 'Product Image',
                            type: 'image',
                            options: {
                                hotspot: true
                            }
                        },
                        {
                            name: 'product_description',
                            title: 'Product Description',
                            type: 'string'
                        },
                        {
                            name: 'serving_size',
                            title: 'Serving Size',
                            type: 'string'
                        },
                        {
                            name: 'product_price',
                            title: 'Price',
                            type: 'number'
                        },
                    ]
                }
            ]
        }
    ]
}