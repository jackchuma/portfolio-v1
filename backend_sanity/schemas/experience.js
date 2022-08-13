export default{
    name:'experience',
    title:'Experience',
    type: 'document',
    fields:[
        {
            name: 'num',
            title: 'Num',
            type: 'number'
        },
        {
            name: 'jobTitle',
            title: 'Job Title',
            type: 'string'
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'startingYear',
            title: 'Starting Year',
            type: 'string'
        },
        {
            name: 'endingYear',
            title: 'Ending Year',
            type: 'string'
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string'
        },
        {
            name: 'companyWebsite',
            title: 'Company Website',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [
                {
                    name: 'tag',
                    title: 'Tag',
                    type: 'string'
                }
            ]
        }
    ]
}